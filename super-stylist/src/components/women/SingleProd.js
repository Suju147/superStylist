import React from "react";
import "./singleprod.css";
import { useParams, useLocation } from "react-router-dom";
import MainPage from "../Main/mainpage";

const SingleProd = () => {
  const params = useParams();
  const loc = useLocation();
  const url = loc.state.url;
  return (
    <>
      <MainPage />
      <div className="singleitem">
        <img src={url} alt="none"></img>
        <div className="item_description">
          <div className="title_rating">
            <h1>Title</h1>
            <span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </div>
          <h4>
            Pariatur nisi consequat do culpa ut. Consequat id exercitation irure
            dolore eu irure cillum tempor ad ea. Deserunt reprehenderit sint
            esse deserunt cupidatat. Labore dolor velit incididunt anim
            cupidatat. Labore aute esse qui culpa pariatur commodo aute commodo
            dolor magna incididunt ullamco. Occaecat nostrud voluptate
            exercitation occaecat tempor officia incididunt aliquip do ullamco
            consequat enim. Veniam consectetur aliquip incididunt amet cillum
            quis ad aliquip non.
          </h4>
          <div>
            <button className="btn">check Occasion</button>
            <button className="btn btn2">Add to Favourites</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProd;
