import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <h1 style={{ fontSize: "45px", color: "red", textAlign: "center" }}>
        Error 404
      </h1>
      <Link
        style={{
          background: "red",
          fontSize: "30px",
          color: "#fff",
          padding: "15px 10px",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          width: "50vw",
          borderRadius: "10px",
          textDecoration: "none",
          textTransform: "capitalize",
        }}
        to="/"
      >
        back home
      </Link>
    </section>
  );
};

export default Error;
