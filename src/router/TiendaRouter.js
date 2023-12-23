import React from "react";
import { Routes,Route } from "react-router-dom";
import {Inicio} from "./Inicio";
import {ProductosLista} from "./Productos/index";
import {ProductosDetalle} from "./Productos/ProductosDetalle";
import {NotFound} from "../views/NotFound";

export const Paginas = () => {
  return (
    <section>
        <Routes>
            <Route path="/"  element={<Inicio/>} />
            <Route path="/productos" element={<ProductosLista/>} />
            <Route path="/producto/:id" element={<ProductosDetalle/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </section>
  );
}