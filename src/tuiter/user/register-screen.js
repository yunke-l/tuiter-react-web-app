import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";

function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please confirm your password.");
        return;
      }

      await dispatch(registerThunk({ username, confirmPassword, firstName, lastName }));
      navigate("/tuiter/login");
    } catch (e) {
      alert(e);
    }
  };

  return (
      <div>
        <h1>Register Screen</h1>
        <div className="mt-2">
          <label>Username</label>
          <input
              className="form-control"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mt-2">
          <label>First Name</label>
          <input className="form-control" type="text" value={firstName}
                 onChange={(event) => setFirstName(event.target.value)}/>
        </div>
        <div className="mt-2">
          <label>Last Name</label>
          <input className="form-control" type="text" value={lastName}
                 onChange={(event) => setLastName(event.target.value)}/>
        </div>
        <div className="mt-2">
          <label>Password</label>
          <input
              className="form-control"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mt-2">
          <label>Confirm Password</label>
          <input
              className="form-control"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-2" onClick={handleRegister}>
          Register
        </button>
      </div>
  );
}

export default RegisterScreen;
