import React, { useState } from "react";
import "../pages/welcome-page.css";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";

function WelcomePage() {
  const [userName, setUserName] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const MAX_LENGHT_NAME = 30;

  function handleChange(e) {
    const userInput = e.target.value;
    setUserName((prev) => (prev = userInput));
    setFormError("");
  }

  function validateForm() {
    const MAX_LENGHT_NAME = 30;
    let error = "";

    if (userName === ""){
      error = "Please enter name"
    }
    if (userName.length > MAX_LENGHT_NAME){
      error = "Maximum of 30 characters"
    }
    return error;
  }

  function handleSubmit(e) {
    e.preventDefault();

    let error = validateForm();
    setFormError(error);
    if (error === "") {
      navigate("/todo", { state: { userName } });
    }
  }
  return (
    <>
      <h1>Do it.</h1>
      <section className="container name-container">
        <h2>Start your journey here</h2>
        <form onSubmit={handleSubmit} className="name-form">
          {formError && <p className="error">{formError}</p>}
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              value={userName}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
          <SubmitButton btnText={"Create list"}/>
        </form>
      </section>
    </>
  );
}

export default WelcomePage;
