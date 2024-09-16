import React from "react";
import s from "../Contact/Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={s.liI}>
      <p>{name}</p>
      <p>{number}</p>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
