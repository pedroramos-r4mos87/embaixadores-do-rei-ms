import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import ErNoMs from "../pages/ErNoMs/ErNoMs";
import Associacoes from "../pages/Associacoes/Associacoes";
import Noticias from "../pages/Noticias/Noticias";
import NoticiasDetalhes from "../pages/NoticiasDetalhes/NoticiasDetalhes";
import Eventos from "../pages/Eventos/Eventos";
import EventoDetalhes from "../pages/EventoDetalhes/EventoDetalhes";
import Materiais from "../pages/Materiais/Materiais";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

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
          <Route path="/noticias/:slug" element={<NoticiasDetalhes />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/:slug" element={<EventoDetalhes />} />
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}