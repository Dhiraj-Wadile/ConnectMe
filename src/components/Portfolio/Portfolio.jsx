import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={fadeIn("up", "tween", .4, .6)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>Perfect solution for digital experience</p>
          </div>
          <a href="https://github.com/dhiraj-wadile">
            <span className="secondaryText">Explore More Works</span>
          </a>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://portfolio-dmw1.netlify.app/" target="_blank" rel="noopener noreferrer">
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" />
          </a>
          <a href="https://ease-elearning.netlify.app/login" target="_blank" rel="noopener noreferrer">
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
          </a>
          <a href="https://web-ease-scrapping-6qhb.vercel.app/" target="_blank" rel="noopener noreferrer">
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
          </a>
          <a href="https://wonderize.vercel.app/" target="_blank" rel="noopener noreferrer">
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase4.jpg" alt="project" />
          </a>
          <a href="https://pictinc.org/auth" target="_blank" rel="noopener noreferrer">
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase5.jpg" alt="project" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
