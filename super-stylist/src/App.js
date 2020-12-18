import React from 'react';
import Home from './components/Questionaire';
import './App.css';
import { useState } from 'react';
import Questionaire from './components/Questionaire';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      home:false,
    }
  }
hometoggle=()=>{
  this.setState({
    home:true,
  })
}
  
  render (){
    return<div id="main" >
      {this.state.home?<Questionaire/>:
      <>
       <header classNameName="deskstop-container">
            <nav className="navb">
               
              <p className="navbar-bran"><span className="super"><b>Super</b></span><span className="stylist"> <b>Stylist</b></span></p>
              <a className="Login" href="#"><b>Login</b></a>
              <a className="faq" href="#"><b>FAQ</b></a>
              <a className="wishlist" href="#">
          <span class="glyphicon glyphicon-bookmark"></span>
        </a>
              <a className="profile" href="#">
          <span class="glyphicon glyphicon-user"></span>
        </a>
            </nav>

     </header>

     <div className="container">
       <p className="welcome"><b>Welcome to Your Stylist!</b></p>
       <p className="tag"><b><i>" Clothes that will talk on your behalf"</i></b></p>
       <button className="start" onClick={this.hometoggle}>Get Started</button>
     </div>
     
     </>
  }
     </div>
      
  }
}
export default App;
