import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const MediaGrid = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const editorialContent = [
    {
      id: 1,
      title: 'iPhone',
      subtitle: 'Built for Apple Intelligence',
      description:
        'Experience personal intelligence that understands you. The iPhone 15 Pro brings you closer to what matters most.',
      color: '#1d1d1f',
      bgColor: '#f5f5f7',
      cta: 'Learn more',
      link: '#iphone',
      image: (
        <svg
          viewBox="0 0 200 300"
          className="w-32 h-48 md:w-40 md:h-60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="40"
            y="20"
            width="120"
            height="260"
            rx="20"
            fill="#1d1d1f"
            stroke="#2d2d2f"
            strokeWidth="3"
          />
          <rect
            x="50"
            y="35"
            width="100"
            height="180"
            rx="4"
            fill="url(#iphoneGradient)"
          />
          <circle cx="100" cy="240" r="12" fill="#2d2d2f" />
          <rect x="85" y="27" width="30" height="6" rx="3" fill="#2d2d2f" />
          <defs>
            <linearGradient
              id="iphoneGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'iPad Air',
      subtitle: 'Fresh Air',
      description:
        'With the M2 chip, iPad Air is a creative powerhouse. Perfect for note-taking, sketching ideas, and bringing projects to life.',
      color: '#1d1d1f',
      bgColor: '#f5f5f7',
      cta: 'Learn more',
      link: '#ipad',
      image: (
        <svg
          viewBox="0 0 280 200"
          className="w-48 h-32 md:w-56 md:h-40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="20"
            y="20"
            width="240"
            height="160"
            rx="12"
            fill="#1d1d1f"
            stroke="#2d2d2f"
            strokeWidth="3"
          />
          <rect
            x="30"
            y="30"
            width="220"
            height="140"
            rx="6"
            fill="url(#ipadGradient)"
          />
          <rect
            x="120"
            y="155"
            width="40"
            height="12"
            rx="4"
            fill="#2d2d2f"
          />
          <defs>
            <linearGradient
              id="ipadGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f093fb" />
              <stop offset="100%" stopColor="#f5576c" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Shop iPhone',
      subtitle: 'Find your perfect match',
      description:
        'From iPhone SE to iPhone 15 Pro Max, discover the device that fits your lifestyle and budget.',
      color: '#1d1d1f',
      bgColor: '#f5f5f7',
      cta: 'Shop iPhone',
      link: '#shop',
      image: (
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 60 100"
              className={`w-12 h-20 ${i === 1 ? 'w-16 h-24' : ''}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5"
                y="5"
                width="50"
                height="90"
                rx="8"
                fill="#1d1d1f"
                stroke="#2d2d2f"
                strokeWidth="2"
              />
              <rect
                x="10"
                y="12"
                width="40"
                height="65"
                rx="2"
                fill="url(#miniGradient)"
              />
              <circle cx="30" cy="82" r="5" fill="#2d2d2f" />
              <defs>
                <linearGradient
                  id="miniGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
          ))}
        </div>
      ),
    },
    {
      id: 4,
      title: 'Get your estimate',
      subtitle: 'Trade-in values available',
      description:
        'Get credit toward your new MacBook Air when you trade in an eligible device. It\'s good for you and the planet.',
      color: '#1d1d1f',
      bgColor: '#f5f5f7',
      cta: 'Get estimate',
      link: '#trade-in',
      image: (
        <svg
          viewBox="0 0 200 120"
          className="w-32 h-20 md:w-40 md:h-24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="20" y="20" width="70" height="80" rx="8" fill="#1d1d1f" />
          <rect x="25" y="25" width="60" height="50" rx="4" fill="#4a5568" />
          <rect x="110" y="40" width="70" height="60" rx="8" fill="#1d1d1f" />
          <rect x="115" y="45" width="60" height="40" rx="4" fill="#4a5568" />
          <text
            x="55"
            y="95"
            textAnchor="middle"
            fill="#0066cc"
            fontSize="12"
            fontWeight="600"
          >
            $450
          </text>
        </svg>
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl text-[#1d1d1f] font-display font-semibold text-center mb-16 md:mb-24"
          >
            Explore the lineup
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {editorialContent.map((item) => (
              <motion.a
                key={item.id}
                href={item.link}
                variants={itemVariants}
                className="group relative bg-[#f5f5f7] rounded-3xl p-8 md:p-12 overflow-hidden card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                  {/* Image */}
                  <div className="flex-shrink-0 flex justify-center img-hover">
                    {item.image}
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-sm md:text-base text-gray-500 mb-4 max-w-md">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[#0066cc] font-medium group-hover:gap-3 transition-all">
                      {item.cta}
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MediaGrid
