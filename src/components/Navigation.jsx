import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Apple, Search, ShoppingBag, Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Store', href: '#' },
  { name: 'Mac', href: '#mac' },
  { name: 'iPad', href: '#ipad' },
  { name: 'iPhone', href: '#iphone' },
  { name: 'Watch', href: '#watch' },
  { name: 'Vision', href: '#vision' },
  { name: 'AirPods', href: '#airpods' },
]

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const linkVariants = {
    closed: {
      x: 20,
      opacity: 0,
    },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  }

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-md'
            : 'bg-[#f5f5f7]'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-12">
            {/* Apple Logo */}
            <motion.a
              href="#"
              className="text-apple-text-primary hover:text-apple-bg-blue transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Apple size={20} strokeWidth={1.5} />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ y: -1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <motion.button
                className="hidden md:block text-apple-text-primary hover:text-apple-bg-blue transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search size={18} strokeWidth={1.5} />
              </motion.button>
              <motion.button
                className="hidden md:block text-apple-text-primary hover:text-apple-bg-blue transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden text-apple-text-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        className="fixed inset-0 z-40 lg:hidden bg-[#f5f5f7] pt-20"
      >
        <div className="container">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                custom={index}
                variants={linkVariants}
                className="text-2xl font-semibold text-apple-text-primary py-3 border-b border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Navigation
