import React, { useState } from "react";

function App() {
  const [nm, setnm] = useState("");
  const [fullnm, setfullnm] = useState();

  const [eml, setEml]=useState("");
  const [email, setEmail]=useState();

  const InputData = (event) => {
    console.log(event.target.value);
    setnm(event.target.value);
    
  };

  const onSubmits = (e) => {
    e.preventDefault();
    setfullnm(nm);
    setEmail(eml);
   
  };

  const InputEml=(event)=>{
    console.log(event.target.value);

   setEml(event.target.value)
    
  }

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>hello! {fullnm} </h1>
            <p>Email: {email}</p> 
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={InputData}
              value={nm}
            />
            
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={InputEml}
              value={eml}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
