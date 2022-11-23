import React from "react";
import classes from "./Whatsapp.module.css";
import whatsapp from "../Assets/WhatsAppicon.svg";

const WhatsappLogo = () => {
  return (
    <div>
      <div className={classes.whatsapp}>
        <img src={whatsapp} alt="whatsapp-icon" />
      </div>
    </div>
  );
};

export default WhatsappLogo;
