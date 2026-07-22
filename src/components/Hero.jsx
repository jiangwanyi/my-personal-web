import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.5,
      },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.8,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#f5f5f7] pt-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container text-center"
      >
        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-[#1d1d1f] font-display font-semibold mb-4"
        >
          MacBook Air
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-[#1d1d1f] font-display text-3xl md:text-5xl lg:text-6xl mb-8"
        >
          College, sorted.
        </motion.h2>

        {/* Product Visual - Two MacBook Airs forming arrow */}
        <motion.div
          variants={imageVariants}
          className="relative w-full max-w-4xl mx-auto my-12 md:my-16"
        >
          <svg
            viewBox="0 0 800 400"
            className="w-full h-auto drop-shadow-2xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left MacBook Air - Sky Blue */}
            <g transform="rotate(-15 200 200)">
              {/* Base */}
              <rect
                x="50"
                y="280"
                width="300"
                height="20"
                rx="3"
                fill="#c4d9f0"
                stroke="#a0bcd4"
                strokeWidth="2"
              />
              {/* Screen Bezel */}
              <rect
                x="60"
                y="80"
                width="280"
                height="200"
                rx="12"
                fill="#1d1d1f"
              />
              {/* Screen Display */}
              <rect
                x="70"
                y="90"
                width="260"
                height="180"
                rx="8"
                fill="url(#screenGradient1)"
              />
              {/* Camera */}
              <circle cx="200" cy="100" r="3" fill="#2d2d2f" />
              {/* Trackpad */}
              <rect
                x="170"
                y="285"
                width="60"
                height="12"
                rx="2"
                fill="#d0e6f8"
              />
            </g>

            {/* Right MacBook Air - Sky Blue */}
            <g transform="rotate(15 600 200)">
              {/* Base */}
              <rect
                x="450"
                y="280"
                width="300"
                height="20"
                rx="3"
                fill="#c4d9f0"
                stroke="#a0bcd4"
                strokeWidth="2"
              />
              {/* Screen Bezel */}
              <rect
                x="460"
                y="80"
                width="280"
                height="200"
                rx="12"
                fill="#1d1d1f"
              />
              {/* Screen Display */}
              <rect
                x="470"
                y="90"
                width="260"
                height="180"
                rx="8"
                fill="url(#screenGradient2)"
              />
              {/* Camera */}
              <circle cx="600" cy="100" r="3" fill="#2d2d2f" />
              {/* Trackpad */}
              <rect
                x="570"
                y="285"
                width="60"
                height="12"
                rx="2"
                fill="#d0e6f8"
              />
            </g>

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="screenGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#764ba2" />
              </linearGradient>
              <linearGradient id="screenGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f093fb" />
                <stop offset="100%" stopColor="#f5576c" />
              </linearGradient>
            </defs>

            {/* Arrow indicator between laptops */}
            <motion.g
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <path
                d="M 400 200 L 420 200"
                stroke="#0071e3"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 415 195 L 420 200 L 415 205"
                stroke="#0071e3"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>
          </svg>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={ctaVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <motion.a
            href="#learn-more"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
          </motion.a>
          <motion.a
            href="#buy"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy
          </motion.a>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          variants={ctaVariants}
          className="mt-8 text-sm text-gray-600"
        >
          From $999 or $41.62/mo. for 24 mo.*
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5 },
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowRight className="w-6 h-6 text-[#1d1d1f] rotate-90" />
      </motion.div>
    </section>
  )
}

export default Hero
