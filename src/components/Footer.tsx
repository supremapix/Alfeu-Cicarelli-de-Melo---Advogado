import { Link } from "react-router-dom"
import { getAllZonas } from "@/data/bairros"

export function Footer() {
  const zonas = getAllZonas()

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-[3px] border-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Desc */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <i className="ri-scales-3-fill text-4xl text-gold"></i>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold leading-tight text-white tracking-wide">Cicarelli</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">Advogados SP</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4 font-light">
              Escritório especializado na defesa do consumidor contra negativas de planos de saúde, reajustes abusivos e erro médico em São Paulo.
            </p>
            <div className="flex space-x-4 pt-4 border-t border-white/10 mt-6">
              <span className="text-gray-500 font-bold uppercase tracking-widest text-xs flex items-center">
                OAB/SP 331.673
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-500 font-bold uppercase tracking-widest text-xs flex items-center">
                OAB/PR 49.213
              </span>
            </div>
          </div>

          {/* Col 2: Serviços */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-gold">Áreas de Atuação</h4>
            <ul className="space-y-4">
              <li><Link to="/negativa-de-cirurgia" className="text-gray-300 hover:text-gold transition-colors text-sm flex items-center"><i className="ri-arrow-right-s-line text-gold mr-2"></i>Negativa de Cirurgia</Link></li>
              <li><Link to="/reajustes-abusivos" className="text-gray-300 hover:text-gold transition-colors text-sm flex items-center"><i className="ri-arrow-right-s-line text-gold mr-2"></i>Reajuste Abusivo</Link></li>
              <li><Link to="/medicamentos-alto-custo" className="text-gray-300 hover:text-gold transition-colors text-sm flex items-center"><i className="ri-arrow-right-s-line text-gold mr-2"></i>Medicamentos Alto Custo</Link></li>
              <li><Link to="/home-care" className="text-gray-300 hover:text-gold transition-colors text-sm flex items-center"><i className="ri-arrow-right-s-line text-gold mr-2"></i>Home Care</Link></li>
              <li><Link to="/erro-medico" className="text-gray-300 hover:text-gold transition-colors text-sm flex items-center"><i className="ri-arrow-right-s-line text-gold mr-2"></i>Erro Médico</Link></li>
            </ul>
          </div>

          {/* Col 3: Bairros SP */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-gold">Atendimento SP</h4>
            <ul className="space-y-3">
              {zonas.map(zona => (
                <li key={zona}>
                  <Link to={`/advogado-plano-de-saude-sao-paulo`} className="text-gray-300 hover:text-gold transition-colors text-sm flex items-center border-b border-white/5 pb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3"></span>
                    Advogado Zona {zona}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/advogado-plano-de-saude-sao-paulo" className="text-gold text-xs font-bold uppercase tracking-widest hover:text-gold-dk transition-colors">
                  Ver todos os bairros <i className="ri-arrow-right-line ml-1"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-gold">Fale Conosco</h4>
            <ul className="space-y-6">
              <li>
                <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-green-900/40 border border-green-500/30 text-green-400 flex items-center justify-center mr-4 group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0">
                    <i className="ri-whatsapp-fill text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">WhatsApp Plantão</p>
                    <p className="text-white font-medium">(41) 99958-0015</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:4130130001" className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gold flex items-center justify-center mr-4 shrink-0">
                    <i className="ri-phone-fill text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Telefone Principal</p>
                    <p className="text-gray-300 text-sm">(41) 3013-0001</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:contato@cicarelli.adv.br" className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gold flex items-center justify-center mr-4 shrink-0">
                    <i className="ri-mail-fill text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">E-mail Comercial</p>
                    <p className="text-gray-300 text-sm break-all">contato@cicarelli.adv.br</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <span>© {new Date().getFullYear()} Cicarelli Advogados SP. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center">
            <p className="text-white/35 text-xs flex items-center gap-1">
              Desenvolvido com <i className="ri-heart-fill text-red-500 animate-pulse" style={{fontSize: '11px'}}></i> por
              <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition ml-1 inline-flex items-center gap-1">
                Suprema Sites Express
                <img src="https://img.supremamidia.com/suprema-img.png" alt="Suprema" className="h-3.5 inline" />
              </a>
            </p>
          </div>

          <div className="flex space-x-6">
            <Link to="/mapa-do-site" className="hover:text-gold transition-colors">Mapa do Site</Link>
            <Link to="/" className="hover:text-gold transition-colors">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
