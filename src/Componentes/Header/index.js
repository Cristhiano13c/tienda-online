import React from "react";
import Nike from "../../images/Nike.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to="#">
                <div className="logo">
                    <img src={Nike} alt="logo" width="150"/>
                </div>
            </Link>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="#">Contacto</Link></li>
                <li><Link to="#">Acerca de</Link></li>
                <li><Link to="#">Login / Registro</Link></li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>
    );
}