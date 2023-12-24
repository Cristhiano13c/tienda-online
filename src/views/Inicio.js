import React from "react";
import Portada from "../images/inicio.jpg";
import { Link } from "react-router-dom";
import useRedirection from "../hooks/useRedirection";


export const Inicio = () => {
    useRedirection("/productos", 3000);
    return (
        <div className="inicio">
            <Link to={"/"}>
                <h1 className="title">Inicio</h1>
            </Link>
            <Link to="/productos">
                <h1 className="title">Productos</h1>
            </Link>
            <img src={Portada} alt="portada" width="100%" />
        </div>
    );
}