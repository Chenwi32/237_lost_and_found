import { useRouter } from "next/router";
import React, { useState } from "react";
import Controls from "../components/controls";

let IDs = [
  {
    idNum: "114957588",
    location: "Simbock",
  },
  {
    idNum: "651395832",
    location: "Damas",
  },
];

export default () => {
  const router = useRouter();

  const [dataInput, setDataInput] = useState("");

  const idSearch = () => {
    let found = IDs.find((id) => id.idNum === dataInput);
    if (dataInput === "" || dataInput === null) return;
    else if (found) {
      router.push("/success");
      setDataInput("");
    } else {
      router.push("/docNotFound");
      setDataInput("");
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
    </div>
  );
};
