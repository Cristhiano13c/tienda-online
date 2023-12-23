import React from "react";
import {Link} from "react-router-dom";
import useRedirection from "../hooks/useRedirection";

export const Landing = () => {
    useRedirection("/", 3000); // Redireccionamos a la vista de restaurantes en 3 segundos

    return (
        <div className="landing">
                <Link to={"/restaurants"}> {/* Añadimos un enlace a la vista de restaurantes */}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1>Bienvenidos a Nuestro Delivery</h1>
                </Link>
                <span className="laser-pointer"></span> {/* Puntero láser original */}
                <span className="laser-pointer-reverse"></span> {/* Nuevo puntero láser en sentido contrario */}
        </div>
    );
}