import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">RuedoSocial.es</Link>
      </div>

      <div className="navbar-center">
        <Link to="/ferias">Ferias</Link>
        <Link to="/toreros">Toreros</Link>
        <Link to="/ganaderias">Ganaderías</Link>
        <Link to="/clasificacion">Clasificación</Link>
        <Link to="/resultados">Resultados</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/acceder">Acceder</Link>
      </div>
    </nav>
  );
}
