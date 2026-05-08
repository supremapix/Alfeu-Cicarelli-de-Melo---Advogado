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

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <PageTransition>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/areas-de-atuacao" element={<AreasDeAtuacao />} />
              <Route path="/profissionais" element={<Profissionais />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Specific SEO Services Routes */}
              <Route path="/negativa-de-cirurgia" element={<AreaDetalhe id="negativa-de-cirurgia" />} />
              <Route path="/reajustes-abusivos" element={<AreaDetalhe id="reajustes-abusivos" />} />
              <Route path="/medicamentos-alto-custo" element={<AreaDetalhe id="medicamentos-alto-custo" />} />
              <Route path="/home-care" element={<AreaDetalhe id="home-care" />} />
              <Route path="/erro-medico" element={<AreaDetalhe id="erro-medico" />} />
              <Route path="/autismo-aba" element={<AreaDetalhe id="autismo-aba" />} />
              
              {/* Dynamic Local SEO */}
              <Route path="/sp/:cidade" element={<Localidade />} />
              <Route path="/sp/:cidade/:bairro" element={<Localidade />} />
            </Routes>
          </PageTransition>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}
