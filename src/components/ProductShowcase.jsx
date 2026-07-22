import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Cpu, HardDrive, Zap, Battery, Monitor, Wifi } from 'lucide-react'

const ProductShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: <Cpu size={32} />,
      title: 'M3 Chip',
      description: 'Blazing-fast performance with incredible efficiency',
    },
    {
      icon: <Zap size={32} />,
      title: 'All-Day Battery',
      description: 'Up to 18 hours of battery life',
    },
    {
      icon: <Monitor size={32} />,
      title: 'Liquid Retina Display',
      description: '13.6" or 15.3" of stunning clarity',
    },
    {
      icon: <HardDrive size={32} />,
      title: 'Up to 2TB Storage',
      description: ' plenty of space for your projects',
    },
    {
      icon: <Wifi size={32} />,
      title: 'Wi-Fi 6E',
      description: 'Ultra-fast wireless connectivity',
    },
    {
      icon: <Battery size={32} />,
      title: 'MagSafe Charging',
      description: 'Easy, fast, and safe magnetic charging',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#f5f5f7]">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl text-[#1d1d1f] font-display font-semibold text-center mb-4"
          >
            Features that help you succeed
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 md:mb-24"
          >
            MacBook Air is designed to help you power through your college
            experience and beyond.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 card-hover"
              >
                <div className="text-[#0071e3] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductShowcase
