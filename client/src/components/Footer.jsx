import "../styles/footer.css";
function Footer() {
  return (
    <>
      <footer className="custom-footer">

        <div className="footer-container">

          {/* MAP */}
          <div className="footer-col footer-map">
            <iframe
            src="https://www.google.com/maps?q=Sathaye+College+Mumbai&output=embed"
            style={{ border: 0 }}
            loading="lazy">
            </iframe>
          </div>

          {/* LINKS */}
          <div className="footer-col footer-links">
            <h3>Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Facilities</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col footer-contact">
            <h3>Contact Us</h3>

            <p><strong>Address:</strong> Sathaye College, Mumbai</p>
            <p><strong>Email:</strong> info@sathayecollege.edu</p>
            <p><strong>Phone:</strong> +91 12345 67890</p>

            <h3>Follow Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>

        </div>

      </footer>

      <div className="footer-bottom">
        Designed and Developed by Prachi and Sanika
      </div>
    </>
  );
}

export default Footer;