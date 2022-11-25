import React, { Fragment } from "react";
import classes from "./People.module.css";
import safeguard from "../../Assets/safeguard.svg";
import play from "../../Assets/googleplay.svg";
import { HiArrowRight } from "react-icons/hi";
import { people } from "./data";
import { person } from "./data";

// import Play from "../Playreuse/Play";

const PeoplePlay = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        <section>
          <div className={classes.card1}>
            <div className={classes.wrap}>
              <img src={safeguard} alt="safeguardimage" />
            </div>
            <h1>20,000+ Investors</h1>
            {people.map((list) => {
              const { id, img, name, tag } = list;
              return (
                <div key={id} className={classes.lists}>
                  <img src={img} alt="img" />
                  <div className={classes.desc}>
                    <p>{name}</p>
                    <p>{tag}</p>
                  </div>
                </div>
              );
            })}
            <button type="button" className={classes.button}>
              <span>See More</span>
              <HiArrowRight />
            </button>
          </div>
          <div className={classes.card2}>
            {person.map((person) => {
              const { id, img, name, tag } = person;
              return (
                <div key={id} className={classes.secondcard}>
                  <div className={classes.personimage}>
                    <img src={img} alt="" />
                  </div>
                  <div className={classes.personinfo}>
                    <p>{name}</p>
                    <p>{tag}</p>
                  </div>
                </div>
              );
            })}
            <button type="button" className={classes.secondbutton}>
              Join Our Investors Network
            </button>
          </div>
        </section>
        <section className={classes.section}>
          <h1>Join Real Estate Investors investing realtime</h1>
          <p>
            PropCrowdy is a crowdfunding investment platform that empowers
            Nigerians to make smart investments in real estate
          </p>
          <img src={play} alt="googleplay" />
        </section>
      </main>
    </Fragment>
  );
};

export default PeoplePlay;
