import DocNotFound from "./docNotFound";
import Success from "./success";

import React, { useState } from "react";
import Controls from "../components/controls";

let IDs = [
  {
    idNum: "114957588",
    location: "Simbock",
    contact: "651395832",
  },
  {
    idNum: "651395832",
    location: "Damas",
    contact: "651395832",
  },
];

export default () => {

  const [dataInput, setDataInput] = useState("");

  const [found, setFound] = useState({ idNum: 'Id num is empty'})  ;

  const idSearch = () => {

    if (dataInput === "" || dataInput === null) return;
  setFound(found = IDs.find((id) => id.idNum === dataInput))

    if (found) {
      
    console.log(found)
    }
    
  };

console.log(found);

  return (
    <div className="flex_col" id="results">
      <h1 className="title">Type your ID card number.</h1>
      <input
        type="text"
        className="main_input"
        value={dataInput}
        onChange={(e) => {
          setDataInput(e.target.value);
        }}
        placeholder="ID card number"
      />

      <Controls dataSearch={idSearch} />
      {
        found === true ? <h1>{found.idNum }</h1> : <DocNotFound />
      }
      
    </div>
  );
};
