import React from "react";
import Header from "../component/Header";
import Summary from "../component/Summary";
import Education from "../component/Education";
import ProfessionalExp from "../component/ProfessionalExp";
import Footer from "../component/Footer";

function Experience() {
  return (
    <>
      <Header />
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <Summary />
              <Education />
            </div>
            <ProfessionalExp />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Experience;
