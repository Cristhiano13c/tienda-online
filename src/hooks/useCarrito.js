import { useContext } from "react";
import { DataContext } from "../contexto/DataProvider";

export const useCarrito = () => {
    const value = useContext(DataContext);
    const [carrito, setCarrito] = value.carrito;

    const resta = (id) => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
            }
            setCarrito([...carrito])
        })
    }

    const suma = (id) => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1;
            }
            setCarrito([...carrito])
        })
    }

    const removeProducto = (id) => {
        if (window.confirm("¿Quieres eliminar este producto?")) {
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    carrito.splice(index, 1)
                }
            })
            setCarrito([...carrito])
        }
    }

    return { resta, suma, removeProducto };
}