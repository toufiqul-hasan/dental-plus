import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../../firebase.init";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, Eerror] =
    useSendPasswordResetEmail(auth);
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="login-container mt-3 mb-5">
        <div className="login-title">Reset Password</div>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <br />
          <button
            onClick={async () => {
              await sendPasswordResetEmail(email);
              toast("Email sent. Please check your inbox!");
            }}
          >
            Submit
          </button>
          <ToastContainer />
          <br />
          <Nav.Link as={Link} to="/login">
            Password reseted? Then Login!
          </Nav.Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
