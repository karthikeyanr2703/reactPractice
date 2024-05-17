import React, { useState } from "react";
import "./RandomColor.css";

const RandomColor = () => {
    let [color,setColor] = useState("")
    let [mode,setMode] = useState('rgb')

    const hexColor = () => {

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        setColor(`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`);
        


    }
    const rgbColor = () => {

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
      
        setColor(`rgb(${r},${g},${b})`);
    }

  return (
    <div className="mainColorDiv" style={{ backgroundColor: color}}>
      <button onClick={() => setMode("hex")}>Hex Color</button>
      <button onClick={() => setMode("rgb")}>RGB Color</button>
      <button onClick={mode === 'hex' ? hexColor : rgbColor}>Generate</button>
      {color}
    </div>
  );
};

export default RandomColor;
