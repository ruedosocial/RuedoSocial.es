import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Ferias from "./pages/Ferias.jsx";
import Toreros from "./pages/Toreros.jsx";
import Ganaderias from "./pages/Ganaderias.jsx";
import RuedoRank from "./pages/RuedoRank.jsx";
import Resultados from "./pages/Resultados.jsx";
import Noticias from "./pages/Noticias.jsx";
import Multimedia from "./pages/Multimedia.jsx";
import Ajustes from "./pages/Ajustes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="ferias" element={<Ferias />} />
        <Route path="toreros" element={<Toreros />} />
        <Route path="ganaderias" element={<Ganaderias />} />
        <Route path="ruedorank" element={<RuedoRank />} />
        <Route path="resultados" element={<Resultados />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="multimedia" element={<Multimedia />} />
        <Route path="ajustes" element={<Ajustes />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
