import React from "react";
import { Routes,Route } from "react-router-dom";
import {Inicio} from "./Inicio";
import {ProductosLista} from "./Productos/index";
import {ProductosDetalle} from "./Productos/ProductosDetalle";
import {NotFound} from "../views/NotFound";
import {Contacto} from "./Contacto/index";

export const Paginas = () => {
  return (
    <section>
        <Routes>
            <Route path="/"  element={<Inicio/>} />
            <Route path="/productos" element={<ProductosLista/>} />
            <Route path="/producto/:id" element={<ProductosDetalle/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </section>
  );
}