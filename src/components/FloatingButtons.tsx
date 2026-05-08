import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-end space-y-4 mb-4"
          >
            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="bg-white px-3 py-1 text-sm font-medium rounded-md shadow-md">E-mail</span>
              <a 
                href="mailto:contato@cicarelli.adv.br" 
                className="h-12 w-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Enviar E-mail"
                title="E-mail"
              >
                <i className="ri-mail-send-line text-xl"></i>
              </a>
            </div>
            
            {/* WhatsApp */}
            <div className="flex items-center gap-3">
              <span className="bg-white px-3 py-1 text-sm font-medium rounded-md shadow-md">WhatsApp</span>
              <a 
                href="https://wa.me/5541999580015" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-12 w-12 bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform relative"
                aria-label="Falar no WhatsApp"
                title="WhatsApp"
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <i className="ri-whatsapp-line text-2xl relative z-10"></i>
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="bg-white px-3 py-1 text-sm font-medium rounded-md shadow-md">Ligar</span>
              <a 
                href="tel:4130130001" 
                className="h-12 w-12 bg-[#ee7c23] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Ligar agora"
                title="Telefone"
              >
                <i className="ri-phone-line text-xl"></i>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Opções de contato"
        className="relative flex items-center justify-center h-16 w-16 bg-accent text-white rounded-full shadow-glow z-10 transition-transform hover:scale-105 animate-pulse-glow"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 font-bold text-[10px] items-center justify-center text-white">!</span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isOpen ? <i className="ri-close-line text-3xl"></i> : <i className="ri-chat-3-line text-3xl text-primary"></i>}
        </motion.div>
      </button>
    </div>
  )
}
