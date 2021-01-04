import React from "react";
import "./contact.css";
import { Redirect } from "react-router-dom";
function Contact() {
  const [redirect, setRedirect] = React.useState(false);

  function clickHandler() {
    console.log(`I am clicked`);
    setRedirect(true);
  }
  return (
    <>
      {redirect ? (
        <Redirect to="/" />
      ) : (
        <div>
          <div className="contact">
            <span className="closebtn" onClick={clickHandler}>
              <i className="fas fa-times"></i>
            </span>
            <h1>Get in Touch</h1>
            <h3>Feel free to drop us a line below!</h3>
            <input
              className="field"
              type="text"
              value=""
              placeholder="Enter Your Name"
            />
            <br />
            <br />
            <input
              className="field"
              type="text"
              value=""
              placeholder="Enter your e-mail"
            />
            <br />
            <br />
            <textarea
              className="textfield"
              type="text"
              value=""
              placeholder="Type your message..."
            />
            <br />
            <br />
            <button type="submit" className="send">
              Send
            </button>
          </div>
          <div className="information">
            <h2>Contact Us</h2>
            <div className="mail-id">
              <i class="material-icons">&#xe0be;</i>{" "}
              sujatachandravanshi@gmail.com
            </div>
            <br></br>
            <div className="linkedIn">
              <i style={{ fontSize: "24px" }} className="fa">
                &#xf08c;
              </i>{" "}
              suju123456789
            </div>
            <br></br>
            <div className="phone">
              <i class="material-icons">&#xe0cd;</i> +91 7896543210
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
