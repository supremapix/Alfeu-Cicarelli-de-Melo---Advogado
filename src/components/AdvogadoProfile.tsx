import { motion } from "framer-motion"
import { Link } from "react-router-dom"

interface AdvogadoProfileProps {
  imageIndex?: 1 | 2 | 3 | 4;
  altText: string;
  title: string;
  description?: string;
}

const images = {
  1: "https://liminares.cicarelli.adv.br/imagens/liminar-planos-de-saude-sp-centro-brasil-sao-paulo-sp.png",
  2: "https://liminares.cicarelli.adv.br/imagens/liminar-planos-de-saude-sp-centro-brasil.png",
  3: "https://liminares.cicarelli.adv.br/imagens/liminar-planos-de-saude-sp-centro.png",
  4: "https://liminares.cicarelli.adv.br/imagens/liminar-planos-de-saude-sp.png",
}

export function AdvogadoProfile({ imageIndex = 1, altText, title, description }: AdvogadoProfileProps) {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-5/12 relative"
          >
            <div className="absolute inset-0 bg-gold/15 transform translate-x-4 translate-y-4 rounded-3xl z-0"></div>
            <img 
              src={images[imageIndex]} 
              alt={altText} 
              title={title}
              className="relative z-10 w-full h-auto rounded-3xl shadow-xl object-cover object-center aspect-[4/5]"
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-7/12"
          >
            <span className="text-gold uppercase tracking-widest font-semibold text-sm mb-4 block">Dr. Alfeu Cicarelli</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">{title}</h2>
            <div className="w-16 h-0.5 bg-gold mb-6" />
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {description || "Especialista na defesa do direito à saúde, atua na linha de frente combatendo as abusividades dos planos de saúde e garantindo, através de medidas judiciais céleres, que a vida e o bem-estar do paciente sejam colocados em primeiro lugar."}
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Com mais de 20 anos de experiência e milhares de casos acompanhados perante o Tribunal de Justiça, nossa atuação se destaca pelo comprometimento integral com o cidadão vulnerável perante as grandes operadoras e seguradoras.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/profissionais" className="inline-flex flex-col">
                <span className="font-bold text-primary text-xl">Dr. Alfeu Cicarelli</span>
                <span className="text-sm font-medium text-gray-500 mt-1">OAB/SP 430.760 | OAB/PR 56.401</span>
              </Link>
              <div className="h-10 w-px bg-gray-200"></div>
              <Link to="/profissionais" className="text-gold font-bold uppercase tracking-wider text-sm hover:text-gold-dk transition-colors flex items-center group">
                Conheça a equipe <i className="ri-arrow-right-line ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
