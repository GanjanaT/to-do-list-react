import React, { useState } from "react";
import "../pages/welcome-page.css";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const [userName, setUserName] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  function handleChange(e){
    setUserName(prev => prev = (e.target.value))
    setFormError("")
  }

  function validateForm(){
    let error = "";
    if (userName === ""){
     error = "Please enter name"
    }
    return error;
  }

  function handleSubmit(e){
    e.preventDefault();

    let error = validateForm();
    setFormError(error);
    if (error === ""){
      navigate("/todo", {state: {userName}})
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
              id="name"
              value={userName}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
          <button type="submit" className="style-btn" >
            Create list
          </button>
        </form>
      </section>
    </>
  );
}

export default WelcomePage;
