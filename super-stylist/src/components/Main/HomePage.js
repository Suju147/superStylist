import React from "react";

import "./HomePage.css";
import Home from "../Home";
import { Link, Redirect } from "react-router-dom";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      homePage: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    <Redirect to="/home" />
    // this.setState({
    //   homePage: true,
    // });
    //console.log(this.state.questionaire);
  }
  render() {
    return (
      <div>
          <div className="bbgg">
            <div
              // className="set"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <div className="containers">
                <p className="welcome">
                  <b>Welcome to Your Stylist!</b>
                </p>
                <p className="heading">
                  <p>Get your Favrioute Styles for your Favrioute Ocassions</p>
                </p>
                <p className="tag">
                  <b>
                    <i>" Clothes that will talk on your behalf"</i>
                  </b>
                </p>
<Link to="/home">                <button className="btn">
                  Get Started
                </button></Link>
              </div>
            </div>
          </div>
        )
      </div>
    );
  }
}
export default HomePage;
