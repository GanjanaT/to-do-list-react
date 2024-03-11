import React, { useState } from "react";

function ShowCurrentDate() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const dateFormat = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }; 
  return (
    <>
      <div className="date">{currentDate.toLocaleDateString('en-EN', dateFormat).toUpperCase()}</div>
    </>
  );
}

export default ShowCurrentDate;