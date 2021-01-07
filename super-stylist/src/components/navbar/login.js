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
              <span className="close" onClick={clickHandler} ><i className='fas fa-times'></i></span>
                <div className="left">
                    <h1>Welcome To Super Stylist!</h1>
                    <h4><b>Login/SignUp</b> To quickly find your favourites styles, saved your collections.</h4>
                    <img src="http://clipart-library.com/data_images/308739.jpg"/>
                </div>
                <div className="right" style={{backgroundColor:'crimson'}} >
                    <h4 style={{color:'white'}}><b>Login/SignUp</b> To quickly find your favourites styles, saved your collections.</h4>
                    <div className="frm_input">
                        <div>
                        <label for="username" style={{color:'white'}}>Username :</label>
                        <input type="text" name="username" value="" style={{margin:'5px 4px'}} ></input>
                        </div>
                        <div>
                        <label for="password"style={{color:'white'}}>Password :</label>
                        <input type="password" name="password" value="" style={{margin:'5px 4px'}}></input>
                    </div></div>
                    <button className="login_btn btn" style={{margin:'10px 5px' ,backgroundColor:'black',color:'white',padding:"4px 7px"}}>Login</button>
                        <button className="register btn" style={{margin:'10px 5px',backgroundColor:'black',color:'white', padding:'4px 7px'}}>Register</button>
                </div>
            </div>
}
</div></>

}

export default Login;