import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Newsletter = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-container mb-5">
      <div className="login-title">Subscribe to my newsletter</div>
      <p className="text-center">Get 10% off your first check up!</p>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <button
          onClick={() => {
            toast(
              "Thank you for subscribing to my newsletter. 10% off coupon code sent to your email. Please check your inbox!"
            );
          }}
        >
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Newsletter;
