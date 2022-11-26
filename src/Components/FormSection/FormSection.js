import React, { Fragment, useState, useEffect } from "react";
import classes from "./FormSection.module.css";
import avater from "../../Assets/DataAssets/avatar.png";
import Card1 from "../Reusable/Card1";
const FormSection = () => {
  const [company, setCompany] = useState("");
  const [story, setStory] = useState("");
  const submitHandler = () => {};
  return (
    <Fragment>
      <article className={classes.overall}>
        <section className={classes.section}>
          <div className={classes.wrapper}>
            <h1>Developer</h1>
            <div className={classes.contain}>
              <h1>Offer Document</h1>
              <p>verified</p>
            </div>
            <form onSubmit={submitHandler} className={classes.form}>
              <label htmlFor="">Company Introduction</label>
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <label htmlFor="">Tell Your Story</label>
              <input
                type="text"
                name="story"
                value={story}
                onChange={(e) => setStory(e.target.value)}
              />
            </form>
            <div className={classes.avater1}>
              <img src={avater} alt="avater" />
              <div className={classes.wrap}>
                <p>Raising</p>
                <h1>+ ₦100,900,000</h1>
                <p>Property Developer</p>
              </div>
            </div>
            <div className={classes.avater2}>
              <img src={avater} alt="avater" />
              <div className={classes.wrap}>
                <p>Raising</p>
                <h1>+ ₦83,900,000</h1>
                <p>Property Developer</p>
              </div>
            </div>
          </div>
        </section>
        <section className={classes.last}>
          <Card1 />
        </section>
      </article>
    </Fragment>
  );
};

export default FormSection;
