
import { useEffect, useState } from "react";
import "../../styles/StudentPanel/StudentParticipation.css";

const API = "http://localhost:5000/api/participation";

const emptyForm = {
  name: "",
  stream: "",
  year: "",
  division: "",
  roll: "",
  sport: "",
  level: "",
  event_date: ""
};

function StudentParticipation() {
  const student = JSON.parse(localStorage.getItem("student") || "null");
  const studentId = student?._id || student?.id;
  const studentName = student?.name || "";

  const [form, setForm] = useState({ ...emptyForm, name: studentName });
  const [preview, setPreview] = useState(null);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const today = (() => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().split("T")[0];
  })();

  // Fetch participation history
  const fetchRecords = async () => {
    if (!studentId) {
      setError("Student ID is missing. Please logout and login again.");
      setFetching(false);
      return;
    }

    try {
      setFetching(true);

      const res = await fetch(
        `${API}/my-participations?studentId=${encodeURIComponent(studentId)}`
      );
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Unable to load records.");

      setRecords(data.participations || []);
    } catch (err) {
      setError(err.message || "Unable to fetch participation records.");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  // Form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // Preview
  const handlePreview = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!studentId) {
      setError("Student ID is missing. Please login again.");
      return;
    }

    if (form.event_date > today) {
      setError("Event date cannot be in the future.");
      return;
    }

    setPreview({ ...form, name: studentName });
  };

  // Edit preview
  const handleEdit = () => {
    setForm({ ...preview });
    setPreview(null);
  };

  // Delete preview
  const handleDelete = () => {
    setPreview(null);
    setForm({ ...emptyForm, name: studentName });
    setError("");
    setSuccess("");
  };

  // Submit to MongoDB
  const handleSend = async () => {
    if (!preview || !studentId) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const res = await fetch(`${API}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...preview, studentId })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Submission failed.");

      setSuccess("Participation details submitted successfully!");
      setPreview(null);
      setForm({ ...emptyForm, name: studentName });

      await fetchRecords();
    } catch (err) {
      setError(err.message || "Unable to submit participation.");
    } finally {
      setLoading(false);
    }
  };

  // Format date
  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          timeZone: "UTC"
        })
      : "-";

  const previewFields = [
    ["Full Name", preview?.name],
    ["Stream", preview?.stream],
    ["Class", preview?.year],
    ["Division", preview?.division],
    ["Roll Number", preview?.roll],
    ["Sport", preview?.sport],
    ["Participation Level", preview?.level],
    ["Event Date", preview ? formatDate(preview.event_date) : ""]
  ];

  return (
    <div className="student-participation">
      <div className="participation-header">
        <div>
          <h2>Sports Participation</h2>
          <p>Submit your sports participation details and track your records.</p>
        </div>
      </div>

      {success && <div className="participation-success">{success}</div>}
      {error && <div className="participation-error">{error}</div>}

      {/* PARTICIPATION FORM */}
      <section className="participation-card">
        <div className="participation-card-heading">
          <div>
            <h3>Participation Details</h3>
            <p>Enter your sports event information below.</p>
          </div>
        </div>

        <form onSubmit={handlePreview}>
          <div className="participation-form-grid">
            <div className="participation-field">
              <label>Full Name</label>
              <input name="name" value={form.name} readOnly required />
            </div>

            <div className="participation-field">
              <label>Stream</label>
              <select name="stream" value={form.stream} onChange={handleChange} required>
                <option value="">Select Stream</option>
                {["BSc", "BMS", "BCom", "BAF", "BA", "BMMS", "IT"].map(v =>
                  <option key={v} value={v}>{v}</option>
                )}
              </select>
            </div>

            <div className="participation-field">
              <label>Class</label>
              <select name="year" value={form.year} onChange={handleChange} required>
                <option value="">Select Class</option>
                {["FY", "SY", "TY"].map(v =>
                  <option key={v} value={v}>{v}</option>
                )}
              </select>
            </div>

            <div className="participation-field">
              <label>Division</label>
              <select name="division" value={form.division} onChange={handleChange} required>
                <option value="">Select Division</option>
                {["A", "B", "C"].map(v =>
                  <option key={v} value={v}>{v}</option>
                )}
              </select>
            </div>

            <div className="participation-field">
              <label>Roll Number</label>
              <input
                name="roll"
                value={form.roll}
                onChange={handleChange}
                placeholder="Enter Roll Number"
                required
              />
            </div>

            <div className="participation-field">
              <label>Sport Name</label>
              <input
                name="sport"
                value={form.sport}
                onChange={handleChange}
                placeholder="Enter Sport Name"
                required
              />
            </div>

            <div className="participation-field">
              <label>Participation Level</label>
              <select name="level" value={form.level} onChange={handleChange} required>
                <option value="">Select Level</option>
                {["College", "State", "District", "Intercollegiate"].map(v =>
                  <option key={v} value={v}>{v}</option>
                )}
              </select>
            </div>

            <div className="participation-field">
              <label>Event Date</label>
              <input
                type="date"
                name="event_date"
                max={today}
                value={form.event_date}
                onChange={handleChange}
                required
              />
              <small>Select actual participation date.</small>
            </div>
          </div>

          <div className="participation-form-actions">
            <button type="submit" className="participation-preview-btn">
              Preview Details
            </button>
          </div>
        </form>
      </section>

      {/* PREVIEW */}
      {preview && (
        <section className="participation-card preview-card">
          <div className="participation-card-heading">
            <div>
              <h3>Review Your Details</h3>
              <p>Check your information before submitting.</p>
            </div>
            <span className="preview-status">Preview</span>
          </div>

          <div className="preview-details-grid">
            {previewFields.map(([label, value]) => (
              <div className="preview-detail" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="preview-actions">
            <button
              type="button"
              className="participation-send-btn"
              onClick={handleSend}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Details"}
            </button>

            <button
              type="button"
              className="participation-edit-btn"
              onClick={handleEdit}
              disabled={loading}
            >
              Edit
            </button>

            <button
              type="button"
              className="participation-delete-btn"
              onClick={handleDelete}
              disabled={loading}
            >
              Delete
            </button>
          </div>
        </section>
      )}

      {/* PARTICIPATION HISTORY */}
      <section className="participation-card history-card">
        <div className="participation-card-heading">
          <div>
            <h3>Your Participation</h3>
            <p>View your previously submitted sports records.</p>
          </div>
          <span className="participation-count">{records.length} Records</span>
        </div>

        <div className="participation-table-wrapper">
          <table className="participation-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Sport</th>
                <th>Level</th>
                <th>Event Date</th>
              </tr>
            </thead>

            <tbody>
              {fetching ? (
                <tr>
                  <td colSpan="4" className="empty-participation">
                    Loading participation records...
                  </td>
                </tr>
              ) : records.length ? (
                records.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.sport}</td>
                    <td>
                      <span className="participation-level">{item.level}</span>
                    </td>
                    <td>{formatDate(item.event_date)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="empty-participation">
                    No participation records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default StudentParticipation;
