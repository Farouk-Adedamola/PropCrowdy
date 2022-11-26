import React from "react";
import grouplist from "../../Assets/grouplist1.svg";
import classes from "./Blog.module.css";
const Blog = () => {
  return (
    <div className={classes.blog}>
      <h1 className={classes.head}>Articles From Our Blog</h1>
      <p>Stay updated with PropCrowdy trends and market updates</p>
      <img src={grouplist} alt="grouplist" />
    </div>
  );
};

export default Blog;
