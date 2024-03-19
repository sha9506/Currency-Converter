import React, { useState } from 'react';
import './App.css';
import Landing from './Components/Landing';

const App =()=>
{
  const[rupeesInput, setRupeesInput]=useState();4
  const[country, setCountry]=useState(
    [
      {
        title: "America",
        num : 70
      },
      {
        title: "Japan",
        num : 50
      },
      {
        title: "Uae",
        num : 90
      }
    ]
  )

  return(<div>
      <div className='app-name'>Currency Converter</div>
      <Landing setRupeesInput={setRupeesInput} country={country} rupeesInput={rupeesInput}/>
  </div>)
}
export default App;
