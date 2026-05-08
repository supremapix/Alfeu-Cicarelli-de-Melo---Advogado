import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const headerActive = isScrolled

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        headerActive ? "bg-primary/95 backdrop-blur-md shadow-lg py-3" : "bg-primary/80 backdrop-blur-sm py-5 border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 z-50 group">
            <i className="ri-scales-3-fill text-3xl text-gold group-hover:scale-110 transition-transform"></i>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold leading-tight text-white tracking-wide">Cicarelli</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-300">Advogados</span>
            </div>
            <div className="hidden sm:flex ml-3 px-2 py-0.5 bg-gold border border-gold-dk rounded-full text-primary text-[10px] font-bold uppercase tracking-widest">
              São Paulo
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/areas-de-atuacao" className="text-sm font-medium text-gray-200 hover:text-gold transition-colors tracking-wide">Áreas de Atuação</Link>
            <Link to="/profissionais" className="text-sm font-medium text-gray-200 hover:text-gold transition-colors tracking-wide">Os Advogados</Link>
            <Link to="/faq" className="text-sm font-medium text-gray-200 hover:text-gold transition-colors tracking-wide">Dúvidas Freq.</Link>
            <Link to="/blog" className="text-sm font-medium text-gray-200 hover:text-gold transition-colors tracking-wide">Blog Saúde</Link>
            
            <Button asChild className="bg-gold hover:bg-gold-dk text-primary font-bold shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all rounded-lg h-10 px-6">
              <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer">
                Consulta Gratuita
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <i className="ri-close-line text-3xl text-white"></i>
            ) : (
              <i className="ri-menu-line text-3xl text-gold"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      <div className={`fixed inset-0 bg-primary z-40 transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden overflow-y-auto`}>
        <div className="pt-24 pb-8 px-6 flex flex-col min-h-screen">
          
          <div className="mb-6 flex justify-center">
             <div className="px-3 py-1 bg-gold/20 border border-gold/40 rounded-full text-gold text-xs font-bold uppercase tracking-widest">
              Atendimento em São Paulo - SP
            </div>
          </div>
          
          <nav className="flex flex-col space-y-2 mb-8">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-h-[56px] text-xl font-serif font-medium text-white border-b border-white/10 pb-2">Home</Link>
            <Link to="/areas-de-atuacao" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-h-[56px] text-xl font-serif font-medium text-white border-b border-white/10 pb-2">Áreas de Atuação</Link>
            <Link to="/profissionais" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-h-[56px] text-xl font-serif font-medium text-white border-b border-white/10 pb-2">Profissionais</Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-h-[56px] text-xl font-serif font-medium text-white border-b border-white/10 pb-2">Blog da Saúde</Link>
            <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-h-[56px] text-xl font-serif font-medium text-white border-b border-white/10 pb-2">Dúvidas Frequentes</Link>
          </nav>

          <div className="mb-8 grid grid-cols-1 gap-4">
            <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-green-600/20 rounded-xl min-h-[56px] border border-green-500/30">
              <i className="ri-whatsapp-line text-2xl text-green-400 mr-4"></i>
              <span className="text-lg font-medium text-white">Mensagem no WhatsApp</span>
            </a>
            <a href="tel:4130130001" className="flex items-center p-4 bg-white/5 rounded-xl min-h-[56px] border border-white/10">
              <i className="ri-phone-line text-2xl text-gold mr-4"></i>
              <span className="text-lg font-medium text-white">(41) 3013-0001</span>
            </a>
          </div>

          <div className="mt-auto pb-10">
            <Button className="w-full text-lg min-h-[64px] font-bold shadow-lg bg-gold hover:bg-gold-dk text-primary rounded-xl transition-all" asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/contato">Plantão 24h para Urgências</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
