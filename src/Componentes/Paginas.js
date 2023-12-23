import React from "react";
import { Routes,Route } from "react-router-dom";
import {Inicio} from "./Inicio";
import {ProductosLista} from "./Productos/index";
import {ProductosDetalle} from "./Productos/ProductosDetalle";

export const Paginas = () => {
  return (
    <section>
        <Routes>
            <Route path="/"  element={<Inicio/>} />
            <Route path="/productos" element={<ProductosLista/>} />
            <Route path="/producto/:id" element={<ProductosDetalle/>} />
        </Routes>
    </section>
  );
}