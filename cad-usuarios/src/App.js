import { HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Rotas from './Rotas';

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Header />
        <Nav />
        <Rotas />
      </HashRouter>
    </div>
  );
}

export default App;
