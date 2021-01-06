import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import MainPage from "../Main/mainpage";
import Axios from 'axios'; 
import axios from "axios";
import '../women/summer.css';

const SummerMen = () => {
  const [tone,setTone] = useState("")
  const [body,setBody] = useState("")
  const [prod,setData] = useState([])
  const [loading,setLoading] = useState(true)

  const settonehandler = (e) => {
    // e.preventdefault()
    setTone(e.target.value);
    // var nw = prod.filter(p => p.skin_tone === tone)
    // setData(nw)
    // console.log(tone)
  }

  const setbodyhandler = (e) => {
    setBody(e.target.value)
  }

  const filter = () =>{
    var nw = prod.filter(pr => pr.skin_tone === tone && pr.body_type===body)
    console.log(nw)
    setData(nw)
    console.log("filter")
  }

  useEffect(async () =>  {
    if(prod.length === 0){
    const res =  await axios.get('/products/men_summer')
    setData(res.data)
  }
  console.log("useeffect")
  
  }, [prod]); 
  return (
    <div >
      
      <MainPage />      
      <div className="filter_bar" style={{display:'flex'}}>
        <div className="sidebar" style={{width:"23vw"}}>
          <div>
            <h2 style={{color:"crimson"}}>Filters</h2>
          <h3>Skin Tone</h3>

          <input type="radio" id="fair" name="skin_tone" value="fair" onChange={e=>{settonehandler(e)}}></input>
          <label for="fair">
             Fair-Medium
          </label>
          <br/>
         
          <input type="radio" id="dark" name="skin_tone" value="brown" onChange={e=>{settonehandler(e)}}></input>
          <label for="dark">
             Medium-dark
          </label></div>
          <hr style={{borderColor:"black"}}></hr>
          <div>
          <h3>Body Type</h3>
        
          <input type="radio" id="slim" name="body_type" value="slim" onChange={e=>{setbodyhandler(e)}}></input>
          <label for="slim">
             Slim-Fit
          </label>
          <br/>
          
          <input type="radio" id="fat" name="body_type" value="fat" onChange={e=>{setbodyhandler(e)}}></input>
          <label for="fat">
             Fit-Heavy
          </label>
          </div>
          <hr style={{borderColor:"black"}}></hr>
          <button className="clear" onClick={()=>{setData([]);}}>Clear All</button>
          <button className="Apply" onClick={()=>filter()}>Apply</button>

        </div>
      <div className="summers" style={{width:"77vw"}}>
        {prod.map((el,idx) => (
          <div style={{height:"450px",width:"400px",marginBottom:"20px"}} key={idx}>
            <Link to="#">
              <div className="heart">
                <i className="fas fa-heart" style={{color:"white"}}></i>
              </div>
            </Link>
            <img src={el.src} alt="f" ></img>
            <Link
              to=
                 {`/product/${el._id}`}
            >
              <h4>Explore</h4>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default SummerMen;
