import Success from "../components/success";

import React, { useState } from "react";
import Controls from "../components/controls";

let IDs = [
  {
    id: 1,
    idNum: '114957588',
    location: "Simbock",
    contact: "651395832",
  },
  {
    id: 2,
    idNum: "651395832",
    location: "Damas",
    contact: "651395832",
  },
  {
    id: 3,
    idNum: "101840409",
    location: "Yaounde Mendong-Centre",
    contact: "674051999",
  },
];



const NationalId = () => {
  const [dataInput, setDataInput] = useState("");
  let [found, setfound] = useState([]);
const [message, setmessage] = useState('Your results will be displayed here')


  const idSearch = () => {
    const successfulsearch = IDs.find((id) => id.idNum === dataInput);

    if (dataInput === "" || dataInput === null) return;

    if (successfulsearch) {
      setfound([successfulsearch]);
      setDataInput('')
    } else {
      setmessage("Sorry We don't have your Id card");
      setDataInput('')
    }
  };

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

      <div className="results_display">
        {found.length === 0 ? 
        <h2>{message }</h2>
      : found.length !== 0 ? <Success results={found} />: <h3>There was a mixup somewhere</h3>}
      </div>

      
    </div>
  );
};



export default NationalId