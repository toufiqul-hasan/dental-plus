import React from "react";

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
        <input type="text" placeholder="Your Email" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Newsletter;