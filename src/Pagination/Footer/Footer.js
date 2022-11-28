import React, { Fragment } from "react";
// import footermobile from "../../Assets/footermobile.svg";
// import footerdesktop from "../../Assets/footerdesktop.svg";
import classes from "./Footer.module.css";
import { Icons, AboutUs, QuickNav, ContactUs } from "./data";

const Footer = () => {
  return (
    // <img src={footermobile} alt="footermobile" />
    // <img src={footerdesktop} alt="footerdesktop" />
    <Fragment className={classes.footer}>
      <section>
        <article>
          <h1>PropCrowdy</h1>
          <p>Fundraising</p>
          <p>
            PropCrowdy is a crowd investment platform that empowers Nigerians to
            make smart investments
          </p>
          {Icons.map((each) => {
            const { id, icon } = each;
            return (
              <div key={id}>
                <p>{icon}</p>
              </div>
            );
          })}
        </article>

        <article></article>

        <article></article>
      </section>
    </Fragment>
  );
};

export default Footer;
