import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="footer"
        style={{
          backgroundColor: "#fff",
          color: "#000",
          padding: "20px 0",
          position: "relative",
          marginTop: "40px",
          boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container">
          <div className="social-links d-flex justify-content-center mb-3">
            <a
              href="https://github.com/0mkarRaykar"
              style={{ margin: "0 15px", color: "#000" }}
              aria-label="Github"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/omkarraykarr?igsh=Zmpjb210c2w2aGU2"
              style={{ margin: "0 15px", color: "#000" }}
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/omkarraykarr?igsh=Zmpjb210c2w2aGU2"
              style={{ margin: "0 15px", color: "#000" }}
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/raykaromkar/"
              style={{ margin: "0 15px", color: "#000" }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="credits text-center">
            <small>Designed by Omkar Raykar</small>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
