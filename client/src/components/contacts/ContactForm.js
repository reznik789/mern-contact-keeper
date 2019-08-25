import React, { useState, useContext, useEffect } from "react";
import ContactContex from '../../context/contact/contactContext';

function ContactForm(props) {
  const contactContext = useContext(ContactContex);
  const { addContact, current, updateContact, clearCurrent } = contactContext;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });
  const { name, email, phone, type } = contact;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      })
    }
  }, [contactContext, current]);
  
  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });
    

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);      
    } else {
      updateContact(contact);
    }
    clearAll();
  }

  const clearAll = () => {
    clearCurrent();    
    setContact({
      name: "",
        email: "",
        phone: "",
        type: "personal"
      })
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-pimary">{
        current ? "Edit contact" : "Add Contact"
      }</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />{" "}
      Professional
      <div>
        <button type="submit" className="btn btn-primary btn-block">
          {current ? "Edit contact" : "Add Contact"}
        </button>
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
