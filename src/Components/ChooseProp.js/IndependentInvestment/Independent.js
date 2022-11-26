import React from "react";
import classes from "./Independent.module.css";

const Independent = () => {
  return (
    <div>
      <section className={classes.secondCard}>
        <h1>Independent Investment Committee</h1>
        <div className={classes.deal}>
          <p>
            In other to ensure that our investments are viable, we have a team
            of independent investment advisors who are responsible for
            appraising the property investment and ensuring that offerings meet
            the minimum risk acceptance criteria.
          </p>
          <button type="button">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Independent;
