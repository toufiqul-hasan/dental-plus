import React, { useEffect, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
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
      <div className="login-container mt-3">
        <div className="login-title">Reset Password</div>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
          <button
            onClick={async () => {
              await sendPasswordResetEmail(email);
              toast("Email Sent");
            }}
          >
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;