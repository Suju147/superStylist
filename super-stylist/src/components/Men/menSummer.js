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
   
    setTone(e.target.value);
    
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
    <div style={{position:'relative'}} >
      
      <MainPage />      
      <div className="filter_bar" >
        <div className="sidebar" >
          <div>
            <h2 style={{color:"crimson"}}>Filters</h2>
          <h3>Skin Tone</h3>

          <input type="radio" id="fair" name="skin_tone" value="fair" onChange={e=>{settonehandler(e)}}></input>
          <label for="fair">
             Fair-Medium
          </label>
          <br/>
         {/* dekhna padega yaad ni mje..koi na checked attribute hota h?.........dkh lenge bd m abi auth banao....okkkjiiiiii..so jaao...aur tm kya karogi..auth..add to kiye ni.dekha lia kse banana h..hn try krti hu ...kro subha bata dena thik...hn thik h */}
          <input type="radio" id="dark" name="skin_tone" value="brown" onChange={e=>{settonehandler(e)}}></input>
          <label for="dark">
             Medium-dark
          </label></div>
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
          <button className="btn" onClick={()=>{setData([]);}}>Clear All</button>
          <button className="btn" onClick={()=>filter()}>Apply</button>

        </div>
      </div>
      <div className="summers" style={{paddingTop:"100px"}}>
        {prod.map((el,idx) => (
          <div key={idx}>
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
  );
};

export default SummerMen;
