import React from 'react';
import {Route, BrowserRouter,Switch,Link,Redirect} from 'react-router-dom';
import SlideShow from '../home files/slideshow';
import './Home.css';
import Home from '../Home';
import MenCard from '../options/menCard';

class MainPage extends React.Component {
   constructor(props)
   {
       super(props);
   }
    
    render()
    {
        return<>
        <header className="deskstop-container">
    <nav className="navb">
       
      <p className="navbar-bran" ><span className="super"><b><i>Super</i></b></span><span className="stylist"> <b><i>Stylist</i></b></span></p>
      
      <Link className="Login" to="/login"><b>Login/SignUp</b></Link>
     
      <Link className="About" to="/About"><b>About Us</b></Link>
      <Link className="Contact" to="/Contact"><b>Contact</b></Link>
      <Link className="profile" to="/profile"><b><span class="glyphicon glyphicon-user"></span></b></Link>
      
      </nav>
      </header>
        
      <div className="options">
        <Link className="Men" to="/Men" onMouseOver={this.props.handleMouseHoverMen}
          onMouseLeave={this.props.handleMouseHoverMen}>Men</Link>
        
        <Link className="Women" to="/Women"onMouseOver={this.props.handleMouseHoverWomen}
          onMouseLeave={this.props.handleMouseHoverWomen}>Women</Link>
        <Link className="LookBook" to="/LookBook">LookBook</Link>
        <Link className="FashionTips" to="/FashionTips">FashionTips</Link>
    
    
    </div>
   
        </>
    }

}
export default MainPage;