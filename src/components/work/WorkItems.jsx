import React from "react";
import { toast } from "react-toastify";

const isInAppBrowser = () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  return (
    ua.includes("Instagram") ||
    ua.includes("FBAN") || // Facebook app
    ua.includes("FBAV") ||
    ua.includes("FB_IAB") ||
    ua.includes("Line") ||
    ua.includes("Twitter")
  );
};

const WorkItems = ({ item }) => {
  const showToast = (url) => {
    if (url === "" || url === undefined) {
      toast.warn("Demo is not available!");
      return;
    }

    if (isInAppBrowser()) {
      toast.info("Anda membuka dari aplikasi Instagram/FB. Untuk pengalaman terbaik, silakan buka demo ini di browser seperti Google Chrome.");
    }

    window.open(url, "_blank");
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <span className="work__button" onClick={() => showToast(item.url)}>
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </span>
    </div>
  );
};

export default WorkItems;
