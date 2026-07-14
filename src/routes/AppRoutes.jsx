import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import ErNoMs from "../pages/ErNoMs/ErNoMs";
import Associacoes from "../pages/Associacoes/Associacoes";
import Noticias from "../pages/Noticias/Noticias";
import Eventos from "../pages/Eventos/Eventos";
import Materiais from "../pages/Materiais/Materiais";
import Login from "../pages/Login/Login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/er-no-ms" element={<ErNoMs />} />
          <Route path="/associacoes" element={<Associacoes />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}