import React from "react";
import Contact from "../Contact/Contact.jsx";
import s from "../ContactList/ContactList.module.css";

const ContactList = ({ contactList }) => {
  return (
    <ul className={s.container}>
      {contactList.map((contactItem) => (
        <li className="s.li" key={contactItem.id}>
          <Contact name={contactItem.name} number={contactItem.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
