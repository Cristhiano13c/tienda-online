import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexto/DataProvider";
import AddToCartButton from "../AddToCartButton";

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
                <div className="producto__img">
                    <img src={image} alt="" />
                </div>
            </Link>
            <div className="producto__footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">${price}</p>
            </div>
            <div className="buttom">
                <AddToCartButton productId={id} />
        
                <div>
                    <Link to={`/producto/${id}`} className="btn">Vista</Link>
                </div>
            </div>
        </div>
    );
}