import React, { Fragment } from "react";
import classes from "./Header.module.css";
import WhatsappLogo from "../WhatsappLogo";

//  images import
import group11 from "../../Assets/Group11.png";
// import manradius from "../../Assets/man2.png";

// React icons

import { FaPlay } from "react-icons/fa";

const Header = () => {
  return (
    <Fragment>
      <main className={classes.mainArea}>
        <section className={classes.section}>
          <img src={group11} alt="" />
        </section>
        <section className={classes.second_Section}>
          <h1>Real Estate Investment Oppotunities For Property Development</h1>
          <p className={classes.para}>
            PropCrowdy is a crowdfunding investment platform that empowers
            Nigerians to make smart investments in real estate
          </p>
          <div className={classes.buttons}>
            <button>Get Started</button>
            <div className={classes.wrapper}>
              <FaPlay className={classes.icon} />
              <p>See how it works</p>
            </div>
          </div>
        </section>
      </main>
      <WhatsappLogo />
    </Fragment>
  );
};

export default Header;
