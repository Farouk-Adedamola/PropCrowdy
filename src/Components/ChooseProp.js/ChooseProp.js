import React, { Fragment, useState } from "react";
import classes from "./ChooseProp.module.css";

const ChooseProp = () => {
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const submitHandler = (e) => {};
  return (
    <Fragment>
      <article className={classes.overall}>
        <section className={classes.section}>
          <div className={classes.wrapper}>
            <h1>Deal Room</h1>
            <div className={classes.contain}></div>
            <form onSubmit={submitHandler} className={classes.form}>
              <label htmlFor="">Location and Address</label>
              <input
                type="text"
                name="company"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <label htmlFor="">View Project Documents</label>
              <input
                type="text"
                name="story"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </form>
            <div className={classes.contain1}></div>
            <div className={classes.contain2}></div>
            <div className={classes.contain3}></div>
            <p>Verified By Reguatory Bodies</p>
          </div>
        </section>
        <section className={classes.secondCard}></section>
      </article>
    </Fragment>
  );
};

export default ChooseProp;
