import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import MainPage from "../Main/mainpage";
import { useDispatch, useSelector } from "react-redux";
import Filter from '../filter';
import axios from 'axios';
import {getWomensOffice } from "../../actions/getProducts"

const WomenOffice = () => {
  const [tone, setTone] = useState("");
  const [body, setBody] = useState("");
  const [fltr, setFilter] = useState(false);
  const dispatch = useDispatch();

  const USER = useSelector((state) => state.user);
  const { loggedIn, user } = USER;

  const settonehandler = (e) => {
    setTone(e.target.value);
  };

  const setbodyhandler = (e) => {
    setBody(e.target.value);
  };

  const favHandler = async (id, img) => {
  
    console.log(id, img);
    if (loggedIn) {
      dispatch({
        type:"SHOW_ERROR",
        payload:"Product has been added to Favourites"
      })
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`/fav/${id}`, { img }, config);
      console.log(data);
    }
    else{
      dispatch({
        type:"ERROR",
        payload:"Please Login!"
      })
    }
    
  };

  const WomenOffice = useSelector((state) => state.WomenOffice);
  const { loading, products } = WomenOffice;
  const [data, setData] = useState(products);

  const clearFilter = () => {
    setData(products);
    setFilter(false);
    setTone("");
    setBody("");
  };
  const filter = () => {
    setFilter(true);
    setData(
      products.filter(
        (prod) => prod.skin_tone === tone && prod.body_type === body
      )
    );
  };

  useEffect(async () => {
    dispatch(getWomensOffice());
    setData(products);
  }, [dispatch]);

  return (
    <div style={{ position: "relative" }}>
      <MainPage />
     <Filter clearFilter={clearFilter} filter={filter} setbodyhandler={setbodyhandler} settonehandler={settonehandler} tone={tone} body={body}/>
      {loading ? (
        <div className="Loading_Icon">
          <img src="https://img.icons8.com/ios/50/000000/spinner-frame-5.png" />
        </div>
      ) : (
        <div className="summers" style={{ paddingTop: "100px" }}>
          {(fltr ? data : products).map((el, idx) => (
            <div key={idx}>
              <div className="heart">
                <i
                  className="fas fa-heart"
                  onClick={() => {
                    favHandler(el._id, el.src);
                  }}
                  style={{ color: "white" }}
                ></i>
              </div>
              <img src={el.src} alt="f"></img>
              <Link to={`/product/${el._id}`}>
                <h4>Explore</h4>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WomenOffice;
