import React from "react";
import { Header } from "./Componentes/Header";
import 'boxicons';
import { BrowserRouter as Router, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Route>
        <Header/>
    </Route>
    </div>
  );
}

export default App;
