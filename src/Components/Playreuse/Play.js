import React from "react";
import play from "../../Assets/googleplay.svg";
import classes from "./Play.module.css";

const Play = () => {
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <h1>Join Real Estate Investors investing realtime</h1>
        <p>
          PropCrowdy is a crowdfunding investment platform that empowers
          Nigerians to make smart investments in real estate
        </p>
        <img src={play} alt="googleplay" />
      </section>
    </div>
  );
};

export default Play;
