import Navbar from "../Navbar";
import Footer from "../Footer";
import "./sportsPages.css";

function SportsGuidelines() {
  return (
    <>
      <Navbar />

      <section className="sports-info-page">

        <div className="container">

          <h1 className="page-title">
            Sports Guidelines
          </h1>

          <p className="page-subtitle">
            Sathaye College Sports Gymkhana encourages every student to
            participate with discipline, dedication, integrity, and
            sportsmanship. The following guidelines ensure a safe,
            respectful, and enjoyable sporting environment for everyone.
          </p>

          <div className="content-section">

            <h2>🏅 General Sports Guidelines</h2>

            <ul>

              <li>Report to the sports venue at least <strong>15 minutes</strong> before the scheduled event.</li>

              <li>Wear the prescribed sports uniform and appropriate sports shoes.</li>

              <li>Maintain discipline and follow the instructions of coaches and officials.</li>

              <li>Attend practice sessions regularly to remain eligible for college representation.</li>

              <li>Respect teammates, opponents, referees, and spectators at all times.</li>

              <li>Handle sports equipment responsibly and return it after use.</li>

              <li>Keep all sports facilities clean and well-maintained.</li>

              <li>Avoid misconduct, abusive language, and unsporting behaviour.</li>

              <li>Represent Sathaye College with pride, integrity, and sportsmanship.</li>

            </ul>

          </div>

          <div className="important-note">

            <h3>📌 Important Note</h3>

            <p>
              Participation in sports is a privilege. Every student is expected
              to uphold the values of <strong>discipline, teamwork, leadership,
              respect, and fair play</strong> while representing Sathaye College
              Sports Gymkhana.
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default SportsGuidelines;