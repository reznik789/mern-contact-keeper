import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import contactContext from "../../context/contact/contactContext";

const Navbar = ({ title, icon }) => {
  const { user, logout, isAuthentificated } = useContext(AuthContext);
  const { clearContacts } = useContext(contactContext);

  const onLogout = () => {
    clearContacts();
    logout();
  };

  const authLinks = [
    <li>Hello {user && user.name}</li>,
    <li>
      <a href="#!" onClick={onLogout}>
        <i className="fa fa-sign-out" aria-hidden="true"></i>
        <span className="hide-sm">Logout</span>
      </a>
    </li>
  ];

  const guestLinks = [
    <li>
      <Link to="/login">Login</Link>
    </li>,
    <li>
      <Link to="/register">Register</Link>
    </li>
  ];

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}> {title}</i>
      </h1>
      <ul>{!!isAuthentificated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fa fa-id-card-o"
};

export default Navbar;
