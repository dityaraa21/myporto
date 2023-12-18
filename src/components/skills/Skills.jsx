import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="section__title">
        Skills
      </motion.h2>
      <motion.span initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="section__subtitle">
        My technical level
      </motion.span>

      <div className="skills__container container grid">
        <Frontend />

        <Backend />
      </div>
    </section>
  );
};

export default Skills;
