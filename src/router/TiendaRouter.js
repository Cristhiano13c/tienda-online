import React from "react";
import { Routes,Route } from "react-router-dom";
import {Inicio} from "../views/Inicio";
import {ProductosLista} from "../Componentes/Productos/index";
import {ProductosDetalle} from "../Componentes/Productos/ProductosDetalle";
import {NotFound} from "../views/NotFound";

export const TiendaRouter = () => {
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