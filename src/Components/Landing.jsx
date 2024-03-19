import React from "react";
import Photo from '../Components/Assets/photo.png';
import Vector from '../Components/Assets/Vector.png';

const Landing =()=>
{
    return(<div className="home">
        <div className="home-box">
            <div className="box-head">Convert to any currency from Indian Rupee</div>
            <div className="input-boxes">
                <div className="input-rs">
                    <input type="text" className="input-rupees"/>
                    <div className="rupees">RS</div>
                </div>
                <div className="vector"><img src={Vector} alt="vector" /></div>
                <div className="converted-output">
                    <div className="output-currency">output</div>
                    <div className="drop-down"></div>
                </div>
            </div>
            <div><img src={Photo} alt="photo" /></div>
        </div>
    </div>)
}

export default Landing;