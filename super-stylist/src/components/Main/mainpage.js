import React from "react";
import { Link } from "react-router-dom";
import "./mainpage.css";



class MainPage extends React.Component {
  render() {
    return (
      <div>
        <header className="deskstop-container">
          <nav className="navb">
            <div
              className="options_Login"
            
            >
              <div className="navbar-bran">
                <span className="super">
                  <h2 style={{marginLeft:"4%"}}>SuperStylist</h2>
                </span>
              </div>
              <div
                className="all_links"
               
              >
                <Link className="profile" to="/profile">
                  <div>
                    <i className="fas fa-user"></i>
                  </div>
                </Link>
                <Link className="Login" to="/login">
                  <h4>Login/SignUp</h4>
                </Link>

                <Link className="About" to="/About">
                  <h4>About Us</h4>
                </Link>
                <Link className="Contact" to="/Contact">
                  <h4>Contact</h4>
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <div className="options" style={{ display: "flex" }}>
          <div>
            <Link
              className="Men"
              to="/Men"
              onMouseOver={this.props.handleMouseHoverMen}
              onMouseLeave={this.props.handleMouseHoverMen}
            >
              Men
            </Link>

            <Link
              className="Women"
              to="/Women"
              onMouseOver={this.props.handleMouseHoverWomen}
              onMouseLeave={this.props.handleMouseHoverWomen}
            >
              Women
            </Link>
            <Link className="LookBook" to="/LookBook">
              LookBook
            </Link>
            <Link className="FashionTips" to="/FashionTips">
              FashionTips
            </Link>
          </div>
          <div style={{ marginRight: "10px" }}>
            <Link className="Home" to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
