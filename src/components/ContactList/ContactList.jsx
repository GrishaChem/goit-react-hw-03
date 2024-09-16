import React from "react";
import Contact from "../Contact/Contact.jsx";
import s from "../ContactList/ContactList.module.css";

const ContactList = ({ contactList, filtredContacts, deleteContact }) => {
  return (
    <ul className={s.container}>
      {filtredContacts.length > 0 ? (
        filtredContacts.map((filtredContact) => (
          <li className="s.li" key={filtredContact.id}>
            <Contact
              name={filtredContact.name}
              number={filtredContact.number}
              deleteContact={() => deleteContact(filtredContact.id)}
            />
          </li>
        ))
      ) : (
        <p>Not Found</p>
      )}

      {/* {contactList.map((contactItem) => (
        <li className="s.li" key={contactItem.id}>
          <Contact name={contactItem.name} number={contactItem.number} />
        </li>
      ))} */}
    </ul>
  );
};

export default ContactList;
