import React from "react";
import { Header } from "./Componentes/Header";
import 'boxicons';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Paginas from "./Componentes/Paginas";
function App() {
  return (
    <div className="App">
    <Route>
        <Header/>
        <Paginas/>
    </Route>
    </div>
  );
}

export default App;
