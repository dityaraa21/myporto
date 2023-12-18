import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import { motion } from "framer-motion";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [nullProjects, setNullProjects] = useState(false);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
      if (newProjects.length === 0) {
        setNullProjects(true);
      } else {
        setNullProjects(false);
      }
    }
  }, [item]);

  useEffect(() => {}, [nullProjects]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className={nullProjects ? "work__null container grid" : "work__container container grid"}>
        {nullProjects ? (
          <h2 className="work__title">No projects found.</h2>
        ) : (
          <motion.div className="work__container container grid">
            {projects.map((item) => (
              <motion.div initial={"hidden"} whileInView={"visible"} variants={cardVariants} viewport={{ once: true }} key={item.id}>
                <WorkItems item={item} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Works;
