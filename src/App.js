import React from "react";
import { Header } from "./Componentes/Header";
import 'boxicons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { BrowserRouter as Router} from "react-router-dom";
import {TiendaRouter} from "./router/TiendaRouter";
import { DataProvider } from "./contexto/DataProvider";
import { Carrito } from "./Componentes/Carrito";
import { Footer } from "./Componentes/Footer";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
            <Header/>
            <Carrito/>
            <TiendaRouter/>
            <Footer/>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
