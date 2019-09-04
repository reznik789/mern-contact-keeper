import React, { useContext, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  const contactMapper = contact => (
    <CSSTransition key={contact.id} timeout={500} classNames="item">
      <ContactItem contact={contact} />
    </CSSTransition>
  );
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contactMapper)
          : contacts.map(contactMapper)}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contact;
