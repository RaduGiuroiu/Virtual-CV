import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiCodepen } from "react-icons/fi";

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/radu-giuroiu-3335b4250/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/RaduGiuroiu?tab=repositories" target="_blank">
        <BsGithub />
      </a>
      <a href="https://codepen.io/collection/GodYdr" target="_blank">
        <FiCodepen />
      </a>
    </div>
  );
};

export default Socials;
