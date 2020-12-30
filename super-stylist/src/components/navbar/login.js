import React from 'react';
import {Redirect} from 'react-router-dom';
import './login.css';
function Login(props){
    const [redirect, setRedirect] = React.useState(false);

    function clickHandler() {
        console.log(`I am clicked`);
        setRedirect(true);
      }
    return<>
    <div >
    {
        redirect?<Redirect to="/"/>:
    
        <div className="login">
        <span className="close" onClick={clickHandler}>X</span>
        <br></br>
            <div className="Welcome"><b>Welcome To Super Stylist!</b></div>
            <div className="Offer"><b>Login/SignUp</b> To quickly find your favourites styles, saved your collections.</div>
            <div className="photo"><img src="http://clipart-library.com/data_images/308739.jpg" height="150px" width="90%"></img></div>
            <br>
            </br>
            <br>
            </br>
            <input className="Mail" placeholder="Enter PhoneNumber or Email."></input>
            <br>
            </br>
            <br></br>
            <div className="Google" onClick=""><img src="https://www.devdiscourse.com/AdminFiles/NewsImages/01_06_2018_03_02_32_7499486.png?width=920&format=webp" height="30px" width="30px"></img> Google</div>
        </div>}
        </div></>
}

export default Login;