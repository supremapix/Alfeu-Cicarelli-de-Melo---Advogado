import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Setup */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <i className="ri-scales-3-line text-3xl text-accent"></i>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold leading-tight text-white">Cicarelli</span>
                <span className="text-[10px] uppercase tracking-widest text-white/70">Advogados</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Escritório de advocacia boutique especializado em Direito da Saúde. Atuação ética e em conformidade com o Provimento 205/2021 da OAB.
            </p>
            <div className="flex space-x-4 pt-2 border-t border-white/10 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-colors min-h-[48px] min-w-[48px]" aria-label="Instagram">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-colors min-h-[48px] min-w-[48px]" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Áreas de Atuação */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 border-b border-white/10 pb-2">Áreas de Atuação</h4>
            <ul className="space-y-4">
              <li><Link to="/especialidade/negativa-de-cobertura" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center min-h-[44px]"><i className="ri-arrow-right-s-line text-accent mr-2"></i>Negativa de Cobertura</Link></li>
              <li><Link to="/especialidade/reembolso-medico" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center min-h-[44px]"><i className="ri-arrow-right-s-line text-accent mr-2"></i>Reembolso Médico</Link></li>
              <li><Link to="/especialidade/medicamentos-alto-custo" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center min-h-[44px]"><i className="ri-arrow-right-s-line text-accent mr-2"></i>Medicamentos de Alto Custo</Link></li>
              <li><Link to="/especialidade/home-care" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center min-h-[44px]"><i className="ri-arrow-right-s-line text-accent mr-2"></i>Home Care / Internação</Link></li>
              <li><Link to="/areas-atuacao" className="text-white hover:text-accent transition-colors text-sm font-semibold flex items-center min-h-[44px] mt-2">Ver todas as áreas <i className="ri-arrow-right-line ml-2"></i></Link></li>
            </ul>
          </div>

          {/* Institucional & Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 border-b border-white/10 pb-2">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/profissionais" className="text-gray-400 hover:text-white transition-colors text-sm min-h-[44px] flex items-center">Dr. Alfeu Cicarelli & Equipe</Link></li>
              <li><Link to="/casos-sucesso" className="text-gray-400 hover:text-white transition-colors text-sm min-h-[44px] flex items-center">Casos de Sucesso</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm min-h-[44px] flex items-center">Blog Jurídico</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm min-h-[44px] flex items-center">Dúvidas Frequentes (FAQ)</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors text-sm min-h-[44px] flex items-center">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Contato (Elderly focused) */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 border-b border-white/10 pb-2">Atendimento</h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:4130130001" className="flex items-center group hover:bg-white/5 p-2 -ml-2 rounded-lg transition-colors">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-[#ee7c23]/20 text-[#ee7c23] mr-4 group-hover:bg-[#ee7c23] group-hover:text-white transition-colors shrink-0">
                    <i className="ri-phone-fill text-xl"></i>
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Telefone Principal</p>
                    <p className="text-white font-medium text-lg tracking-wide">(41) 3013-0001</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:bg-white/5 p-2 -ml-2 rounded-lg transition-colors">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500/20 text-green-500 mr-4 group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0">
                    <i className="ri-whatsapp-fill text-xl"></i>
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">WhatsApp Plantão</p>
                    <p className="text-white font-medium text-lg tracking-wide">(41) 99958-0015</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:contato@cicarelli.adv.br" className="flex items-center group hover:bg-white/5 p-2 -ml-2 rounded-lg transition-colors">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500/20 text-blue-500 mr-4 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                    <i className="ri-mail-send-fill text-xl"></i>
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">E-mail Comercial</p>
                    <p className="text-gray-300 text-sm">contato@cicarelli.adv.br</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start mt-6 p-2">
                <i className="ri-map-pin-2-line text-accent text-xl mr-3 mt-1 shrink-0"></i>
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Av. Cândido Ferreira de Abreu, 123<br />Centro Cívico, Curitiba - PR<br />CEP 80530-000
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
            <span>OAB/PR 49.213 | OAB/SP 331.673</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-center mb-2">© {new Date().getFullYear()} Cicarelli Advogados. Todos os direitos reservados.</p>
            <p className="text-white/35 text-xs flex items-center gap-1">
              Desenvolvido com <i className="ri-heart-fill text-red-500 animate-pulse-glow" style={{fontSize: '11px'}}></i> por
              <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition ml-1 inline-flex items-center gap-1">
                Suprema Sites Express
                <img src="https://img.supremamidia.com/suprema-img.png" alt="Suprema" className="h-3.5 inline" />
              </a>
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/politica-de-privacidade" className="hover:text-white transition-colors min-h-[44px] flex items-center">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
