import Announcement from "../components/Announcement";
import Controls from "../components/controls";


const NationalIdCollection = () => {
    return (
      <div className="secondary-container">
        <Announcement message="Please note that this feature is not functionl yet" />
        <div className=" ">
          <p>Type the ID card number here:</p>
          <input type="text" className={`main_input `} />
          <p>Type the contact information for the ID collection here:</p>
          <input type="text" className={`main_input`} />
          <p>Upload the image of the ID card here:</p>
          <input type="file" className={``} />
        </div>
        <Controls />
      </div>
    );
}

export default NationalIdCollection;