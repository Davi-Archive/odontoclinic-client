import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { logo } from "../../assets";

const workData = [
  {
    _id: 16546769071,
    title: "Instagram1",
    projectLink: "#",
    codeLink: "#",
    imgUrl: logo,
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    name: "Davi",
    tags: ["1", "3", "4"],
  },
  {
    _id: 16546769071,
    title: "Instagram2",
    projectLink: "#",
    codeLink: "#",
    imgUrl: logo,
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    name: "Davi",
    tags: ["1", "3", "4"],
  },
  {
    _id: 16546769071,
    title: "Instagram3",
    projectLink: "#",
    codeLink: "#",
    imgUrl: logo,
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    name: "Davi",
    tags: ["1", "3", "4"],
  },
];

const Instagram = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  return (
    <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
      {workData.map((work) => (
        <div className="app__work-item app__flex" key={work._id}>
          <div className="app__work-img app__flex">
            <img src={work.imgUrl} alt={work.name} />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
            >
              <a href={work.projectLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href={work.codeLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className="app__work-content app__flex">
            <h4 className="bold-text">{work.title}</h4>
            <p className="p-text" style={{ marginTop: 10 }}>
              {work.description}
            </p>

            <div className="app__work-tag app__flex">
              <p className="p-text">{work.tags[0]}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Instagram;
