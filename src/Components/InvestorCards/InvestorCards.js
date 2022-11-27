import React, { Fragment } from "react";
import classes from "./InvestorCards.module.css";
import { card } from "./investdata";
import { people } from "../PeoplePlay/data";
import Card1 from "../Reusable/Card1";

const InvestorCards = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <div className={classes.firstwrapper}>
          {people.map((person) => {
            const { id, img, price, tag, css } = person;
            return (
              <div key={id} className={classes.persons} style={css}>
                <img src={img} alt="" />
                <div className={classes.separate}>
                  <h1>{price}</h1>
                  <p>{tag}</p>
                </div>
              </div>
            );
          })}
          <div className={classes.design}></div>
          <div className={classes.second}></div>
        </div>
        <Card1 />
      </section>
    </Fragment>
  );
};

export default InvestorCards;
