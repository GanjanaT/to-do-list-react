import React, { useState } from "react";
import NameInput from "../components/NameInput";

function WelcomePage() {
  return (
    <>
      <main className="container">
        <h1>To do list</h1>
        <NameInput></NameInput>
      </main>
    </>
  );
}

export default WelcomePage;
