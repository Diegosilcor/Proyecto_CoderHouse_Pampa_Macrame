import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Brand from "./Assets/brand.svg"
import Ig  from "./Assets/instagram.png"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <nav className="NAV">
            <div className="topNavBar">
                <Link to={"/"} className="topNavBar_logo">
                    <img className="topNavBar_logo-img" src={Brand} alt="Logo Pampa Macramé" />
                </Link>
                <div className="topNavBar_brand">
                    <h1 className="topNavBar_brand-title">Pampa Macramé</h1>
                </div>
                <Link target="_blank" to="https://www.instagram.com/pampamacrame_/" className="topNavBar_networks">
                    <img className="topNavBar_networks-img" src={Ig} alt="Logo Instagram" />
                    <p className="topNavBar_networks-description">IG: @pampamacrame_</p>
                </Link>
            </div>
            <div>
                <div className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" href="#">INICIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/testimonios" className="nav-link" href="#">TESTIMONIOS</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PRODUCTOS
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to={"/category/espejo"}>Espejos</Link></li>
                                        <li><Link className="dropdown-item" to={"/category/portamacetas"}>Portamacetas</Link></li>
                                        <li><Link className="dropdown-item" to={"/category/tapices"}>Tapices</Link></li>
                                        <li><Link className="dropdown-item" to={"/category/todos"}>Todos</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">IDEAS & TIPS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar