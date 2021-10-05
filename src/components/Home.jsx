import React from "react";
import ReactDOM from "react-dom";
import {
    Navbar,
    Nav,
    NavDropdown,
    Carousel,
  } from "react-bootstrap";

function Home(){
    return (
        <>
            <header>
                <div className="wrapper">
                    <div className="head-div">
                        <div className= "logo">Demo</div>
                        <div className="logo_x">Editor</div>
                    </div>
                    <div className="menu-div">
                        <Nav className="menu ">
                            <Nav.Link className="menu-link" href="/">ABOUT</Nav.Link>
                            <Nav.Link className="menu-link" href="/">NOTIFY</Nav.Link>
                            <Nav.Link className="menu-link" href="/">CODIFY</Nav.Link>
                            <Nav.Link className="menu-link" href="/">DEVIFY</Nav.Link>
                        </Nav>
                    </div>
                </div>
                <div className ="text">
                    <h1>Code on the go</h1>
                    <p>Fix the World with 0s and 1s</p> 
                    <a href="#">Sign Up</a>
                </div>
            </header> 
        </>
    )
}

export default Home;


{/* <ul className="menu ">
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">NOTIFY</a></li>
                        <li><a href="#">COMPIFY</a></li>
                        <li><a href="#">DEVIFY</a></li> 
                    </ul> */}