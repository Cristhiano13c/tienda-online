import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexto/DataProvider";

export const ProductoItem = ({
    id,
    title,
    price,
    category,
    image
}) => { 
    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;
    return (
        <div className="producto">
            <Link to={`/producto/${id}`}>
                <div className="producto_img">
                    <img src={image} alt="" />
                </div>
            </Link>
            <div className="producto_footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">${price}</p>
            </div>
            <div className="buttom">
                <button className="btn" onClick={() =>addCarrito(id)}>
                    Add to Cart
                </button>
                <div>
                    <Link to={`/producto/${id}`} className="btn">Vista</Link>
                </div>
            </div>
        </div>
    );
}