import React from "react";
import { Header } from "./Componentes/Header";
import 'boxicons';
import { BrowserRouter as Router} from "react-router-dom";
import { Paginas } from "./Componentes/Paginas";
function App() {
  return (
    <div className="App">
    <Router>
        <Header/>
        <Paginas/>
    </Router>
    </div>
  );
}

export default App;
