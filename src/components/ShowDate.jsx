import React, { useState } from "react";

function ShowDate() {
    const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <>
      <div className="date">{currentDate}</div>
    </>
  );
}

export default ShowDate;

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
}