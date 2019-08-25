import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  const contactMapper = contact => (
    <ContactItem key={contact.id} contact={contact} />
  );
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contactMapper)
        : contacts.map(contactMapper)}
    </Fragment>
  );
};

export default Contact;
