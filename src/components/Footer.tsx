import { Link } from "react-router-dom"
import { Scale, MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Setup */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-accent" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-tight text-white">Cicarelli</span>
                <span className="text-[10px] uppercase tracking-widest text-white/70">Advogados</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Escritório boutique especializado em Direito à Saúde. Atuamos com excelência para garantir seus direitos perante planos de saúde e SUS.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Áreas de Atuação */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 border-b border-white/10 pb-2">Áreas de Atuação</h4>
            <ul className="space-y-3">
              <li><Link to="/negativa-de-cirurgia" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>Negativa de Cirurgia e Exames</Link></li>
              <li><Link to="/reajustes-abusivos" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>Reajustes Abusivos</Link></li>
              <li><Link to="/medicamentos-alto-custo" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>Medicamentos de Alto Custo</Link></li>
              <li><Link to="/home-care" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>Home Care / Internação</Link></li>
              <li><Link to="/erro-medico" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>Erro Médico (Responsabilidade)</Link></li>
              <li><Link to="/autismo-aba" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>Tratamento ABA / Autismo</Link></li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 border-b border-white/10 pb-2">Institucional</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/profissionais" className="text-gray-400 hover:text-white transition-colors text-sm">Quem Somos</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog Jurídico</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">Perguntas Frequentes</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors text-sm">Contato</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 border-b border-white/10 pb-2">Atendimento</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 shrink-0" />
                <span className="text-gray-400 text-sm">(11) 99999-9999 <span className="text-xs text-accent ml-1">(Emergência 24h)</span></span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3 shrink-0" />
                <span className="text-gray-400 text-sm">contato@cicarelliadv.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Cicarelli Advogados. Todos os direitos reservados. OAB/SP 123.456</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
