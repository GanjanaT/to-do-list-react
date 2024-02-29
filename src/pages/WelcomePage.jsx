import React from "react";
import "../pages/welcome-page.css";

function WelcomePage() {
  return (
    <>
    <h1>Do it.</h1>
      <section className="container name-container">
        <h2>Start your journey here</h2>
        <form className="name-form">
          <label htmlFor="name">
            <input type="text" name="name" id="name" placeholder="Enter your name" />
          </label>
          <button className="style-btn" type="submit">
            Create list
          </button>
        </form>
      </section>
    </>
  );
}

export default WelcomePage;
