import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./backgrounds/fondo.css";

const fondos = {
  "/": "/Galeria/fondocompleto/fcmadrid02.jpg",
  "/ferias": "/Galeria/ferias/ff01.jpg",
  "/toreros": "/Galeria/toreros/ft01.jpg",
  "/ganaderias": "/Galeria/ganaderias/fg01.jpg",
};

export default function App() {
  const location = useLocation();
  const fondo = fondos[location.pathname] || fondos["/"];

  return (
    <>
      <div id="global-bg" style={{ backgroundImage: `url(${fondo})` }}></div>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
}
