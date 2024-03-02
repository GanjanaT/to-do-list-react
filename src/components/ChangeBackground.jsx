import React, { useEffect, useState } from "react";
import bgIcon from "../assets/bg-icon.svg";
import bgImgGreen from "../assets/bg-green.jpg";
import bgImgColors from "../assets/bg-colors.jpg";
import bgImgFlowers from "../assets/bg.jpg";


function ChangeBackground() {
  const [toggleBackgrounds, setToggleBackgrounds] = useState(false);
  const [backgroundBtns, setBackgroundBtns] = useState(data)
  const [background, setBackground] = useState("");

  useEffect(()=> {
    document.body.style.backgroundImage = background;
  }, [background])

  function changeBackground(image){
    setBackground(prev => prev = image)
    console.log(background) 
  }
  
  return (
    <>
      <div className="bg-container">
        <button className="bg-icon-btn" onClick={() => setToggleBackgrounds(!toggleBackgrounds)}>
          <img src={bgIcon} alt="background icon" />Background
        </button>
        {toggleBackgrounds && (
        <div className="bg-btns-container">
          {backgroundBtns.map(btn => 
            <div key={btn.id}>
            <button onClick={() => changeBackground(btn.image)} className="bg-btn" type="button" style={{backgroundImage: btn.image}}>{btn.name}</button>
            </div>  
          )}
        </div>)}
      </div>
    </>
  );
}

export default ChangeBackground;

const data = [
  {
    id: 1,
    name: "Green",
    image: `url(${bgImgGreen})`
  },
  {
    id: 2,
    name: "Colors",
    image: `url(${bgImgColors})`
  },
  {
    id: 3,
    name: "Flowers",
    image: `url(${bgImgFlowers})`
  }
]