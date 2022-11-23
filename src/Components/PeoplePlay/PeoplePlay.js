import React, { Fragment } from "react";
import classes from "./People.module.css";
import { HiArrowRight } from "react-icons/hi";
import { people } from "./data";
import { person } from "./data";

const PeoplePlay = () => {
  return (
    <Fragment>
      <section>
        <div>
          {people.map((list) => {
            const { id, img, name, tag } = list;
            return (
              <div key={id}>
                {/* <>{img}</> */}
                <img src={img} alt="img" />
                <div>
                  <p>{name}</p>
                  <p>{tag}</p>
                </div>
              </div>
            );
          })}
          <button type="button">
            <p>See More</p>
            <HiArrowRight />
          </button>
        </div>
        <div>
          {person.map((person) => {
            const { id, img, name, tag } = person;
            return (
              <div key={id}>
                <img src={img} alt="" />
                <p>{name}</p>
                <p>{tag}</p>
              </div>
            );
          })}
          <button type="button">Join Our Investors Network</button>
        </div>
      </section>
    </Fragment>
  );
};

export default PeoplePlay;
