import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"; // Use LinkContainer for Bootstrap compatibility

const Header = () => {
  return (
    <header
      id="header"
      className="header d-flex align-items-center sticky-top"
      style={{
        backgroundColor: "#fff", // Changed background color to white
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        padding: "10px 20px",
      }}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center">
          <h1
            className="sitename"
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#000", // Changed text color to black
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            OmDev
          </h1>
        </a>
        <Navbar expand="lg">
          <Navbar.Toggle
            aria-controls="navmenu"
            style={{ borderColor: "#000", color: "#000" }} // Changed toggle color to black
          />
          <Navbar.Collapse id="navmenu">
            <Nav className="me-auto" style={{ alignItems: "center" }}>
              {/* Use LinkContainer from react-router-bootstrap for Nav.Link */}
              <LinkContainer to="/">
                <Nav.Link
                  style={{
                    padding: "10px 15px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    color: "#000", // Changed link text color to black
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#4fd1c5")}
                  onMouseLeave={(e) => (e.target.style.color = "#000")}
                >
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link
                  style={{
                    padding: "10px 15px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    color: "#000", // Changed link text color to black
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#4fd1c5")}
                  onMouseLeave={(e) => (e.target.style.color = "#000")}
                >
                  About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/experience">
                <Nav.Link
                  style={{
                    padding: "10px 15px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    color: "#000", // Changed link text color to black
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#4fd1c5")}
                  onMouseLeave={(e) => (e.target.style.color = "#000")}
                >
                  Experience
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link
                  style={{
                    padding: "10px 15px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    color: "#000", // Changed link text color to black
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#4fd1c5")}
                  onMouseLeave={(e) => (e.target.style.color = "#000")}
                >
                  Projects
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link
                  style={{
                    padding: "10px 15px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    color: "#000", // Changed link text color to black
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#4fd1c5")}
                  onMouseLeave={(e) => (e.target.style.color = "#000")}
                >
                  Contact
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
