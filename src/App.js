import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [firstname, setFirstname] =  useState('');
  const [lastname, setLastname] =  useState('');
  const [email, setEmail] = useState('');

  async function handleZipcode(){
  const  resultData = await axios.get(`http://localhost:8000/api/zipcodes/${zipcode}/`)
  setCity(resultData.data.city);
  setState(resultData.data.state);
  }
  useEffect(()=>{
    if(zipcode.length === 6)
    {
      handleZipcode()
    }
  },[zipcode])
  
  function updateZipcode(e) {
    setZipcode(e.target.value);
  }

  return (
    <div className="App">
      <div className='box1'></div>

      <div className='registration'>
        <p className='header'>Registration Form</p>

        <form>
          <label>
            <input type="text" value={firstname} onChange={(e)=>{setFirstname(e.target.value) }} placeholder='First Name' name="firstname" />
          </label>
          <br />
          <label>

            <input type="text" value={lastname}  onChange={(e)=>{setLastname(e.target.value) }}   placeholder='Last Name' name="lastname" />
          </label>
          <br />
          <label>

            <input type="text" value={email}  onChange={(e)=>{setEmail(e.target.value) }}    placeholder='Email' name="email" />
          </label>

          <br />
          <label>
            <input type="text" value={zipcode} onChange={(e) => {updateZipcode(e)}} placeholder="Zipcode" />

          </label>

          <br />
          <label>
            <input type="text" value={city} placeholder="City" disabled />
          </label>
          <br />
          <label>

            <input type="text" value={state} placeholder="State" disabled />
          </label>
          <br />
          {
            ((lastname!=='' && firstname!=='' && zipcode!=='' && email!=='') ?
            <button className='button'>Sumbit</button>:
            <span>*Enter all the fields*</span>
            )
          }
        </form>
      </div>
      <div className='box2'></div>
    </div>
  );
};

export default App;
