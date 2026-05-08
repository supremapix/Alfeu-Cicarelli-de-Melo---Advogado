import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Scale } from "lucide-react"
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
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 z-50">
            <Scale className="h-8 w-8 text-accent" />
            <div className="flex flex-col">
              <span className={`font-serif text-xl font-bold leading-tight ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>Cicarelli</span>
              <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-primary/70' : 'text-white/80 drop-shadow-md'}`}>Advogados</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/areas-de-atuacao" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>Áreas de Atuação</Link>
            <Link to="/profissionais" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>Equipe</Link>
            <Link to="/blog" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>Blog</Link>
            <Link to="/faq" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>FAQ</Link>
            
            <Button variant="accent" asChild className="shadow-lg">
              <Link to="/contato">Agendar Consulta Gratuita</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-primary" : "text-primary"} />
            ) : (
              <Menu className={isScrolled ? "text-primary" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden pt-24 pb-8 px-6 flex flex-col`}>
        <nav className="flex flex-col space-y-6">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-primary border-b border-gray-100 pb-2">Home</Link>
          <Link to="/areas-de-atuacao" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-primary border-b border-gray-100 pb-2">Áreas de Atuação</Link>
          <Link to="/profissionais" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-primary border-b border-gray-100 pb-2">Equipe</Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-primary border-b border-gray-100 pb-2">Blog</Link>
          <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-primary border-b border-gray-100 pb-2">FAQ</Link>
          <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-primary border-b border-gray-100 pb-2">Contato</Link>
        </nav>
        <div className="mt-8">
          <Button variant="accent" className="w-full text-lg py-6" asChild onClick={() => setIsMobileMenuOpen(false)}>
            <Link to="/contato">Agendar Consulta</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
