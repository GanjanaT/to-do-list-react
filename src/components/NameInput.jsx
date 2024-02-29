import React from "react";

function NameInput() {
  return (
    <>
      <section className="container name-container">
        <h2>Start your journey here</h2>
        <form className="name-form">
          <label>
            <input type="text" name="name" placeholder="Enter your name" />
          </label>
          <button className="btn-styling" type="button">
            Create list
          </button>
        </form>
      </section>
    </>
  );
}

export default NameInput;
