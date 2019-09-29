import React, { useContext, useEffect, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  const contactMapper = contact => (
    <CSSTransition key={contact._id} timeout={500} classNames="item">
      <ContactItem contact={contact} />
    </CSSTransition>
  );
  if (!contacts || loading) return <Spinner />;
  if (contacts && contacts.length === 0) return <h3>Please add contacts</h3>;
  console.log(filtered);
  return (
    <TransitionGroup>
      {!!filtered ? filtered.map(contactMapper) : contacts.map(contactMapper)}
    </TransitionGroup>
  );
};

export default Contact;
