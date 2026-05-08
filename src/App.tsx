import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { Layout, PageTransition } from "./components/Layout"

// Pages
import HomePage from "./pages/Home"
import AreasDeAtuacao from "./pages/AreasDeAtuacao"
import AreaDetalhe from "./pages/AreaDetalhe"
import Profissionais from "./pages/Profissionais"
import FAQ from "./pages/FAQ"
import Contato from "./pages/Contato"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Localidade from "./pages/Localidade"

import CasosDeSucesso from "./pages/CasosDeSucesso"

// Placeholder for new pages
const BairrosIndex = () => <div className="pt-32 container mx-auto px-4"><h1 className="text-3xl font-serif">Bairros Atendidos</h1></div>
const CidadesIndex = () => <div className="pt-32 container mx-auto px-4"><h1 className="text-3xl font-serif">Cidades Atendidas</h1></div>
const NotFound = () => <div className="pt-32 container mx-auto px-4"><h1 className="text-3xl font-serif text-center mt-20">404 - Página não encontrada</h1></div>

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <PageTransition>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/areas-atuacao" element={<AreasDeAtuacao />} />
              <Route path="/profissionais" element={<Profissionais />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Dynamic Local SEO */}
              <Route path="/casos-sucesso" element={<CasosDeSucesso />} />
              <Route path="/bairros" element={<BairrosIndex />} />
              <Route path="/bairros/:slug" element={<Localidade />} />
              <Route path="/cidades" element={<CidadesIndex />} />
              <Route path="/cidades/:slug" element={<Localidade />} />
              <Route path="/sp/:cidade" element={<Localidade />} />
              <Route path="/sp/:cidade/:bairro" element={<Localidade />} />
              <Route path="/especialidade/:slug" element={<AreaDetalhe />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}
