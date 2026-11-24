import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [openSports, setOpenSports] = useState(false);
  const [openEvents, setOpenEvents] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <header className="main-header">

      {/* LEFT SECTION */}
      <div className="left">

        <div className="logo">
          <img src="/images/academics/sathaye_logo.png" alt="logo" />
        </div>

        <div className="header-text">
          <div className="small">
            Parle Tilak Vidyalaya Association’s
          </div>

          <h1>SATHAYE COLLEGE</h1>

          <div className="auto">
            (AUTONOMOUS 2021–31)
          </div>

          <div className="desc">
            Re-accredited "A" Grade by NAAC (3rd CYCLE)
            <br />
            DBT-Star College, A+ Grade by SQAAF
          </div>
        </div>

      </div>

      {/* RIGHT NAV */}
      <nav className="navbar">

        <Link to="/">Home</Link>

        {/* SPORTS */}
        <div
          className="dropdown"
          onMouseEnter={() => setOpenSports(true)}
          onMouseLeave={() => setOpenSports(false)}
        >
          <a href="#">Sports ▾</a>

          {openSports && (
            <div className="dropdown-menu">

              <Link to="/sports">
                A-Z Sports
              </Link>

              <Link to="/sports/guidelines">
                Sports Guidelines
              </Link>

              <Link to="/sports/safety">
                Safety Measures
              </Link>

              <Link to="/sports/faqs">
                FAQs
              </Link>

            </div>
          )}
        </div>

        <Link to="/facilities">
          Facilities
        </Link>

        {/* EVENTS */}
        <div
          className="dropdown"
          onMouseEnter={() => setOpenEvents(true)}
          onMouseLeave={() => setOpenEvents(false)}
        >
          <a href="#">Events ▾</a>

          {openEvents && (
            <div className="dropdown-menu">

              <Link to="/events">
                Events
              </Link>

              <Link to="/gallery">
                Gallery
              </Link>

            </div>
          )}
        </div>

        <Link to="/about">
          About Us
        </Link>

        {/* LOGIN */}
        <div
          className="dropdown"
          onMouseEnter={() => setOpenLogin(true)}
          onMouseLeave={() => setOpenLogin(false)}
        >
          <a href="#">Login ▾</a>

          {openLogin && (
            <div className="dropdown-menu">

              <Link to="/student/login">
                Student
              </Link>

              <Link to="/admin/login" target="_blank" rel="noopener noreferrer">
              Admin Login
              </Link>

            </div>
          )}
        </div>

      </nav>

    </header>
  );
}

export default Navbar;