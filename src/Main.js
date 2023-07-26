import React, { Component } from "react";
import {
  Route,
  NavLink,
  Routes,
  HashRouter
  
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
           <div>
           <h1>
           NMass Hardware Solutions
           </h1>

                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    
                    <Routes>
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/about" element={<About/>} exact/>
                    <Route path="/contact" element={<Contact/>} exact/>
                    </Routes>
                    
                    
                    
                </div>
            </div>

        </HashRouter>
           
       
    );
  }
}
 
export default Main;