const Success = ({results}) => {



  return (
    <div>
      <h1>Great news!!! we found your ID card</h1>

      {
        results.map(result => {
          return (
            <h1> {result.idNum }</h1>
          )
          
        })
      }
       
        
    </div>
  );
};

export default Success;
