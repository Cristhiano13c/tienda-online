import React, {useContext} from "react";
import { DataContext } from "../../contexto/DataProvider";
import {ProductoItem} from "./ProductoItem";

export const ProductosLista = () => {
    const value = useContext(DataContext);
    const [productos] = value.productos;


    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
                <div className="productos">
                    {
                        productos.map(producto => (
                            <ProductoItem
                                key={producto.id}
                                id={producto.id}
                                title={producto.title}
                                price={producto.price}
                                category={producto.category}
                                image={producto.image}
                            />
                        ))
                    }
                </div>
        </>
    );
}