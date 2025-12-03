import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Ferias from "./pages/Ferias.jsx";
import Toreros from "./pages/Toreros.jsx";
import Ganaderias from "./pages/Ganaderias.jsx";
import RuedoRank from "./pages/RuedoRank.jsx";
import Clasificacion from "./pages/Clasificacion/index.jsx";
import Resultados from "./pages/Resultados/index.jsx";
import Noticias from "./pages/Noticias/index.jsx";
import Multimedia from "./pages/Multimedia.jsx";
import Ajustes from "./pages/Ajustes.jsx";
import Perfil from "./pages/Perfil/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="ferias" element={<Ferias />} />
          <Route path="toreros" element={<Toreros />} />
          <Route path="ganaderias" element={<Ganaderias />} />
          <Route path="ruedorank" element={<RuedoRank />} />
          <Route path="clasificacion" element={<Clasificacion />} />
          <Route path="resultados" element={<Resultados />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="multimedia" element={<Multimedia />} />
          <Route path="ajustes" element={<Ajustes />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
