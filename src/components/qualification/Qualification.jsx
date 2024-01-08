import React, { useState } from "react";
import "./qualification.css";
import { motion } from "framer-motion";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="section__title">
        Qualification
      </motion.h2>
      <motion.span initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="section__subtitle">
        My personel journey
      </motion.span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
          {/* <div className={toggleState === 3 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(3)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Organization
          </div> */}
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}>
                <h3 className="qualification__title">SMAN 01 MIPA</h3>
                <span className="qualification__subtitle">Cikarang Barat</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2018
                </div>
              </motion.div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                <h3 className="qualification__title">Gunadarma University</h3>
                <span className="qualification__subtitle">Depok</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2022
                </div>
              </motion.div>
            </div>
          </div>
          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                <h3 className="qualification__title">Burane Coffee</h3>
                <span className="qualification__subtitle">Depok</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </motion.div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                <h3 className="qualification__title">Florist Bouquet</h3>
                <span className="qualification__subtitle">Depok</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </motion.div>
            </div>
            <div className="qualification__data">
              <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}>
                <h3 className="qualification__title">MNC Pictures</h3>
                <span className="qualification__subtitle">Kebon Jeruk</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </motion.div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          {/* <div className={toggleState === 3 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Vier Esports</h3>
                <span className="qualification__subtitle">Athlete - PUBG Mobile</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Gunadarma Esports</h3>
                <span className="qualification__subtitle">Student Athlete - MLBB</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Zone Esports</h3>
                <span className="qualification__subtitle">Athlete - MLBB</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Freakout Esports</h3>
                <span className="qualification__subtitle">Athlete - MLBB</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
