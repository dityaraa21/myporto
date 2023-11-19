import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Aditya Rahman</h1>

        <ul className="footer__list">
          <li>
            <a href="/#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="/#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="/#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://github.com/dityaraa21" className="footer__social-link" rel="noreferrer" target="_blank">
            <i class="bx bxl-github"></i>
          </a>

          <a href="https://www.instagram.com/_dityaraa.21/" className="footer__social-link" rel="noreferrer" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>

          <a href="https://twitter.com/halfsatannn" className="footer__social-link" rel="noreferrer" target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; DityaaRA. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
