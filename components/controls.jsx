import Link from "next/link";

const Controls = ({ dataHandler, buttonText}) => {
  
  return (
    <div className={` flex`}>
      <Link href="/">
        <button className={` btn2 flex`}>
          <span >&#8592;</span> <span>Back to home</span>
        </button>
      </Link>

      <button className={` btn `}
        onClick={dataHandler}>
        {buttonText}
      </button>
    </div>
  );
};

export default Controls;
