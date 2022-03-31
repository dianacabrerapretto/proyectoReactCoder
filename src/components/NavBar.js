import React, {Component} from "react";
import './NavBar.css';
import logo from "../img/logo.png";
import CartWidget from "./CartWidget";

class NavBar extends React.Component {
    render(){
    return(
<nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">  
                    <img src={logo} alt="logo" className="logo" /> 
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active mx-2" aria-current="page" href="#">BRASIL</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link mx-2" href="#">COLOMBIA</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link mx-2" href="#">AFRICA</a>
                            </li>
                            <li className="nav-item mx-2">
                            <a className="nav-link">ACCESORIOS</a>
                            </li>                            
                        </ul>
                    </div>
                    <div class="d-flex">
                            <a className="nav-link" href="#">Registrarse</a> 
                            <a className="nav-link" href="#">Iniciar Sesión</a>
                            <CartWidget />
                    </div>
                </div>
            </nav>
    );
}
}

export default NavBar;