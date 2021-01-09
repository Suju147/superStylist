import { React,useState} from "react";
import "./contact.css";
import { Redirect } from "react-router-dom";
function Contact() {
  const [redirect, setRedirect] = useState(false);
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [msg,setMsg]=useState("");

  function clickHandler() {
    console.log(`I am clicked`);
    setRedirect(true);
  }

  const emailhandler=(e)=>{
      setEmail(e.target.value);
  }

  const namehandler=(e)=>{
    setName(e.target.value);
  }

  const msghandler=(e)=>{
    setMsg(e.target.value)
  }

  const submitHandler=()=>{
     setMsg("");
     setName("");
     setEmail("");
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
            <h4>Feel free to drop us a line below!</h4>
            <input
              className="field"
              type="text"
              value={name}
              placeholder="Enter Your Name"
              onChange={(e)=>namehandler(e)}
            />
            <input
              className="field"
              type="text"
              value={email}
              placeholder="Enter your e-mail"
              onChange={(e)=>emailhandler(e)}
            />
            <textarea
              className="textfield"
              type="text"
              value={msg}
              placeholder="Type your message..."
              onChange={(e)=>msghandler(e)}
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
