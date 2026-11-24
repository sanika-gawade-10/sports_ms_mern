import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import NoticeSection from "../components/NoticeSection";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";

import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">

      <Navbar />

      <HeroSlider />

      <br/>
      
      {/* Welcome Section */}
      <section className="sports-section">
  <h1>Welcome to Sathaye College Sports!</h1>

  <p className="intro_home">
    At Sathaye College,{" "}
    <span className="highlight">
      sports are more than just an activity
    </span>{" "}
    — they are the spirit of our campus.
    <br/>
    From intercollegiate tournaments to everyday practice, we build a culture
    of fitness, passion, and teamwork. <br/>
    Students can explore a wide range of sports — from{" "}
    <span className="highlight">
      cricket, football, athletics
    </span>{" "}
    to{" "}
    <span className="highlight">
      badminton, chess, and indoor events
    </span>.
    With excellent facilities and experienced coaches, we help students
    discover their potential and push their limits.
    Our players have earned medals at district, state, and national levels
    while carrying forward the values of{" "}
    <span className="highlight">
      sportsmanship, discipline, and leadership
    </span>.
    <br/><br/>
    <b>Join Sathaye College Sports — where champions grow!</b>
  </p>
</section>

      <NoticeSection />

      <Achievements />

      <Footer />

    </div>
  );
}

export default Home;