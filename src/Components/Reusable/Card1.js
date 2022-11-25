import React from "react";
import classes from "./Card1.module.css";
import { card } from "../InvestorCards/investdata";

const Card1 = () => {
  return (
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
  );
};

export default Card1;
