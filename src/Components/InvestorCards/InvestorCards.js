import React, { Fragment } from "react";
import classes from "./InvestorCards.module.css";
import { card } from "./investdata";
import { people } from "../PeoplePlay/data";

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
        <div className={classes.wrapper}>
          {card.map((each) => {
            const { id, img, Text, name } = each;
            return (
              <div key={id} className={classes.card}>
                <img src={img} alt="images" />
                <h1>{name}</h1>
                <p>{Text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default InvestorCards;
