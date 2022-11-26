import React from "react";
import footermobile from "../../Assets/footermobile.svg";
import footerdesktop from "../../Assets/footerdesktop.svg";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <img src={footermobile} alt="footermobile" />
      <img src={footerdesktop} alt="footerdesktop" />
    </div>
  );
};

export default Footer;
