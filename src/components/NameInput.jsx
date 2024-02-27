import React from "react";

function NameInput() {
  return (
    <>
      <section>
        <form>
          <label>
            <input type="text" placeholder="Enter your name"/>
          </label>
          <button>Create list</button>
        </form>
      </section>
    </>
  );
}

export default NameInput;
