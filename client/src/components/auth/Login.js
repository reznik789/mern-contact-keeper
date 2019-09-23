import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { error, loginUser, clearErrors, isAuthentificated } = authContext;

  useEffect(() => {
    if (isAuthentificated) props.history.push("/");
  }, [isAuthentificated]);

  useEffect(() => {
    if (error === "Invalid credentials") {
      alertContext.setAlert(error, "danger");
      clearErrors();
    }
  }, [error]);

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alertContext.setAlert("Please fill out all fields");
    } else {
      loginUser({
        email,
        password
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
