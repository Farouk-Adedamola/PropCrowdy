import React, { Fragment, useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import navbar from "../../Assets/navbar.svg";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  //   const [fix, setFix] = useState(false);

  useEffect(() => {
    if (toggle) {
      linksContainerRef.current.style.height = `${100}vh`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggle]);
  return (
    <Fragment>
      <section className={classes.container}>
        <div className={classes.fixed}>
          <div className={classes.wrapped}>
            <div className={classes.wrap}>
              <h1>PropCrowdy</h1>
              <h3>Fundraising</h3>
            </div>
            <div>
              <button
                className={classes.btn}
                onClick={() => setToggle(!toggle)}
              >
                <img src={navbar} alt="" />
              </button>
            </div>
          </div>
        </div>
        <section className={classes.linksContainer} ref={linksContainerRef}>
          <nav ref={linksRef}>
            <NavLink
              className={classes.each}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#000" : "red",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={classes.each}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#000" : "red",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
              to="discover"
            >
              Discover
            </NavLink>
            <NavLink
              className={classes.each}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#000" : "red",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
              to="how it works"
            >
              How it works
            </NavLink>
            <NavLink
              className={classes.each}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#000" : "red",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
              to="resources"
            >
              Resources
            </NavLink>
            <NavLink
              className={classes.each}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#000" : "red",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
              to="blog"
            >
              Blog
            </NavLink>
            <BsSearch className={classes.search} />
            <NavLink
              className={classes.each}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#000" : "red",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
              to="dashboard"
            >
              Dashboard
            </NavLink>
          </nav>
        </section>
      </section>
    </Fragment>
  );
};

export default Navbar;
