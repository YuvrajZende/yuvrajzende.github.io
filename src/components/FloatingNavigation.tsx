import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(true)
  const { resolvedTheme, setTheme } = useTheme()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Connect", href: "/connect" },
  ]

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0.7, y: 0 }}
      className="fixed bottom-4 left-1/3 transform -translate-x-1/3 z-50 w-auto"
    >
      <nav className="bg-background/80 backdrop-blur-md border border-border rounded-full px-4 sm:px-8 py-3 sm:py-4 pr-4 shadow-lg">
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.href}
                className="text-xs sm:text-sm lg:text-base font-medium text-foreground/80 hover:text-foreground transition-colors relative inline-block px-1 sm:px-2 py-1"
              >
                <span className="hidden sm:inline">{item.name}</span>
                <span className="sm:hidden">
                  {item.name === "Home" && "🏠"}
                  {item.name === "About" && "👤"}
                  {item.name === "Projects" && "💼"}
                  {item.name === "Connect" && "📞"}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          ))}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 sm:p-2 rounded-full hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
            ) : (
              <Moon className="w-3 h-3 sm:w-4 sm:h-4" />
            )}
          </motion.button>
        </div>
      </nav>
    </motion.div>
  )
}

export default FloatingNavigation