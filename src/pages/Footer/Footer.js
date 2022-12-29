import React, { Fragment } from "react";
// import footermobile from "../../Assets/footermobile.svg";
// import footerdesktop from "../../Assets/footerdesktop.svg";
import classes from "./Footer.module.css";
import { Icons, AboutUs, QuickNav, ContactUs } from "./data";

const Footer = () => {
  return (
    <Fragment>
      <section className={classes.footer}>
        <main className={classes.main}>
          <article className={classes.footerhead}>
            <div className={classes.wrap}>
              <h1>PropCrowdy</h1>
              <h3>Fundraising</h3>
            </div>
            <p className={classes.text}>
              PropCrowdy is a crowd investment platform that empowers Nigerians
              to make smart investments
            </p>
            <div className={classes.icons}>
              {Icons.map((each) => {
                const { id, icon } = each;
                return (
                  <div key={id} className={classes.iconwrap}>
                    <h4 className={classes.iconic}>
                      <a href="/">{icon}</a>
                    </h4>
                  </div>
                );
              })}
            </div>
          </article>
          <div className={classes.container}>
            <section className={classes.section}>
              <article className={classes.article}>
                <h1>About us</h1>
                {AboutUs.map((each) => {
                  const { id, name } = each;
                  return (
                    <div key={id} className={classes.about}>
                      <p>
                        <a href="/">{name}</a>
                      </p>
                    </div>
                  );
                })}
              </article>
              <article>
                <h1>Quick Nav</h1>
                {QuickNav.map((each) => {
                  const { id, name } = each;
                  return (
                    <div key={id}>
                      <p>
                        <a href="/">{name}</a>
                      </p>
                    </div>
                  );
                })}
              </article>
            </section>
            <article>
              <h1>Contact us</h1>
              {ContactUs.map((each) => {
                const { id, name, icon } = each;
                return (
                  <div key={id} className={classes.wrapper}>
                    <p>
                      <a href="/">
                        <span>{icon}</span>
                        {name}
                      </a>
                    </p>
                  </div>
                );
              })}
              <form className={classes.input}>
                <input type="text" placeholder="example@propcrowdy.com" />
                <button type="submit">
                  <a href="">JOIN</a>
                </button>
              </form>
            </article>
          </div>
        </main>
        <div className={classes.underline}></div>
        <div className={classes.copyright}>&copy; propcrowdy 2022</div>
      </section>
    </Fragment>
  );
};

export default Footer;
