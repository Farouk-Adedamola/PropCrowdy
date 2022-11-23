import React, { Fragment } from "react";
import classes from "./Header.module.css";

//  images import
import group11 from "../../Assets/group22.png";
import whatsapp from "../../Assets/WhatsAppicon.svg";
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
          <p>
            PropCrowdy is a crowdfunding investment platform that empowers
            Nigerians to make smart <br /> investments in real estate
          </p>
          <div className={classes.buttons}>
            <button>Get Started</button>
            <div>
              <FaPlay className={classes.icon} />
              <p>See how it works</p>
            </div>
          </div>
          <div className={classes.whatsapp}>
            <img src={whatsapp} alt="whatsapp-icon" />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Header;
