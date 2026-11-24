import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Sobre = lazy(() => import("../pages/Sobre/Sobre"));
const ErNoMs = lazy(() => import("../pages/ErNoMs/ErNoMs"));
const Associacoes = lazy(() => import("../pages/Associacoes/Associacoes"));
const AssociacaoDetalhes = lazy(() =>
  import("../pages/AssociacaoDetalhes/AssociacaoDetalhes")
);
const Noticias = lazy(() => import("../pages/Noticias/Noticias"));
const NoticiasDetalhes = lazy(() =>
  import("../pages/NoticiasDetalhes/NoticiasDetalhes")
);
const Eventos = lazy(() => import("../pages/Eventos/Eventos"));
const EventoDetalhes = lazy(() =>
  import("../pages/EventoDetalhes/EventoDetalhes")
);
const Materiais = lazy(() => import("../pages/Materiais/Materiais"));
const Login = lazy(() => import("../pages/Login/Login"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/er-no-ms" element={<ErNoMs />} />
            <Route path="/associacoes" element={<Associacoes />} />
            <Route
              path="/associacoes/:slug"
              element={<AssociacaoDetalhes />}
            />
            <Route path="/noticias" element={<Noticias />} />
            <Route
              path="/noticias/:slug"
              element={<NoticiasDetalhes />}
            />
            <Route path="/eventos" element={<Eventos />} />
            <Route
              path="/eventos/:slug"
              element={<EventoDetalhes />}
            />
            <Route path="/materiais" element={<Materiais />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}