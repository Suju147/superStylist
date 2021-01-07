import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainPage from "../Main/mainpage";
import SingleProd from "./SingleProd";
import "./summer.css";
import { useHistory } from "react-router-dom";

const SummerWomen = () => {
  const history = useHistory();
  const onClickHandler = (url) => {
    history.push("/summer/" + url, { url: url });
  };
  const data = [
    "https://4.imimg.com/data4/YN/IE/MY-26887096/ladies-summer-wear-250x250.jpg",
    "https://www.beyoung.in/blog/wp-content/uploads/2020/05/jump-2-min-853x1024.jpg",
    "https://cf.shopee.ph/file/1be77763b0331b55f3fb3525774ae7fe",
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1590889948-SOSR-WS19_V4.jpg?crop=1xw:1xh;center,top&resize=480:*",
    "https://i.pinimg.com/originals/2a/a3/03/2aa30302071ace4441aa21ef29f7314e.jpg",
    "https://images.bewakoof.com/utter/content/4051/content_Off-Shoulder-Tops.jpg",
    "https://i.pinimg.com/originals/38/27/ac/3827ac04133e9aeea9868cce823069f8.jpg",
    "https://i.pinimg.com/originals/a1/91/94/a19194307c41738d91f1a430fc6a0b47.jpg",
    "https://cdn.shopify.com/s/files/1/0028/2669/8812/collections/summer-wear-889417_600x600_crop_center.jpg?v=1563458660",
    "https://cdn.cliqueinc.com/posts/199013/how-wear-leggings-summer-199013-1589328619514-main.700x0c.jpg",
    "https://www.styleskier.com/wp-content/uploads/2017/08/summer-wear-how-to-wear-printed-shorts-this-summer-outfit-inspiration-stylishlyme-com-gmcmpud-.jpg",
    "https://stylishlyme.com/wp-content/uploads/2015/03/what-to-wear-to-the-beach-hat-and-printed-dress.jpg",
    "https://images.bewakoof.com/utter/content/4050/content_Crop-Top.jpg",
  ];
  return (
    <div>
      <MainPage />
      <div className="filter_bar" >
        {/* <div className="sidebar" >
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

        </div> */}
      </div>
      <div className="summers">
        {data.map((el, idx) => (
          <div key={idx}>
            <Link to="#">
              <div className="heart">
                <i className="fas fa-heart" style={{color:"white"}}></i>
              </div>
            </Link>
            <img src={data[idx]} alt="f"></img>
            <Link
              to={{
                pathname: `/product/${idx}`,
                state: { url: data[idx], season: "summer" },
              }}
            >
              <h4>Explore</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummerWomen;
