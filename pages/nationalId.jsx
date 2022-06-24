import { useRouter } from "next/router";
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
  /* const router = useRouter(); */

  const [dataInput, setDataInput] = useState("");

  const idSearch = () => {
    const found = IDs.find((id) => id.idNum === dataInput);
    if (dataInput === "" || dataInput === null) return;

    const showResults = () => {
      if (found) {
        setDataInput("");
        return found;
      } else {
        console.log("soorry");
      }

      return <Success results={found} />;
    };

    return {
      showResults: showResults,
    };
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

      {idSearch}
    </div>
  );
};
