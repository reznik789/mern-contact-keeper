import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContex from "./contactContext";
import contactReduser from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jon Dou",
        email: "jon_dou@test.com",
        phone: "111-111-111",
        type: "personal"
      },
      {
        id: 2,
        name: "Melissa Harris",
        email: "mel_har@test.com",
        phone: "222-222-222",
        type: "personal"
      },
      {
        id: 1,
        name: "Harry White",
        email: "harry@test.com",
        phone: "333-333-333",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReduser, initialState);

  // Add contact

  // Delete contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Fileter Contacts

  // Clear Filter

  return (
    <ContactContex.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContex.Provider>
  );
};

export default ContactState;
