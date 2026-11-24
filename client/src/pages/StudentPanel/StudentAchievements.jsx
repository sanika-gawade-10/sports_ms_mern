
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/StudentPanel/StudentAchievements.css";

const API = "http://localhost:5000/api/achievements";
const BASE = "http://localhost:5000";

const initialForm = {
  name: "",
  stream: "",
  year: "",
  division: "",
  roll: "",
  sport: "",
  level: "",
  event_date: "",
  description: ""
};

function StudentAchievements() {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student") || "null");

  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!student?.name) {
      navigate("/student/login");
      return;
    }

    setForm(prev => ({ ...prev, name: student.name }));
    fetchAchievements();
  }, []);

  useEffect(() => {
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviewImages(urls);

    return () => urls.forEach(url => URL.revokeObjectURL(url));
  }, [files]);

  async function fetchAchievements() {
    try {
      const response = await fetch(
        `${API}?name=${encodeURIComponent(student.name)}`
      );
      const data = await response.json();

      if (response.ok) setAchievements(data.achievements || []);
    } catch {
      setMessage("Unable to load achievements.");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleFiles(e, index) {
    const selected = e.target.files[0];
    if (!selected) return;

    const allowed = ["image/jpeg", "image/png", "image/webp"];

    if (!allowed.includes(selected.type)) {
      setMessage("Only JPG, JPEG, PNG and WEBP images are allowed.");
      e.target.value = "";
      return;
    }

    if (selected.size > 5 * 1024 * 1024) {
      setMessage("Each image must be smaller than 5 MB.");
      e.target.value = "";
      return;
    }

    setMessage("");
    setFiles(prev => {
      const updated = [...prev];
      updated[index] = selected;
      return updated;
    });
  }

  function handlePreview(e) {
    e.preventDefault();

    if (Object.values(form).some(value => !String(value).trim())) {
      setMessage("Please fill all required fields.");
      return;
    }

    setPreview({
      ...form,
      images: previewImages
    });

    setMessage("");
  }

  async function handleSend() {
    if (!preview) return;

    const data = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });

    files.forEach(file => {
      if (file) data.append("images", file);
    });

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(API, {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setMessage("Achievement submitted successfully.");
      setPreview(null);
      setFiles([]);
      setForm({ ...initialForm, name: student.name });

      document.querySelectorAll('input[type="file"]').forEach(input => {
        input.value = "";
      });

      await fetchAchievements();
    } catch (error) {
      setMessage(error.message || "Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  }

  function handleDelete() {
    setPreview(null);
    setFiles([]);
    setForm({ ...initialForm, name: student.name });
    document.querySelectorAll('input[type="file"]').forEach(input => {
      input.value = "";
    });
    setMessage("");
  }

  function openGallery(images, index) {
    setGallery({ images, index });
    setZoom(1);
  }

  function changeImage(direction) {
    if (!gallery) return;

    const length = gallery.images.length;
    setGallery(prev => ({
      ...prev,
      index: (prev.index + direction + length) % length
    }));
    setZoom(1);
  }

  function changeZoom(amount) {
    setZoom(prev => Math.min(4, Math.max(0.5, prev + amount)));
  }

  useEffect(() => {
    if (!gallery) return;

    function handleKey(e) {
      if (e.key === "Escape") setGallery(null);
      if (e.key === "ArrowRight") changeImage(1);
      if (e.key === "ArrowLeft") changeImage(-1);
      if (e.key === "+" || e.key === "=") changeZoom(0.2);
      if (e.key === "-") changeZoom(-0.2);
    }

    function handleWheel(e) {
      e.preventDefault();
      changeZoom(e.deltaY < 0 ? 0.2 : -0.2);
    }

    document.addEventListener("keydown", handleKey);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [gallery]);

  const getImages = item => {
    if (Array.isArray(item.images)) return item.images;
    try {
      return JSON.parse(item.images || "[]");
    } catch {
      return item.images ? [item.images] : [];
    }
  };

  const imageUrl = image => image.startsWith("blob:")
    ? image
    : `${BASE}/uploads/${image}`;

  return (
    <div className="achievement-page">
      <h2>Achievements</h2>

      {message && <div className="achievement-message">{message}</div>}

      <div className="achievement-card">
        <form onSubmit={handlePreview}>
          <div className="achievement-form-grid">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <select name="stream" value={form.stream} onChange={handleChange} required>
              <option value="">Select Stream</option>
              {["BSc", "BMS", "BCom", "BAF", "BA", "BMMS", "IT"].map(v =>
                <option key={v}>{v}</option>
              )}
            </select>

            <select name="year" value={form.year} onChange={handleChange} required>
              <option value="">Select Class</option>
              {["FY", "SY", "TY"].map(v => <option key={v}>{v}</option>)}
            </select>

            <select name="division" value={form.division} onChange={handleChange} required>
              <option value="">Select Division</option>
              {["A", "B", "C"].map(v => <option key={v}>{v}</option>)}
            </select>

            <input
              name="roll"
              placeholder="Roll No."
              value={form.roll}
              onChange={handleChange}
              required
            />

            <input
              name="sport"
              placeholder="Enter Sport"
              value={form.sport}
              onChange={handleChange}
              required
            />

            <select name="level" value={form.level} onChange={handleChange} required>
              <option value="">Select Achievement Level</option>
              {["College", "District", "Intercollegiate", "State", "National", "International"].map(v =>
                <option key={v}>{v}</option>
              )}
            </select>

            <div>
              <input
                type="date"
                name="event_date"
                max={new Date().toISOString().split("T")[0]}
                value={form.event_date}
                onChange={handleChange}
                required
              />
              <small>Select actual achievement date</small>
            </div>

            <textarea
              className="achievement-description-input"
              name="description"
              placeholder="Sport / Achievement Description"
              value={form.description}
              onChange={handleChange}
              required
            />

            {[0, 1, 2].map(index => (
              <div key={index} className="achievement-file">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={e => handleFiles(e, index)}
                />
                <small>Achievement Image {index + 1}</small>
              </div>
            ))}
          </div>

          <button type="submit" className="achievement-preview-btn">
            Preview
          </button>
        </form>
      </div>

      {preview && (
        <div className="achievement-card achievement-preview-box">
          <h3>Achievement Preview</h3>

          <div className="achievement-preview-details">
            {[
              ["Name", preview.name],
              ["Stream", preview.stream],
              ["Class", preview.year],
              ["Division", preview.division],
              ["Roll No.", preview.roll],
              ["Sport", preview.sport],
              ["Level", preview.level],
              ["Date", new Date(preview.event_date + "T00:00:00").toLocaleDateString("en-GB", {
                day: "2-digit", month: "short", year: "numeric"
              })]
            ].map(([label, value]) => (
              <div className="achievement-preview-item" key={label}>
                <b>{label}</b>
                <span>{value}</span>
              </div>
            ))}
          </div>

          <p><b>Description</b></p>
          <div className="achievement-description">
            {preview.description}
          </div>

          {preview.images.length > 0 && (
            <>
              <p><b>Images</b></p>
              <div className="achievement-gallery">
                {preview.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Achievement"
                    onClick={() => openGallery(preview.images, index)}
                  />
                ))}
              </div>
            </>
          )}

          <div className="achievement-actions">
            <button onClick={handleSend} disabled={loading} className="achievement-send-btn">
              {loading ? "Sending..." : "Send"}
            </button>

            <button
              onClick={() => setPreview(null)}
              className="achievement-edit-btn"
            >
              Edit
            </button>

            <button onClick={handleDelete} className="achievement-delete-btn">
              Delete
            </button>
          </div>
        </div>
      )}

      <div className="achievement-card">
        <h3>Your Achievements</h3>

        <div className="achievement-table-wrapper">
          <table className="achievement-table">
            <thead>
              <tr>
                <th>Sport</th>
                <th>Level</th>
                <th>Date</th>
                <th>Description</th>
                <th>Images</th>
              </tr>
            </thead>

            <tbody>
              {achievements.length > 0 ? achievements.map(item => {
                const images = getImages(item);

                return (
                  <tr key={item._id}>
                    <td>
                      {item.sport}
                      <span className="achievement-status">
                        {item.status || "Pending"}
                      </span>
                    </td>
                    <td>{item.level}</td>
                    <td>
                      {item.event_date
                        ? new Date(item.event_date + "T00:00:00").toLocaleDateString("en-GB", {
                            day: "2-digit", month: "short", year: "numeric"
                          })
                        : ""}
                    </td>
                    <td className="achievement-description">{item.description}</td>
                    <td>
                      {images.length ? (
                        <div className="achievement-gallery">
                          {images.map((img, index) => (
                            <img
                              key={index}
                              src={imageUrl(img)}
                              alt="Achievement"
                              onClick={() => openGallery(images.map(imageUrl), index)}
                            />
                          ))}
                        </div>
                      ) : "No images"}
                    </td>
                  </tr>
                );
              }) : (
                <tr>
                  <td colSpan="5">No achievement records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {gallery && (
        <div className="achievement-modal" onClick={() => setGallery(null)}>
          <button className="achievement-close" onClick={() => setGallery(null)}>
            &times;
          </button>

          <button
            className="achievement-prev"
            onClick={e => {
              e.stopPropagation();
              changeImage(-1);
            }}
          >
            &#10094;
          </button>

          <img
            className="achievement-modal-image"
            src={gallery.images[gallery.index]}
            alt="Achievement"
            style={{ transform: `scale(${zoom})` }}
            onClick={e => e.stopPropagation()}
          />

          <button
            className="achievement-next"
            onClick={e => {
              e.stopPropagation();
              changeImage(1);
            }}
          >
            &#10095;
          </button>

          <div className="achievement-zoom">
            <button onClick={e => { e.stopPropagation(); changeZoom(-0.2); }}>−</button>
            <button onClick={e => { e.stopPropagation(); changeZoom(0.2); }}>+</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentAchievements;
