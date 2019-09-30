import React, { useReducer } from "react";
import axios from "axios";
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
    CLEAR_FILTER,
    CONTACT_ERROR,
    GET_CONTACTS,
    CLEAR_CONTACTS
} from "../types";

const ContactState = props => {
    const initialState = {
        contacts: null,
        current: null,
        filtered: null,
        loading: null,
        error: null
    };

    const [state, dispatch] = useReducer(contactReduser, initialState);

    const getContacts = async () => {
        const res = await axios.get("/api/contacts");
        try {
            dispatch({
                type: GET_CONTACTS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            });
        }
    };

    // Add contact
    const addContact = async contact => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const res = await axios.post("/api/contacts", contact, config);
            dispatch({
                type: ADD_CONTACT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            });
        }
    };

    //Update contact
    const updateContact = async contact => {
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        };
        try {
            const res = await axios.put(
                `/api/contacts/${contact._id}`,
                contact,
                config
            );
            dispatch({
                type: UPDATE_CONTACT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            });
        }
    };

    // Delete contact
    const deleteContact = async contactId => {
        await axios.delete(`/api/contacts/${contactId}`);
        try {
            dispatch({
                type: DELETE_CONTACT,
                payload: contactId
            });
        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            });
        }
    };

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({
            type: SET_CURRENT,
            payload: contact
        });
    };

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT
        });
    };

    // Fileter Contacts
    const filterContacts = text => {
        dispatch({
            type: FILTER_CONTACTS,
            payload: text
        });
    };
    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    const clearContacts = () => {
        dispatch({ type: CLEAR_CONTACTS });
    };

    return (
        <ContactContex.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                getContacts,
                addContact,
                updateContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                filterContacts,
                clearFilter,
                clearContacts
            }}
        >
            {props.children}
        </ContactContex.Provider>
    );
};

export default ContactState;
