import React from "react";
import { card } from "../InvestorCards/investdata";
import classes from "./Card1.module.css";
const Card2 = () => {
  return (
    <div className={classes.wrapper}>
      {card.map((each) => {
        const { id, img, Text, name1 } = each;
        return (
          <div key={id} className={classes.card}>
            <img src={img} alt="images" />
            <h1>{name1}</h1>
            <p>{Text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card2;
