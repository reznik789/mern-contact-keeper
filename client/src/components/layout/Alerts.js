import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alerts = props => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(({ id, msg, type }) => (
      <div key={id} className={`alert alert-${type}`}>
        <i className="fa fa-info-circle" aria-hidden="true" /> {msg}
      </div>
    ))
  );
};

export default Alerts;
