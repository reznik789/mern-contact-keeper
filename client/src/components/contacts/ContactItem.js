import React from "react";
import PropTypes from 'prop-types'


const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  const badgeClassName =
    "badge " + (type === "professional" ? "badge-success" : "badge-primary");
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{
            float: "right"
          }}
          className={badgeClassName}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fa fa-envelope-open" aria-hidden="true" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fa fa-phone" aria-hidden="true" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default ContactItem;
