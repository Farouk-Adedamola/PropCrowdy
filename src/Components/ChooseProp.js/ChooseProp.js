import React, { Fragment, useState } from "react";
import classes from "./ChooseProp.module.css";
import Independent from "./IndependentInvestment/Independent";
import IIC from "../../Assets/IIC.png";
const ChooseProp = () => {
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const submitHandler = (e) => {};
  return (
    <Fragment>
      <main className={classes.main}>
        <h1 className={classes.headText}>Why Choose PropCrowdy</h1>
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
          <section className={classes.secondCard}>
            <div className={classes.deal}>
              <h1>Our Deal Room</h1>
              <p>
                Our deal room provides you all the documentary evidence you need
                to know about an investment. As part of our due-diligence
                verification we compile all necessary documents associated with
                each opportunity on our platform.
              </p>
              <button type="button">Learn More</button>
            </div>
          </section>
        </article>
        <article className={classes.overalll}>
          <section className={classes.Independent}>
            <img src={IIC} alt="independent investment" />
          </section>
          <section className={classes.investment}>
            <Independent></Independent>
          </section>
        </article>
      </main>
    </Fragment>
  );
};

export default ChooseProp;
