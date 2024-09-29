import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import icons from react-icons
import { Container } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Skills from "./Skills";

function About() {
  return (
    <>
      <Header />
      <section id="about" className="about section">
        <Container className="section-title text-center" data-aos="fade-up">
          <h2>About</h2>
        </Container>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Combined Personal Information and About Me Section */}
            <div className="col-md-6">
              <div
                className="about-info-box p-4 shadow-sm rounded"
                style={{
                  backgroundColor: "#f8f9fa", // Light background for contrast
                  border: "1px solid #dee2e6", // Subtle border
                }}
              >
                <h4
                  className="mb-4 text-uppercase"
                  style={{ letterSpacing: "2px" }}
                >
                  Personal Information
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3">
                    <strong>Name:</strong> Omkar Raykar
                  </li>
                  <li className="mb-3">
                    <strong>Profile:</strong> MERN Full Stack Developer
                  </li>
                  <li className="mb-3">
                    <strong>Email:</strong> omkaratwork0@gmail.com
                  </li>
                  <li className="mb-3">
                    <strong>Phone:</strong> (+91) 7709029461
                  </li>
                </ul>
                {/* Social Media Links */}
                <div className="social-icons mt-3">
                  <a
                    href="https://www.linkedin.com/in/raykaromkar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: "15px",
                      color: "#0077b5",
                      fontSize: "1.5rem",
                    }}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/0mkarRaykar"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: "15px",
                      color: "#333",
                      fontSize: "1.5rem",
                    }}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.instagram.com/omkarraykarr?igsh=Zmpjb210c2w2aGU2"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1da1f2", fontSize: "1.5rem" }}
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="about-me-box p-4 shadow-sm rounded"
                style={{
                  backgroundColor: "#f8f9fa", // Light background for consistency
                  border: "1px solid #dee2e6", // Subtle border
                }}
              >
                <h4
                  className="text-uppercase mb-4"
                  style={{ letterSpacing: "2px" }}
                >
                  About Me
                </h4>
                <p>
                  I'm Omkar, a passionate Full Stack Developer with a strong
                  focus on frontend development. Over the past two years, I’ve
                  honed my skills working with the MERN stack, specializing in
                  building user-centric applications that combine elegant design
                  with efficient functionality.
                </p>
                <p>
                  I enjoy solving complex challenges and am always eager to
                  learn new technologies. My experience includes working on a
                  variety of projects, from e-commerce platforms to rent
                  management systems, and I’ve developed a deep understanding of
                  both frontend and backend development.
                </p>
                <p>
                  Driven by curiosity and a desire to continuously improve, I
                  love contributing to open-source projects, exploring
                  innovative solutions, and staying up-to-date with the latest
                  industry trends. My goal is to build meaningful, impactful
                  applications that deliver real value to users and businesses
                  alike.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section in a new container below */}
          <div className="skills-content mt-5 p-4 shadow-sm rounded">
            <h4 className="text-uppercase" style={{ letterSpacing: "2px" }}>
              Professional Skills
            </h4>
            <Skills />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
