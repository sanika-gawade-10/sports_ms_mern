import { useState } from "react";
import "../../styles/AdminPanel/Achievements.css";

function Achievements() {

  const [filters, setFilters] = useState({
    stream: "",
    year: "",
    division: "",
    roll: "",
    sport: "",
    level: "",
    time: "",
  });

  const [achievements] = useState([
    {
      name: "Rahul Sharma",
      stream: "BSc",
      year: "TY",
      division: "A",
      roll: "12",
      sport: "Football",
      level: "College",
      date: "19 Aug 2026",
      description: "Winner of Inter-College Football Championship",
      images: [],
      status: "Approved",
    },
    {
      name: "Priya Patil",
      stream: "BMS",
      year: "SY",
      division: "B",
      roll: "25",
      sport: "Badminton",
      level: "State",
      date: "18 Aug 2026",
      description: "Secured second position in State Badminton Championship",
      images: [],
      status: "Pending",
    },
    {
      name: "Aman Shah",
      stream: "BCom",
      year: "FY",
      division: "A",
      roll: "08",
      sport: "Cricket",
      level: "College",
      date: "17 Aug 2026",
      description: "Best Player award in Inter-College Cricket Tournament",
      images: [],
      status: "Unapproved",
    },
  ]);

  const [selectedImages, setSelectedImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Achievement Filters:", filters);
  };

  const openImage = (images, index) => {
    setSelectedImages(images);
    setImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImages([]);
  };

  const nextImage = () => {
    setImageIndex(
      (imageIndex + 1) % selectedImages.length
    );
  };

  const previousImage = () => {
    setImageIndex(
      (imageIndex - 1 + selectedImages.length) %
        selectedImages.length
    );
  };

  return (
    <div className="achievements-page">

      <h2>🏆 Student Achievements</h2>

      {/* FILTER */}

      <div className="achievement-card">

        <form
          className="achievement-filters"
          onSubmit={handleSubmit}
        >

          <select
            name="stream"
            value={filters.stream}
            onChange={handleChange}
          >
            <option value="">Stream</option>
            <option value="BSc">BSc</option>
            <option value="BMS">BMS</option>
            <option value="BCom">BCom</option>
            <option value="BAF">BAF</option>
            <option value="BA">BA</option>
            <option value="BMMS">BMMS</option>
            <option value="IT">IT</option>
          </select>

          <select
            name="year"
            value={filters.year}
            onChange={handleChange}
          >
            <option value="">Class</option>
            <option value="FY">FY</option>
            <option value="SY">SY</option>
            <option value="TY">TY</option>
          </select>

          <select
            name="division"
            value={filters.year}
            onChange={handleChange}
          >
            <option value="">Division</option>
            <option value="FY">A</option>
            <option value="SY">B</option>
            <option value="TY">C</option>
          </select>

          <input
            type="text"
            name="roll"
            placeholder="Roll"
            value={filters.roll}
            onChange={handleChange}
          />

          <input
            type="text"
            name="sport"
            placeholder="Sport"
            value={filters.sport}
            onChange={handleChange}
          />

          <select
            name="level"
            value={filters.level}
            onChange={handleChange}
          >
            <option value="">Level</option>
            <option value="College">College</option>
            <option value="State">State</option>
          </select>

          <select
            name="time"
            value={filters.time}
            onChange={handleChange}
          >
            <option value="">All Time</option>
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>

          <button type="submit">
            Filter
          </button>

        </form>

      </div>


      {/* TABLE */}

      <div className="achievement-card table-card">

        <div className="achievement-table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Stream</th>
                <th>Year</th>
                <th>Division</th>
                <th>Roll</th>
                <th>Sport</th>
                <th>Level</th>
                <th>Date</th>
                <th>Description</th>
                <th>Image</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {achievements.map((achievement, index) => (

                <tr key={index}>

                  <td>{achievement.name}</td>

                  <td>{achievement.stream}</td>

                  <td>{achievement.year}</td>

                  <td>{achievement.division}</td>

                  <td>{achievement.roll}</td>

                  <td>{achievement.sport}</td>

                  <td>{achievement.level}</td>

                  <td>{achievement.date}</td>

                  <td className="achievement-description">
                    {achievement.description}
                  </td>

                  <td>

                    {achievement.images.length > 0 ? (

                      achievement.images.map(
                        (image, imageIndex) => (

                          <img
                            key={imageIndex}
                            src={image}
                            alt="Achievement"
                            className="achievement-thumb"
                            onClick={() =>
                              openImage(
                                achievement.images,
                                imageIndex
                              )
                            }
                          />

                        )
                      )

                    ) : (

                      <span className="no-image">
                        No Image
                      </span>

                    )}

                  </td>

                  <td>

                    {achievement.status === "Approved" && (
                      <span className="status-approved">
                        ✔
                      </span>
                    )}

                    {achievement.status === "Unapproved" && (
                      <span className="status-unapproved">
                        ❌
                      </span>
                    )}

                    {achievement.status === "Pending" && (
                      <div className="status-buttons">

                        <button className="approve-btn">
                          Approve
                        </button>

                        <button className="unapprove-btn">
                          Unapprove
                        </button>

                      </div>
                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* IMAGE POPUP */}

      {selectedImages.length > 0 && (

        <div
          className="achievement-modal"
          onClick={closeImage}
        >

          <button
            className="achievement-nav left"
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
          >
            ❮
          </button>

          <img
            src={selectedImages[imageIndex]}
            alt="Achievement Preview"
            className="achievement-modal-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="achievement-nav right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ❯
          </button>

        </div>

      )}

    </div>
  );
}

export default Achievements;