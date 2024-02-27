import React from "react";

function ToDoInput() {
  return (
    <>
      <section>
        <form>
          <label htmlFor="">
            <input type="text" placeholder="Lägg till nått" />
          </label>
          <button>Lägg till</button>
        </form>
      </section>
    </>
  );
}

export default ToDoInput;
