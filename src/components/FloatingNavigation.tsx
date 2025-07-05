import { useState } from 'react'
import { motion } from 'framer-motion'
import FluidGlass from './FluidGlass'

const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(true)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Shelf", href: "/shelf" },
    { name: "Guestbook", href: "/guestbook" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0.7, y: 0 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="relative">
        {/* 3D Glass Background */}
        <div className="absolute inset-0 w-96 h-16 rounded-full overflow-hidden">
          <FluidGlass 
            mode="lens"
            lensProps={{
              scale: 0.25,
              ior: 1.15,
              thickness: 5,
              chromaticAberration: 0.1,
              anisotropy: 0.01  
            }}
          />
        </div>
        
        {/* Navigation Content */}
        <nav className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>
        </nav>
      </div>
    </motion.div>
  )
}

export default FloatingNavigation