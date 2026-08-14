import { SEO } from "../components/SEO"
import { useParams, Link, Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { getPostBySlug } from "@/data/blog"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import { HeroSection } from "@/components/HeroSection"
import { AdvogadoProfile } from "@/components/AdvogadoProfile"

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  
  const post = getPostBySlug(slug || '')

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "articleSection": post.articleSection || "Direito da Saúde",
    "inLanguage": "pt-BR",
    "author": {
      "@type": "Organization",
      "name": "Cicarelli Sociedade de Advogados",
      "url": "https://www.cicarelli.adv.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cicarelli Sociedade de Advogados",
      "url": "https://www.cicarelli.adv.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.cicarelli.adv.br/android-chrome-512x512.png"
      }
    },
    "datePublished": post.datePublished || "2026-05-10T09:00:00-03:00",
    "dateModified": post.dateModified || "2026-08-14T12:00:00-03:00",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.cicarelli.adv.br/blog/${post.slug}`
    },
    "image": "https://www.cicarelli.adv.br/og-image.png"
  }

  return (
    <>
      <SEO 
        title={`${post.title} | Cicarelli Sociedade de Advogados`} 
        description={post.excerpt}
        canonical={`https://www.cicarelli.adv.br/blog/${post.slug}`}
        customSchema={articleSchema}
        ogType="article"
      />
      
      <HeroSection
        badge={post.tag}
        title={post.title}
        height="medium"
      >
        <div className="flex flex-wrap items-center text-sm text-gray-300 gap-6 mt-4 opacity-90">
          <span className="flex items-center">
            <i className="ri-calendar-line mr-2 text-gold"></i> {post.date.replace('Acesso em ', '')}
          </span>
          <span className="flex items-center">
            <i className="ri-user-line mr-2 text-gold"></i> {post.author}
          </span>
          {post.readTime && (
            <span className="flex items-center">
              <i className="ri-time-line mr-2 text-gold"></i> {post.readTime}
            </span>
          )}
        </div>
      </HeroSection>

      <div className="py-24 bg-gray-lt min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-[0.03] pointer-events-none z-0" />
        <div className="container mx-auto px-4 max-w-4xl min-h-screen relative z-10">
          
          <Link to="/blog" className="text-gold hover:text-gold-dk font-medium mb-8 inline-flex items-center uppercase tracking-widest text-xs">
            <i className="ri-arrow-left-line mr-2 text-lg"></i> Voltar para o Blog
          </Link>
          
          <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
            
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gold/10">
              <div className="prose prose-lg max-w-none text-gray-800 prose-headings:font-serif prose-headings:text-primary prose-a:text-gold hover:prose-a:text-gold-dk prose-strong:text-primary marker:text-gold prose-details:border prose-details:border-gold/20 prose-details:rounded-xl prose-details:p-4 prose-details:my-4 prose-details:bg-gray-50/50 prose-summary:font-serif prose-summary:font-bold prose-summary:text-primary prose-summary:cursor-pointer prose-summary:text-lg hover:prose-summary:text-gold transition-colors">
                <Markdown rehypePlugins={[rehypeRaw]}>{post.content}</Markdown>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gold/20 flex flex-col items-center bg-navy-light/5 p-8 rounded-2xl">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 text-center">Precisa de suporte jurídico especializado?</h3>
                <p className="text-gray-600 mb-6 text-center max-w-xl">Nossa equipe atua em Curitiba, Região Metropolitana, todo o Paraná e território nacional. Tire suas dúvidas com um especialista.</p>
                <a href="https://wa.me/5541999580015" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-green-600/30 transition-all flex items-center">
                  <i className="ri-whatsapp-fill text-2xl mr-2"></i> Falar com Especialista
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AdvogadoProfile 
        imageIndex={2} 
        title="Cicarelli Sociedade de Advogados" 
        altText="Cicarelli Sociedade de Advogados - Especialistas em Direito da Saúde e Defesa Médica" 
      />
    </>
  )
}
