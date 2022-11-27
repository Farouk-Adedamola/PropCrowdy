import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h1>Get all the support you need, Contact our online agent </h1>
          <p>Get in touch or create account. We are 24/7 available</p>
        </div>
        <div className={classes.btn}>
          <button type="button">Contact us</button>
        </div>
        <div className={classes.box1}></div>
        <div className={classes.box2}></div>
        <div className={classes.box3}></div>
        <div className={classes.box4}></div>
      </div>
    </section>
  );
};

export default Contact;
