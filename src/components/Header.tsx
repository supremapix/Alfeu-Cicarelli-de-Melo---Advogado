import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 z-50">
            <i className="ri-scales-3-line text-3xl text-accent"></i>
            <div className="flex flex-col">
              <span className={`font-serif text-2xl font-bold leading-tight ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>Cicarelli</span>
              <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-primary/70' : 'text-white/80 drop-shadow-md'}`}>Advogados</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/areas-atuacao" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>Áreas de Atuação</Link>
            <Link to="/profissionais" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>Profissionais</Link>
            <Link to="/blog" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>Blog</Link>
            <Link to="/faq" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>FAQ</Link>
            <Link to="/contato" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>Contato</Link>
            
            <Button variant="accent" asChild className="shadow-lg">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 min-h-[48px] min-w-[48px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <i className={`ri-close-line text-3xl ${isScrolled ? "text-primary" : "text-primary"}`}></i>
            ) : (
              <i className={`ri-menu-line text-3xl ${isScrolled ? "text-primary" : "text-white"}`}></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden overflow-y-auto`}>
        <div className="pt-24 pb-8 px-6 flex flex-col min-h-screen">
          
          {/* Quick Contacts for Elderly */}
          <div className="mb-8 grid grid-cols-1 gap-4">
            <a href="tel:4130130001" className="flex items-center p-4 bg-gray-50 rounded-lg min-h-[56px]">
              <i className="ri-phone-line text-2xl text-[#ee7c23] mr-4"></i>
              <span className="text-lg font-medium text-primary">(41) 3013-0001</span>
            </a>
            <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-green-50 rounded-lg min-h-[56px]">
              <i className="ri-whatsapp-line text-2xl text-green-600 mr-4"></i>
              <span className="text-lg font-medium text-primary">WhatsApp</span>
            </a>
          </div>

          <nav className="flex flex-col space-y-2 mb-8">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-h-[56px] text-xl font-medium text-primary border-b border-gray-100 pb-2">Home</Link>
            <Link to="/areas-atuacao" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-h-[56px] text-xl font-medium text-primary border-b border-gray-100 pb-2">Áreas de Atuação</Link>
            <Link to="/profissionais" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-h-[56px] text-xl font-medium text-primary border-b border-gray-100 pb-2">Profissionais</Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-h-[56px] text-xl font-medium text-primary border-b border-gray-100 pb-2">Blog</Link>
            <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-h-[56px] text-xl font-medium text-primary border-b border-gray-100 pb-2">FAQ</Link>
            <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-h-[56px] text-xl font-medium text-primary border-b border-gray-100 pb-2">Contato</Link>
          </nav>

          <div className="mt-auto pb-10">
            <Button variant="accent" className="w-full text-xl min-h-[64px] font-bold shadow-lg" asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/contato">Fale Conosco Agora</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
