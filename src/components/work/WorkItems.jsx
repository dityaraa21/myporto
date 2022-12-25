import React from "react";
import { toast } from "react-toastify";

const WorkItems = ({ item }) => {
  const showToast = () => {
    toast.warning("Upss! Demo is unavailable");
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <span className="work__button" onClick={showToast}>
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </span>
    </div>
  );
};

export default WorkItems;
