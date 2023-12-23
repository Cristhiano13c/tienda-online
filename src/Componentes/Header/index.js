import React, { useContext, useState, useEffect } from "react";
import Nike from "../../images/Nike.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexto/DataProvider";

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;
    const [darkMode, setDarkMode] = useState(false);

    const menuToggle = () => {
        setMenu(!menu);
    }

    // Función para alternar el modo oscuro
    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
        setDarkMode(!darkMode);
    };
    // Efecto para aplicar el modo oscuro al cargar la página
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);
    return (
        <header>
            <Link to="#">
                <div className="logo">
                    <img src={Nike} alt="logo" width="150" />
                </div>
            </Link>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="#">Contacto</Link></li>
                <li><Link to="#">Login / Registro</Link></li>
            </ul>
            <div className="custom-switch">
                <input
                    type="checkbox"
                    className="custom-switch-input"
                    id="darkSwitch"
                    onChange={toggleDarkMode}
                    checked={darkMode}
                />
                <label className="custom-switch-label" htmlFor="darkSwitch">
                    <div className="moon-icon">
                        <box-icon name="moon"></box-icon>
                    </div>
                    <div className="custom-switch-inner"></div>
                    <div className="custom-switch-switch"></div>
                </label>
            </div>
            <div className="cart" onClick={menuToggle}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
        </header>
    );
}