import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-3">
      <div className="login-container mb-5">
        <div className="login-title">Checkout</div>
        <form className="login-form" onSubmit={handleLogin}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Address" />
          <input type="number" placeholder="Your Phone Number" />
          <button
            onClick={() => {
              toast("Thank you for the booking!");
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

export default Checkout;