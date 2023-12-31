import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexto/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";
import SizeSelector from "../SizeSelector"; 
import AddToCartButton from "../AddToCartButton";



export const ProductosDetalle = () => {
    const value = useContext(DataContext);
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle] = useState([]);
    const params = useParams();
    const [url, setUrl] = useState(0);
    const [images, setImages] = useState('');
    let item = 0;

    useEffect(() => {
        productos.forEach(producto => {
            item = 0;
            if (producto.id === parseInt(params.id)) {
                setDetalle(producto)
                setUrl(0);
            }
        })
    }, [params.id, productos])

    useEffect(() => {
        const value = `${detalle.img1}${url}${detalle.img2}`;
        setImages(value);
        if (detalle.images) {
            const img = detalle.images.map(image => {
                return image.url
            })
            setImages(img)
        }
    }, [url, params.id])

    const handleInput = e => {
        const value = e.target.value.toString().padStart(2, '01');
        setUrl(value)
    }
    if (detalle.length < 1) return null;

    return (
        <>
            {
                <div className="detalles">
                    <h2>{detalle.title}</h2>
                    <p className="price">${detalle.price}</p>
                    <div className="grid">
                        <p className="nuevo">Nuevo</p>
                        <div className="size">
                            <SizeSelector />
                        </div>
                    </div>
                    <AddToCartButton productId={detalle.id} />
                    {
                        url ? <img src={images} alt={detalle.title} /> : <img src={detalle.image} alt={detalle.title} />
                    }
                    <img src={images} alt={detalle.title} />
                    <input type="range" min="1" max="36" value={url} onChange={handleInput} />
                    <div className="descripcion">
                        <p>
                            <b>Descripción:</b> Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum nec scelerisque, felis rutrum tempor quis senectus urna donec faucibus augue ad,
                            curae nascetur habitant varius cubilia viverra ultricies pretium potenti. Sociis turpis leo augue etiam magna auctor maecenas id sodales bibendum luctus,
                            suspendisse tempor nunc massa urna rhoncus odio pellentesque condimentum egestas, posuere torquent eget sed nostra mus ligula gravida curabitur in.
                        </p>
                    </div>

                </div>
            }
            <h2 className="relacionado">Productos Relacionados</h2>
            <div className="productos">
                {
                    productos.map((producto) => {
                        if ((item < 6) && (detalle.category === producto.category)) {
                            item++;
                            return <ProductoItem
                                key={producto.id}
                                id={producto.id}
                                title={producto.title}
                                price={producto.price}
                                category={producto.category}
                                image={producto.image}
                            />
                        }
                    })
                }
            </div>
        </>
    );
}