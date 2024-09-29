import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  FaProjectDiagram,
  FaChartLine,
  FaPaintBrush,
  FaClipboardList,
  FaCalendarAlt,
  FaComments,
} from "react-icons/fa";

function Projects() {
  return (
    <>
      <Header />
      <section id="projects" className="projects section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Projects</h2>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="project-item position-relative">
                <div className="icon">
                  <FaProjectDiagram size={40} color="#3f51b5" />{" "}
                  {/* React Icon */}
                </div>
                <a href="#" className="stretched-link">
                  <h3>Nesciunt Mete</h3>
                </a>
                <p>
                  Provident nihil minus qui consequatur non omnis maiores. Eos
                  accusantium minus dolores iure perferendis tempore et
                  consequatur.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="project-item position-relative">
                <div className="icon">
                  <FaChartLine size={40} color="#3f51b5" />
                </div>
                <a href="#" className="stretched-link">
                  <h3>Eosle Commodi</h3>
                </a>
                <p>
                  Ut autem aut autem non a. Sint sint sit facilis nam iusto
                  sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="project-item position-relative">
                <div className="icon">
                  <FaPaintBrush size={40} color="#3f51b5" />
                </div>
                <a href="#" className="stretched-link">
                  <h3>Ledo Markt</h3>
                </a>
                <p>
                  Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                  Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="project-item position-relative">
                <div className="icon">
                  <FaClipboardList size={40} color="#3f51b5" />
                </div>
                <a href="#" className="stretched-link">
                  <h3>Asperiores Commodit</h3>
                </a>
                <p>
                  Non et temporibus minus omnis sed dolor esse consequatur.
                  Cupiditate sed error ea fuga sit provident adipisci neque.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="project-item position-relative">
                <div className="icon">
                  <FaCalendarAlt size={40} color="#3f51b5" />
                </div>
                <a href="#" className="stretched-link">
                  <h3>Velit Doloremque</h3>
                </a>
                <p>
                  Cumque et suscipit saepe. Est maiores autem enim facilis ut
                  aut ipsam corporis aut. Sed animi at autem alias eius labore.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="project-item position-relative">
                <div className="icon">
                  <FaComments size={40} color="#3f51b5" />
                </div>
                <a href="#" className="stretched-link">
                  <h3>Dolori Architecto</h3>
                </a>
                <p>
                  Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                  neque non et debitis iure. Corrupti recusandae ducimus enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projects;
