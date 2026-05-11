import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { Layout, PageTransition } from "./components/Layout"
import { useEffect } from "react"

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// Pages
import HomePage from "./pages/Home"
import AreasDeAtuacao from "./pages/AreasDeAtuacao"
import AreaDetalhe from "./pages/AreaDetalhe"
import Profissionais from "./pages/Profissionais"
import FAQ from "./pages/FAQ"
import Contato from "./pages/Contato"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Bairro from "./pages/Bairro"

import CasosDeSucesso from "./pages/CasosDeSucesso"
import MapaDoSite from "./pages/MapaDoSite"

const NotFound = () => (
  <div className="pt-32 container mx-auto px-4 min-h-[60vh] flex flex-col justify-center items-center">
    <h1 className="text-5xl font-serif text-primary border-b-2 border-accent pb-4 mb-4">404</h1>
    <h2 className="text-2xl font-serif text-gray-700">Página não encontrada</h2>
  </div>
)

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <PageTransition>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/areas-de-atuacao" element={<AreasDeAtuacao />} />
              
              {/* Individual Services */}
              <Route path="/negativa-de-cirurgia" element={<AreaDetalhe id="negativa-de-cirurgia" />} />
              <Route path="/reajustes-abusivos" element={<AreaDetalhe id="reajustes-abusivos" />} />
              <Route path="/medicamentos-alto-custo" element={<AreaDetalhe id="medicamentos-alto-custo" />} />
              <Route path="/home-care" element={<AreaDetalhe id="home-care" />} />
              <Route path="/erro-medico" element={<AreaDetalhe id="erro-medico" />} />
              <Route path="/autismo-aba" element={<AreaDetalhe id="autismo-aba" />} />
              <Route path="/especialidade/:slug" element={<AreaDetalhe />} />

              <Route path="/profissionais" element={<Profissionais />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/casos-sucesso" element={<CasosDeSucesso />} />
              <Route path="/mapa-do-site" element={<MapaDoSite />} />
              
              {/* Dynamic Local SEO */}
              <Route path="/bairro/:slug" element={<Bairro />} />
              <Route path="/advogado-plano-de-saude-sao-paulo" element={<HomePage />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}
