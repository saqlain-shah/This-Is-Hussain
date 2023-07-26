import React from "react";
import "./Footer.css";
import Logo from "../images/rinor.png";
const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} RINOR. All rights reserved.</p>
          <p>Address:RINOR, Jamia Masjid Rd, Near Doctor Hospital Skardu</p>
          <p>Email: info@rinor.com</p>
          <p>Phone: (058154)57424</p>
          <p>Mobile: 0340-0596665</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
