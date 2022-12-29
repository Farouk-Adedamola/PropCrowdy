import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <h1>Error 404</h1>
      <Link to="/">back home</Link>
    </section>
  );
};

export default Error;
