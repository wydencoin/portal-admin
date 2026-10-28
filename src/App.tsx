import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Beneficios from "./pages/Beneficios";
import Importar from "./pages/Importar";
import ConfirmarUso from "./pages/ConfirmarUso";
import AcoesEsg from "./pages/AcoesEsg";
import Regras from "./pages/Regras";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 12, padding: 12 }}>
        <Link to="/login">Login</Link>
        <Link to="/">Beneficios</Link>
        <Link to="/importar">Importar</Link>
        <Link to="/confirmar">ConfirmarUso</Link>
        <Link to="/esg">AcoesEsg</Link>
        <Link to="/regras">Regras</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Beneficios />} />
        <Route path="/importar" element={<Importar />} />
        <Route path="/confirmar" element={<ConfirmarUso />} />
        <Route path="/esg" element={<AcoesEsg />} />
        <Route path="/regras" element={<Regras />} />
      </Routes>
    </BrowserRouter>
  );
}
