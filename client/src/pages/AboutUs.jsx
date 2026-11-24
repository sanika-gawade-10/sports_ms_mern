import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import "../styles/aboutus.css";

function AboutUs() {

  const [showPopup, setShowPopup] = useState(false);

  const coaches = [

    {
      name: "Shri. G.D. Maske",
      role: "Gymkhana Chairman",
    },

    {
      name: "Shri. A.L. Vartak",
      role: "Sports Director",
    },

    {
      name: "Dr. M.N. Narayankar",
      role: "Football Coach",
    },

    {
      name: "Dr. (Smt.) M.S. Patankar",
      role: "Physical Education",
    },

    {
      name: "Dr. Sandeep Shinde",
      role: "Cricket Coach",
    },

    {
      name: "Shri. Gaurang Rajwadkar",
      role: "Carrom Coach",
    },

    {
      name: "Dr. Diplai Mhapsekar",
      role: "Kho-Kho Coach",
    },

    {
      name: "Smt. S.A. Pethe",
      role: "Certificate Committee",
    },

  ];

  return (
    <>

      <Navbar />

      <div className="about-page">
              {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <h1>College Gymkhana</h1>

          <p>
            A space where fitness, discipline, confidence, and sportsmanship
            grow together.
          </p>

        </div>

      </section>


      {/* ABOUT */}

      <section>

        <h2 className="title">
          About Gymkhana
        </h2>

        <div className="row">

          <img
            src={aboutImg}
            alt="About Gymkhana"
          />

          <div className="text">

            <p>

              The Sathaye College Gymkhana is the centre for sports,
              fitness, and student activities on campus. It offers a
              mini-gym with basic workout equipment and facilities for
              indoor games like table tennis, carrom, and chess.

            </p>

            <p>

              Outdoor sports such as cricket, football, volleyball and
              basketball are also supported. Guided by the Gymkhana
              Committee, students receive regular practice opportunities,
              participate in inter-college competitions and many achieve
              university, state and national level success.

            </p>

            <p>

              The Gymkhana promotes fitness, discipline, teamwork and
              leadership while providing every student with an opportunity
              to learn, compete and grow.

            </p>

          </div>

        </div>

      </section>


      {/* SPORTS & NEP */}

      <section>

        <h2 className="title">
          Sports & NEP : Credit Course
        </h2>

        <p className="nep-text">

          Sathaye College follows the NEP 2020 framework which includes
          credit-based co-curricular activities. Sports is one of the
          recognised credit courses where students can earn academic
          credits through active participation in practice sessions,
          tournaments and college sports activities. Around 30 hours of
          participation provides 2 credits while encouraging fitness,
          teamwork, discipline and overall personality development.

        </p>

        <div className="btn-center">

          <button
            className="btn"
            onClick={() => setShowPopup(true)}
          >
            Register for CC
          </button>

        </div>

      </section>


      {showPopup && (

        <div className="popup">

          <div className="popup-box">

            <h3>Registration</h3>

            <p>
              Registration will start soon!
            </p>

            <button
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>

          </div>

        </div>

      )}

            {/* COACHES */}

      <section>

        <h2 className="title">
          Coaches & Trainers
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="coach-swiper"
        >

          {coaches.map((coach, index) => (

            <SwiperSlide key={index}>

              <div className="coach-card">

                <h3>{coach.name}</h3>

                <p>{coach.role}</p>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </section>


            {/* OUR PROGRESS */}

      <section>

        <h2 className="title">
          Our Progress
        </h2>

        <div className="stats">

          <div className="stat-box">

            <h1>80+</h1>

            <p>Medals Won</p>

          </div>

          <div className="stat-box">

            <h1>40+</h1>

            <p>Sports Offered</p>

          </div>

          <div className="stat-box">

            <h1>400+</h1>

            <p>Active Players</p>

          </div>

        </div>

      </section>


      {/* SPORTS HIGHLIGHTS */}

      <section>

        <h2 className="title">
          Sports Highlights
        </h2>

        <div className="video-section">

          <video
            controls
            autoPlay
            muted
            loop
          >

            <source
            src="/videos/video.mp4"
            type="video/mp4"
/>

            Your browser does not support the video tag.

          </video>

        </div>

      </section>

      <Footer />

    </div>

    </>

  );

}

export default AboutUs;