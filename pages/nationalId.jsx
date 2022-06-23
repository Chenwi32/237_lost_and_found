import React, { useState } from "react";
import Controls from "../components/controls";

export default () => {

const [dataInput, setDataInput] = useState('')

    return (
      <div className="flex_col">
            <h1 className="title">Type your ID card number.</h1>
            <input type="text" className="main_input" placeholder="ID card number" />
            
            <Controls dataInput={dataInput} setDataInput={ setDataInput}/>
      </div>
    );
}