import Navbar from "../Navbar";
import Footer from "../Footer";
import "./sports.css";

function SafetyMeasures() {
  return (
    <>
      <Navbar />

      <section className="sports-info-page">

        <div className="container">

          <h1 className="page-title">
            Safety Measures
          </h1>

          <p className="page-subtitle">
            Sathaye College Sports Gymkhana is committed to providing a safe,
            healthy, and enjoyable sporting environment. Every participant is
            expected to follow these essential safety measures while taking part
            in sports activities and competitions.
          </p>

          <div className="safety-list">

            <div className="safety-item">
              <span className="number">01</span>
              <div>
                <h3>Warm Up Before Play</h3>
                <p>
                  Begin every practice session and match with proper stretching
                  and warm-up exercises to reduce the risk of muscle strains and
                  sports-related injuries.
                </p>
              </div>
            </div>

            <div className="safety-item">
              <span className="number">02</span>
              <div>
                <h3>Wear Proper Sports Gear</h3>
                <p>
                  Use appropriate sports clothing, shoes, and protective
                  equipment whenever required to ensure maximum safety during
                  participation.
                </p>
              </div>
            </div>

            <div className="safety-item">
              <span className="number">03</span>
              <div>
                <h3>Stay Hydrated</h3>
                <p>
                  Drink sufficient water before, during, and after physical
                  activity to maintain hydration and prevent exhaustion or heat
                  related illnesses.
                </p>
              </div>
            </div>

            <div className="safety-item">
              <span className="number">04</span>
              <div>
                <h3>Report Injuries Immediately</h3>
                <p>
                  Inform your coach or Sports Committee immediately in case of
                  any injury, discomfort, or unsafe condition requiring medical
                  attention.
                </p>
              </div>
            </div>

            <div className="safety-item">
              <span className="number">05</span>
              <div>
                <h3>Follow Safety Instructions</h3>
                <p>
                  Respect the guidance of coaches and officials, use sports
                  equipment responsibly, and avoid risky or irresponsible
                  behaviour at all times.
                </p>
              </div>
            </div>

          </div>

          <div className="important-note">

            <h3>🚑 Emergency Support</h3>

            <p>
              First-aid assistance is available during sports activities.
              Students should immediately inform the coach or Sports Committee
              in case of any emergency or accident.
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default SafetyMeasures;