import React, { useState } from "react";
import Photo from '../Components/Assets/photo.png';
import Vector from '../Components/Assets/Vector.png';

const Landing =({rupeesInput, setRupeesInput, country})=>
{
    const[outputCurrency, setOutputCurrency] = useState();

   const handleDrop=(number)=>
   {
      setOutputCurrency(rupeesInput*number)
      console.log(rupeesInput*number, outputCurrency)
   }

    return(<div className="home">
        <div className="home-box">
            <div className="box-head">Convert to any currency from Indian Rupee</div>
            <div className="input-boxes">
                <div className="input-rs">
                    <input type="text" className="input-rupees" onChange={(event)=>setRupeesInput(event.target.value)}/>
                    <div className="rupees">RS</div>
                </div>
                <div className="vector"><img src={Vector} alt="vector" /></div>
                <div className="converted-output">
                    <div className="output-currency">{outputCurrency}</div>
                    <div className="drop-down">
                        <select name="country" id="country"  className="drop-down" onChange={(e)=>{handleDrop(e.target.value)}} >
                           {country.map((item)=>
                           {
                            return(<option value={item.num} >{item.title}</option>)
                           })}
                        </select>
                    </div>
                </div>
            </div>
            <div><img src={Photo} alt="photo" /></div>
        </div>
    </div>)
}

export default Landing;