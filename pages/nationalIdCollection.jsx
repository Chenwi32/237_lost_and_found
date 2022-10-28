import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Announcement from "../components/Announcement";
import Controls from "../components/controls";
import { db } from "../firebase";

const NationalIdCollection = () => {
  const [idnum, setIdnum] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const sendData = async () => {
    await setDoc(doc(db, "foundDocs", "idcards"), {
      idnum,
      name,
      contact,
    });
  };

  return (
    <div className="secondary-container">
      <Announcement message="Please note that this feature is not functionl yet" />
      <div className=" ">
        <p>Type the ID card number here:</p>
        <input
          value={idnum}
          onChange={(e) => {
            setIdnum(e.target.value);
          }}
          type="text"
          className={`main_input `}
        />
        <p>Type the name on the ID card here:</p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          className={`main_input`}
        />
        <p>Type the contact information for the ID collection here:</p>
        <input
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
          type="text"
          className={`main_input`}
        />
      </div>
      <Controls dataHandler={sendData} buttonText="Send" />
    </div>
  );
};

export default NationalIdCollection;
