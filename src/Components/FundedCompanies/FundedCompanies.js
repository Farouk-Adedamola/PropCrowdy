import React from "react";
import classes from "./FundedCompanies.module.css";
import hazrat from "../../Assets/hazrathomes.svg";
import pison from "../../Assets/pisoncomapany.svg";

const FundedCompanies = () => {
  return (
    <div className={classes.blog}>
      <h1 className={classes.head}>Funded Companies</h1>
      <p>Our exclusive list of investment companies</p>
      <div className={classes.fundedLogos}>
        <img src={hazrat} alt="grouplist" />
        <img src={pison} alt="grouplist" />
        <img src={hazrat} alt="grouplist" />
        <img src={pison} alt="grouplist" />
      </div>
    </div>
  );
};

export default FundedCompanies;
