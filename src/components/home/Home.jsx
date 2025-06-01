import React, { useState, useEffect } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import imageSrc from "../../assets/adit.JPG";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoading(false);
    };
    img.src = imageSrc;

    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          {isLoading ? <div className="home__img-skeleton"></div> : <div className="home__img" style={{ backgroundImage: `url(${imageSrc})` }}></div>}
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
