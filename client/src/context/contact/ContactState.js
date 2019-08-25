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
        id: 3,
        name: "Harry White",
        email: "harry@test.com",
        phone: "333-333-333",
        type: "professional"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReduser, initialState);

  // Add contact
  const addContact = contact => {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        id: uuid.v4(),
        ...contact
      }
    })
  }

  //Update contact
  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    })
  }

  // Delete contact
  const deleteContact = (contactId) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: contactId
    })
  }

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    })
  }

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    })
  }

  // Update Contact

  // Fileter Contacts

  // Clear Filter

  return (
    <ContactContex.Provider
      value={{
        contacts: state.contacts,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        current: state.current
      }}
    >
      {props.children}
    </ContactContex.Provider>
  );
};

export default ContactState;
