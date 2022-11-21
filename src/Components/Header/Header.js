import React, { Fragment } from "react";
import classes from "./Header.module.css";
import headerimage from "../../Assets/womanImage.png";
import manradius from "../../Assets/man2.png";

const Header = () => {
  return (
    <Fragment>
      <main className={classes.mainArea}>
        <section className={classes.section}>
          <img src={headerimage} alt="" />
          <div className={classes.part}>
            <img src={manradius} alt="" />
            <div></div>
          </div>
          <div></div>
          <div></div>
        </section>
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </main>
    </Fragment>
  );
};

export default Header;
