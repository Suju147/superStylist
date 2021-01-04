import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainPage from "../Main/mainpage";

export class MenWinter extends Component {
  render() {
    const data = [
      "https://i.pinimg.com/originals/c9/78/5f/c9785fca88ffbab4b90a19fe5cfaaf44.jpg",
      "https://effortlessgent.com/wp-content/uploads/2017/06/light-colors.jpg",
      "https://cdn.famousoutfits.com/wp-content/uploads/2015/collections/summer-outfits/summer-outfits-03.jpg",
      "https://nextluxury.com/wp-content/uploads/excellent-summer-outfits-styles-for-men-with-red-shorts-and-scarf.jpg",
      "https://effortlessgent.com/wp-content/uploads/2017/06/looser-clothes.jpg",
      "https://i.styleoholic.com/cool-and-relaxed-beach-men-outfits-1-500x750.jpg",
      "https://cdn.famousoutfits.com/wp-content/uploads/2015/collections/summer-outfits/summer-outfits-10.jpg",
      "https://i.pinimg.com/originals/2c/03/26/2c032608d0c75cc67b0db23cdacb0c95.jpg",
      "https://i.pinimg.com/originals/f6/07/99/f6079978a03513a5c6d4c9d238a633be.jpg",
      "https://i.pinimg.com/originals/68/a4/57/68a4573f5235fb38ded6f97c435498dc.jpg",
    ];
    return (
      <div>
        <MainPage />
        <div className="summers">
          {data.map((el, idx) => (
            <div key={idx}>
              <Link to="#">
                <div className="heart">
                  <i className="fas fa-heart" style={{ color: "white" }}></i>
                </div>
              </Link>
              <img src={data[idx]}></img>
              <Link
                to={{
                  pathname: `/product/${idx}`,
                  state: { url: data[idx], season: "winter" },
                }}
              >
                <h4 style={{ backgroundColor: "crimson", color: "white" }}>
                  Explore
                </h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MenWinter;
