import { motion } from "framer-motion"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* Phone Button */}
      <div className="group relative flex items-center">
        <span className="absolute right-14 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-xs font-bold py-1 px-3 rounded shadow-sm whitespace-nowrap pointer-events-none">
          Ligar para Atendimento
        </span>
        <a 
          href="tel:4130130001" 
          className="h-12 w-12 bg-primary text-gold rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform border border-gold/30"
          aria-label="Ligar agora"
        >
          <i className="ri-phone-fill text-xl"></i>
        </a>
      </div>
      
      {/* WhatsApp Button */}
      <div className="group relative flex items-center">
        <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity bg-green-600 text-white text-xs font-bold py-1 px-3 rounded shadow-sm whitespace-nowrap pointer-events-none">
          Consulta Gratuita
        </span>
        <a 
          href="https://wa.me/5541999580015" 
          target="_blank" 
          rel="noopener noreferrer"
          className="h-14 w-14 bg-green-600 text-white rounded-full shadow-glow flex items-center justify-center hover:scale-110 transition-transform relative"
          aria-label="Falar no WhatsApp"
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
          <i className="ri-whatsapp-fill text-3xl relative z-10"></i>
        </a>
      </div>
    </div>
  )
}
