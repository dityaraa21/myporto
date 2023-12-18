import React from "react";
import "./work.css";
import Works from "./Works";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="section__title">
        Portfolio
      </motion.h2>
      <motion.span initial={{ y: 100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="section__subtitle">
        Most recent works
      </motion.span>

      <Works />
    </section>
  );
};

export default Work;
