import React, { useEffect, useRef } from "react";
import AOS from "aos";
import Typed from "typed.js";
import Footer from "../component/Footer";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    AOS.init();
    typedInstance.current = new Typed(typedElement.current, {
      strings: ["Designer", "Developer", "Freelancer"],
      typeSpeed: 60,
      backSpeed: 40,
      startDelay: 300,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="home section"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(135deg, #333333, #ffffff)",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        <div
          className="container text-center"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "40px",
            borderRadius: "10px",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            I am Omkar Raykar
          </h2>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "300",
              marginBottom: "20px",
              color: "#f0f0f0",
            }}
          >
            <span className="typed" ref={typedElement}></span>
          </p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              margin: "10px",
              borderRadius: "30px",
              padding: "10px 20px",
              backgroundColor: "#3f51b5",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#303f9f",
              },
            }}
           
          >
            Hire Me
          </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              margin: "10px",
              borderRadius: "30px",
              padding: "10px 20px",
              backgroundColor: "#f50057",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#c51162",
              },
            }}
          >
            Contact
          </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
