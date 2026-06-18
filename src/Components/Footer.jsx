import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>AuthHub</h3>
        <p>Secure authentication made simple.</p>
      </div>

      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact</a>
      </div>

      <p className="copyright">
        © 2026 AuthHub. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;