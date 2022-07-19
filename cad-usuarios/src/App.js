import { HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Rotas from './Rotas';

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Header />
        <Rotas />
      </HashRouter>
    </div>
  );
}

export default App;
