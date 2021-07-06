import React, { useState } from 'react';


function App() {


  const [fnumber, setFnumber] = useState();
  const [snumber, setSnumber] = useState();
  const [result, setResult] = useState();


  const somar = () => {

    let resultAdd = parseInt(fnumber) + parseInt(snumber);

    setResult(resultAdd);
  }


  return (
    <div>
      FNumber:  <input type="number" value={fnumber} onChange={(e) => setFnumber(e.target.value)} />
      <br />

     SNumber: <input type="number" value={snumber} onChange={(e) => setSnumber(e.target.value)} />
      <br />

     Result:  <input type="number" value={result} readOnly />

      <br />

      <button onClick={somar}>ADD</button>


    </div>
  );
}

export default App;
