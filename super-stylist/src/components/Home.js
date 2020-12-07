import React from "react";
import './home.css';

const Home=()=>{
    return (
        <>
        <header classNameName="deskstop-container">
            <nav className="navbar">
               
       <a className="navbar-brand" href="#"><img src="https://as1.ftcdn.net/jpg/03/25/16/20/500_F_325162039_2nrjRQXfVyvAXq9lbx5FrHW5A9rZdpHV.jpg"width="50" height="50" className="d-inline-block align-top" alt=""/><i>  Super Stylist</i></a>

        <form className="nav-item navbar-form navbar-left form-inline">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

    </nav>

        </header>
    <div className="ok">
        <div className="container" style={{margin:"auto"}}>
             <header className="tag-line"><b><i>"Clothes That will talk on your behalf."</i></b></header>
            <button className="get-started"><b>Get Started</b></button>

        </div>
    </div>
    <div class="footer-div">
    <footer class="footer">

    </footer>
    </div>
        </>

        
    )
}
export default Home;