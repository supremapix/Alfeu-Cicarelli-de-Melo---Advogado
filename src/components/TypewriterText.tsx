import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [texts])

  return (
    <div className="h-10 text-xl md:text-2xl font-medium text-accent mt-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
