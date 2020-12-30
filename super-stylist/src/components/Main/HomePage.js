import React from 'react';
import {Route, BrowserRouter,Switch,Link,Redirect} from 'react-router-dom';

import './HomePage.css';
import Home from '../Home';

class HomePage extends React.Component {
    constructor()
    {
        super();
        this.state={
            questionaire:false,
        }
        this.clickHandler=this.clickHandler.bind(this);
        
    }

    clickHandler() {
        
       this.setState({
        questionaire:true,
       });
       console.log(this.state.questionaire);
    }
    render ()
    {
    return<>
    {this.state.questionaire?<Home/>:
    <div className="set">
        
        <header className="deskstop-container">
    <nav className="navb">
       
      <p className="navbar-bran" ><span className="super"><b><i>Super</i></b></span><span className="stylist"> <b><i>Stylist</i></b></span></p>
      
      <Link className="Login" to="/login"><b>Login/SignUp</b></Link>
      <Link className="About" to="/About"><b>About Us</b></Link>
      <Link className="Contact" to="/Contact"><b>Contact</b></Link>
      
      </nav>
      </header>
      
      <div className="containers">
         
<p className="welcome"><b>Welcome to Your Stylist!</b></p>
<p className="heading"><b>Get your Favrioute Styles for your Favrioute Ocassions</b></p>
<p className="tag"><b><i>" Clothes that will talk on your behalf"</i></b></p>
<button className="start" onClick={this.clickHandler}>Get Started</button>
</div>
</div>}</>
    }
}
export default HomePage;