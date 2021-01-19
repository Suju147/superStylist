import React from "react";
import "./contact.css";
import { Redirect } from "react-router-dom";
function Contact() {
  const [redirect, setRedirect] = React.useState(false);
  const [name,setName]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [msg,setMsg]=React.useState('');

  function clickHandler() {
    console.log(`I am clicked`);
    setRedirect(true);
  }

  const namehandler=(e)=>{
    setName(e.target.value);
  }
  const emailHandler=(e)=>{
    setEmail(e.target.value);
  }
  const msgHandler=(e)=>{
    setMsg(e.target.value);
  }
  const submitHandler=()=>{
   setName('');
   setMsg('');
   setEmail('');
  }
  return (
    <>
      {redirect ? (
        <Redirect to="/home" />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
          }}
        >
          <div className="contact">
            <span className="closebtn" onClick={clickHandler}>
              <i className="fas fa-times"></i>
            </span>
            <h1>Get in Touch</h1>
            <h4>Feel free to drop us a line below!</h4>
            <input
              className="field"
              type="text"
              value={name}
              placeholder="Enter Your Name"

              onChange={namehandler}
            />
            <input
              className="field"
              type="text"
              value={email}
              placeholder="Enter your e-mail"
              onChange={emailHandler}
            />
            <textarea
              className="textfield"
              type="text"
              value={msg}
              placeholder="Type your message..."
              onChange={msgHandler}
            />
            <button type="submit" className="send" onClick={submitHandler}>
              Send
            </button>
            <div className="information">
              <h3>Contact Us</h3>
              <div className="mail-id">
                <i class="material-icons">&#xe0be;</i>{" "}
                <div>sujatachandravanshi@gmail.com</div>
              </div>
              <div className="linkedIn">
                <i style={{ fontSize: "24px" }} className="fa">
                  &#xf08c;
                </i>{" "}
                <div>suju123456789</div>
              </div>
              <div className="phone">
                <i class="material-icons">&#xe0cd;</i>
                <div> +91 7896543210</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
