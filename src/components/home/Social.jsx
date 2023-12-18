import React from "react";
import { motion } from "framer-motion";

const iconVariants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

const Social = () => {
  return (
    <div className="home__social">
      <motion.a variants={iconVariants} initial="initial" animate="animate" transition={{ duration: 1, delay: 0.2 }} href="https://www.instagram.com/_dityaraa.21/" className="home__social-icon" rel="noreferrer" target="_blank">
        <i class="uil uil-instagram"></i>
      </motion.a>

      <motion.a variants={iconVariants} initial="initial" animate="animate" transition={{ duration: 1, delay: 0.3 }} href="https://twitter.com/halfsatannn" className="home__social-icon" rel="noreferrer" target="_blank">
        <i class="uil uil-twitter-alt"></i>
      </motion.a>

      <motion.a variants={iconVariants} initial="initial" animate="animate" transition={{ duration: 1, delay: 0.4 }} href="https://github.com/dityaraa21?tab=repositories" className="home__social-icon" rel="noreferrer" target="_blank">
        <i class="uil uil-github-alt"></i>
      </motion.a>
    </div>
  );
};

export default Social;
