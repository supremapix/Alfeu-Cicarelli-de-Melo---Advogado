import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { blogPosts } from "@/data/blog"
import { HeroSection } from "@/components/HeroSection"
import { AdvogadoProfile } from "@/components/AdvogadoProfile"

export default function Blog() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <>
      <SEO title="Blog Jurídico | Cicarelli Advogados" description="Artigos e novidades sobre Direito à Saúde em São Paulo. Leia sobre liminares contra planos de saúde, negativas, reajustes e SUS." />
      
      <HeroSection
        badge="Informação Especializada"
        title="Blog da Saúde SP"
        subtitle="Entenda de forma clara quais são os seus direitos perante o seu convênio de saúde, em dezenas de artigos elaborados pelos nossos advogados especialistas no direito local do TJSP."
        height="small"
      />

      <div className="py-24 bg-gray-lt min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-[0.03] pointer-events-none z-0" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gold/10 hover:shadow-elegant hover:border-gold/30 transition-all flex flex-col"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                    <span className="text-gold">{post.tag}</span>
                    <span>{post.date.replace('Acesso em ', '')}</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-primary mb-4 leading-tight">
                    <Link to={`/blog/${post.slug}`} className="hover:text-gold transition-colors">{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                  
                  <Link to={`/blog/${post.slug}`} className="text-primary font-bold hover:text-gold transition-colors inline-flex items-center text-sm uppercase tracking-widest group">
                    Ler Artigo Completo <i className="ri-arrow-right-line ml-2 transform group-hover:translate-x-1 transition-transform text-gold text-lg"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <AdvogadoProfile 
        imageIndex={4} 
        title="Autoridade no Direito Médico e da Saúde" 
        altText="Dr. Alfeu Cicarelli escrevendo artigos jurídicos sobre planos de saúde" 
      />
    </>
  )
}
