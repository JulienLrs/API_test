import React, { Component } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Cryptos from "./Crypto/Cryptos";
import Cocktails from "./Cocktails/Cocktails";
import Photo from "./Photo/Photo";



class App extends Component {
    render() {
        return (
            <div>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/cryptos" activeClassName="active">Worldwide Cryptos List</NavLink>
                    <NavLink to="/cocktails" activeClassName="active">Worldwide Cocltails List</NavLink>
                    <NavLink to="/photo" activeClassName="active">Photos List</NavLink>
                    
              
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/cryptos" element={<Cryptos />}></Route>
                    <Route exact path="/cocktails" element={<Cocktails />}></Route>
                    <Route exact path="/photo" element={<Photo />}></Route>
                </Routes>
              
            </div>
        );
    }
}


export default App;
