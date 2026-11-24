import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import sportsData from "./sportsData";
import "./sports.css";

function AZSports() {
  const [selectedSport, setSelectedSport] = useState(null);
  const [visibleCards, setVisibleCards] = useState(10);

  return (
    <>
      <Navbar />

      <div className="sports-page">
        <div className="container">

          <h2 className="sports-title">
            A-Z Sports
          </h2>

          <div className="sports-grid">

            {sportsData.slice(0, visibleCards).map((sport) => (

              <div
                key={sport.id}
                className="sport-card"
                onClick={() => setSelectedSport(sport)}
              >

                <img
                  src={sport.image}
                  alt={sport.name}
                  className="sport-image"
                />

                <div className="sport-content">
                  <h4>{sport.name}</h4>
                </div>

              </div>

            ))}

                    </div>

          <div className="view-more-section">

            {visibleCards < sportsData.length ? (

              <button
                className="view-btn"
                onClick={() =>
                  setVisibleCards((prev) =>
                    Math.min(prev + 10, sportsData.length)
                  )
                }
              >
                View More <span className="arrow">▼</span>
              </button>

            ) : (

              <button
                className="view-btn"
                onClick={() => {

                  setVisibleCards(10);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });

                }}
              >
                View Less <span className="arrow">▲</span>
              </button>

            )}

          </div>

        </div>
      </div>

      {selectedSport && (

        <div
          className="sport-modal-overlay"
          onClick={() => setSelectedSport(null)}
        >

          <div
            className="sport-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setSelectedSport(null)}
            >
              ✕
            </button>

            <img
              src={selectedSport.image}
              alt={selectedSport.name}
              className="modal-image"
            />

            <h2>{selectedSport.name}</h2>

            <h4>Information</h4>

            <p>
              {selectedSport.description}
            </p>

            <p>
              <strong>Campus :</strong> {selectedSport.campus}
            </p>

            <p>
              <strong>Type :</strong> {selectedSport.type}
            </p>

          </div>

        </div>

      )}

      <Footer />
    </>
  );
}

export default AZSports;