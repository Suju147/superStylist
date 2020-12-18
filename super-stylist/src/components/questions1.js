import React, { useState } from "react";
import Question2 from './question2';
import './questions1.css'

function Questions() {
    const[ques2,setQues2]=useState(false);

    const next=()=>{
        setQues2(true);
        
    }
    return (
        <>
      {ques2?<Question2/>:
        <div className="ques1">
            <p><b>Welcome to the Super Stylist profile Questionaire!</b></p>
            <div class="gender"><p>Please Select your Gender from the following</p>
            <div ><button className="male" onClick={next}>Male</button>
            <button className="female" onClick={next}>Female</button></div></div>
        </div>
        
      }
        </>
    )


}
export default Questions;