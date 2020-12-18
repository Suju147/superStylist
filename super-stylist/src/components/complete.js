import React, { useState } from "react";
import Home from './Home';
import './complete.css';

function Complete() {
    const[home,setHome]=useState(false);

    const next=()=>{
        setHome(true);
    }
    
    return (
        <>
      {home?<Home/>:
        <div className="complete">
            <p>Thanks for your Response. We will show you our best Results!</p>
            <button className="home" onClick={next}><b>Back to Home</b></button>
        </div>
      }
        </>
    )


}
export default Complete;