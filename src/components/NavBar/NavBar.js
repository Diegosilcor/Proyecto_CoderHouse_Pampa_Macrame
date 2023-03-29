import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <nav>
            <div className="topNavBar">
                <div className="topNavBar_logo">
                    <img className="topNavBar_logo-img" src="" alt="Logo Pampa Macramé" />
                </div>
                <div className="topNavBar_brand">
                    <h1 className="topNavBar_brand-title">Pampa Macramé</h1>
                </div>
                <div className="topNavBar_networks">
                    <img className="topNavBar_networks-img" src="./images/logos/instagram.png" alt="Logo Instagram" />
                    <p className="topNavBar_networks-description">IG: @pampamacrame_</p>
                </div>
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
                                    <Link to="/" className="nav-link" href="#">TESTIMONIOS</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PRODUCTOS
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" href="#">Espejos</Link></li>
                                        <li><Link className="dropdown-item" href="#">Portamacetas</Link></li>
                                        <li><Link className="dropdown-item" href="#">Tapices</Link></li>
                                        <li><Link className="dropdown-item" href="#">Todos</Link></li>
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