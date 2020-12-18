import React, { useState } from "react";
import Question3 from './question3';
import './question2.css'

function Questions2() {

    const[ques3,setQues3]=useState(false);

    const next=()=>{
        setQues3(true);
    }

    return (
        <>
      {ques3?
      <Question3/>:
        <div className="ques2">
            
            <div class="tone"><p>Please Select your Skin Tone from the following</p>
            <div ><button className="fair" onClick={next}>medium</button>
            <button className="medium" onClick={next}>medium</button>
            <button className="dark" onClick={next}>medium</button></div></div>
        </div>
      }
        </>
    )


}
export default Questions2;