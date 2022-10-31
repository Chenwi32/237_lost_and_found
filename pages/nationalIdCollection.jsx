import { addDoc, doc, getFirestore, setDoc } from "firebase/firestore";
import { useState } from "react";
import Announcement from "../components/Announcement";
import Controls from "../components/controls";
import { db } from "../firebase";

const NationalIdCollection = () => {
  const [idnum, setIdnum] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const sendData = async () => {
    const timestamp = Date.now().toString();

    const addedFIds = doc(db, `idcards/${timestamp}`);

    const foundId = {
      idnum,
      name,
      contact,
    };

    if (idnum !== '' && contact !== '') {
      try {
      await setDoc(addedFIds, foundId);
    } catch (error) {
      console.log(error);
    }
    } else {
      alert('Some field are still empty. Please make sure you fill in all the information required. Thank you.')
    }

    

    setIdnum("");
    setName("");
    setContact("");
  };

  return (
    <div className=" container">
      <Announcement message="Everyone can now add data of id cards that they find here till December 31 2022, after that, only people who own an account on the platform will be able to add data to the platform." />
      <div className=" ">
        <p>Type the ID card number here:</p>
        <input
          value={idnum}
          onChange={(e) => {
            setIdnum(e.target.value);
          }}
          type="text"
          placeholder="ID card Number"
          className={`main_input `}
        />
        <p>Type the name on the ID card here:</p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Holder's Name"
          className={`main_input`}
        />
        <p>Type the contact information for the ID collection here:</p>
        <input
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
          type="text"
          placeholder="Your Phone Number"
          className={`main_input`}
        />
      </div>
      <Controls dataHandler={sendData} buttonText="Send" />
    </div>
  );
};

export default NationalIdCollection;
