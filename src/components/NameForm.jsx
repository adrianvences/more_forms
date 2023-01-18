import React from "react";

// we have to import state to use it
import { useState } from "react";

const NameForm = () => {
  // these are used to check state
  const [firstName, setFirstName] = useState("");
  const [firstNameErrors, setFirstNameErrors] = useState(null);
  const [lastName, setLastName] = useState("");
  const [lastNameErrors, setLastNameErrors] = useState(null);
  const [email, setEmail] = useState("");
  const [emailErrors, setEmailErrors] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState(null);
  const [password2, setPassword2] = useState("");
  const [password2Errors, setPassword2Errors] = useState(null);
  const [people, setPeople] = useState([]);

  // this sumbits forms and prevents the default sumbit button features
  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      password2: password2,
    };
    setPeople([...people, person]);
  };

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameErrors("Name must be at least 2 characters.");
    } else {
      setFirstNameErrors(null);
    }
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameErrors("Name must be at least 2 characters.");
    } else {
      setLastNameErrors(null);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setEmailErrors("Email must be at least 5 characters.");
    } else {
      setEmailErrors(null);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordErrors("Password must be at least 8 characters.");
    } else {
      setPasswordErrors(null);
    }
  };

  const password2Handler = (e) => {
    setPassword2(e.target.value);
    if (e.target.value.length < 8) {
      setPassword2Errors("Password must be at least 8 characters.");
    } else {
      if (e.target.value !== password) {
        setPassword2Errors("Password must match.");
      } else {
        setPassword2Errors(null);
      }
    }
  };

  return (
    <div className="card">
      <h5 className="card-header"> CREATE ACCOUNT</h5>
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control bg-light"
              value={firstName}
              onChange={firstNameHandler}
            />
            {firstNameErrors && (
              <span className="form-text text-dark">{firstNameErrors}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control bg-light"
              value={lastName}
              onChange={lastNameHandler}
            />
            {lastNameErrors && (
              <span className="form-text text-dark">{lastNameErrors}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              className="form-control bg-light"
              value={email}
              onChange={emailHandler}
            />
            {emailErrors && (
              <span className="form-text text-dark">{emailErrors}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="Password"
              id="Password"
              className="form-control bg-light"
              value={password}
              onChange={passwordHandler}
            />
            {passwordErrors && (
              <span className="form-text text-dark">{passwordErrors}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="Password2" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="Password"
              id="Password2"
              className="form-control bg-light"
              value={password2}
              onChange={password2Handler}
            />
            {password2Errors && (
              <span className="form-text text-dark">{password2Errors}</span>
            )}
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>
        </form>
      </div>
      <div className="mb-3">
        <div className="card">
          <h5 className="card-header">Your Form Data</h5>
        </div>
        <div className="card-body">
          {/* this part renders input value in real time because of state and onChange */}
          <p>first name: {firstName}</p>
          <p>last name : {lastName}</p>
          <p>Email : {email}</p>
          <p>password : {password}</p>
          <p>Confirm password : {password2}</p>
        </div>
      </div>
    </div>
  );
};

export default NameForm;
