import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  const animation = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div className="about__info grid">
      <motion.div initial="hidden" whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }} viewport={{ once: true }} variants={animation} className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 year experience</span>
      </motion.div>

      <motion.div initial="hidden" whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.7 } }} viewport={{ once: true }} variants={animation} className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + Projects</span>
      </motion.div>

      <motion.div initial="hidden" whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.9 } }} viewport={{ once: true }} variants={animation} className="about__box">
        <i class="bx bx-support about__icon"></i>

        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </motion.div>
    </div>
  );
};

export default Info;
