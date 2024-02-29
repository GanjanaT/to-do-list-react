import React from "react";
import themeImg from "../assets/theme-icon.svg";

function ChangeTheme() {
  return (
    <>
      <div className="theme-container">
        <button className="theme-icon-btn">
          <img src={themeImg} alt="theme icon" />Themes
        </button>
        <div className="theme-btns-container">
          <div>
            <button className="theme-btn" type="button">1</button>
          </div>
          <div>
            <button className="theme-btn" type="button">2</button>
          </div>
          <div>
            <button className="theme-btn" type="button">3</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangeTheme;
