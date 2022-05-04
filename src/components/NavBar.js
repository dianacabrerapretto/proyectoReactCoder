import './NavBar.css';
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <p className="brand">
                    <img src={logo} alt="logo" className="logo" /></p>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link to='/category/1' style={{ textDecoration: "none" }}><li className='nav-item nav-link mx-2'>BRASIL</li></Link>
                        <Link to='/category/2' style={{ textDecoration: "none" }}><li className='nav-item nav-link mx-2'>COLOMBIA</li></Link>
                        <Link to='/category/3' style={{ textDecoration: "none" }}><li className='nav-item nav-link mx-2'>AFRICA</li></Link>
                        <Link to='/category/4' style={{ textDecoration: "none" }}><li className='nav-item nav-link mx-2'>ACCESORIOS</li></Link>
                    </ul>
                </div>
                <div className="d-flex">
                    <a className="nav-link" href="#">Registrarse</a>
                    <a className="nav-link" href="#">Iniciar Sesión</a>
                    <Link to='/cart' style={{ textDecoration: "none", color: "#997564" }}><CartWidget /></Link>
                </div>
            </div>
        </nav>
    );
}


export default NavBar;