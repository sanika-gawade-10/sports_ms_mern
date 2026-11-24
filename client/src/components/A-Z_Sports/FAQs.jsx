import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./sports.css";

function FAQs() {
  return (
    <>
      <Navbar />

      <div className="sports-info-page">

        <div className="sports-info-overlay">

          <div className="container">

            <h1 className="page-title">
              Frequently Asked Questions
            </h1>

            <p className="page-subtitle">
              Find answers to the most commonly asked questions regarding
              sports participation, facilities and tournaments.
            </p>

            <div className="faq-item">

              <div className="faq-question">
                1. Who can participate in sports activities?
              </div>

              <div className="faq-answer">
                All enrolled students of the institute are eligible to
                participate in sports activities after completing the
                registration process.
              </div>

            </div>

            <div className="faq-item">

              <div className="faq-question">
                2. Is registration mandatory?
              </div>

              <div className="faq-answer">
                Yes. Students must register with the Sports Department
                before participating in practice sessions, trials or
                tournaments.
              </div>

            </div>

            <div className="faq-item">

              <div className="faq-question">
                3. Can beginners join sports teams?
              </div>

              <div className="faq-answer">
                Yes. Beginners are encouraged to participate. Coaches
                provide guidance and training before team selection.
              </div>

            </div>

            <div className="faq-item">

              <div className="faq-question">
                4. Are sports facilities available throughout the year?
              </div>

              <div className="faq-answer">
                Most sports facilities remain available throughout the
                academic year according to the official schedule issued
                by the Sports Department.
              </div>

            </div>

            <div className="faq-item">

              <div className="faq-question">
                5. Is sports equipment provided by the college?
              </div>

              <div className="faq-answer">
                Yes. Sports equipment is provided for practice and
                competitions. Students should return it in good condition
                after use.
              </div>

            </div>

            <div className="faq-item">

              <div className="faq-question">
                6. How are teams selected?
              </div>

              <div className="faq-answer">
                Team selection is based on performance during trials,
                regular attendance, discipline and overall fitness.
              </div>

            </div>

            <div className="faq-item">

              <div className="faq-question">
                7. What should I wear during practice?
              </div>

              <div className="faq-answer">
                Students should wear proper sports attire, sports shoes
                and any protective equipment required for the respective
                sport.
              </div>

            </div>

            <div className="faq-item">

              <div className="faq-question">
                8. What should I do if I get injured?
              </div>

              <div className="faq-answer">
                Immediately inform your coach or sports staff. First-aid
                assistance will be provided and further medical help will
                be arranged if required.
              </div>

            </div>

            <div className="faq-item">

              <div className="faq-question">
                9. Can students participate in more than one sport?
              </div>

              <div className="faq-answer">
                Yes, provided the schedules do not clash and the student
                meets the eligibility criteria for each sport.
              </div>

            </div>

            <div className="faq-item">

              <div className="faq-question">
                10. Whom should I contact for sports-related queries?
              </div>

              <div className="faq-answer">
                Students may contact the Sports Department, coaches or
                faculty coordinators for any assistance regarding sports
                activities.
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default FAQs;