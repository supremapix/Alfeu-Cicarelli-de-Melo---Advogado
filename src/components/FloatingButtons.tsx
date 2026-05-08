import { Phone, MessageCircle } from "lucide-react"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* Phone Button */}
      <a 
        href="tel:+5511999999999" 
        className="h-12 w-12 bg-white text-primary border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:scale-105 transition-all duration-300"
        aria-label="Ligar agora"
      >
        <Phone className="h-5 w-5" />
      </a>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999?text=Olá, gostaria de uma consulta inicial sobre direito à saúde." 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center justify-center h-14 w-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        {/* Heartbeat rings */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <MessageCircle className="h-7 w-7 relative z-10" />
      </a>
    </div>
  )
}
