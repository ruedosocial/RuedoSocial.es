import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/ferias">Ferias</Link></li>
        <li><Link to="/toreros">Toreros</Link></li>
        <li><Link to="/ganaderias">Ganaderías</Link></li>
        <li><Link to="/ruedorank">RuedoRank</Link></li>
        <li><Link to="/resultados">Resultados</Link></li>
        <li><Link to="/noticias">Noticias</Link></li>
        <li><Link to="/multimedia">Multimedia</Link></li>
        <li><Link to="/ajustes">Ajustes</Link></li>
      </ul>
    </aside>
  );
}
