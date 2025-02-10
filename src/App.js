import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react';

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFname = (e) => {
    setFname(e.target.value)
  }

  const handleLname = (e) => {
    setLname(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setFullName(`${fname} ${lname}`);
  }


  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={(e) => handleClick(e)}> 
  <label for="fname">First name: </label>
  <input type="text" id="fname" name="fname" required={true} value={fname} onChange={(e) => handleFname(e)}/><br/>
  <label for="lname">Last name: </label>
  <input type="text" id="lname" name="lname" required={true} value={lname} onChange={(e) => handleLname(e)}/><br/>
  <button type="submit">Submit</button>
</form> 
{fullName ? <p>Full Name: {fullName}</p> : () => {return;}} 
    </div>
  );
}

export default App;
