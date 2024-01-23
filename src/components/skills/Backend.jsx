import React from "react";
import { motion } from "framer-motion";

const Backend = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="skills__content"
    >
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Laravel</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Golang</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Backend;
