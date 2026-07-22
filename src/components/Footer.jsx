import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Apple,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const footerSections = [
    {
      title: 'Shop and Learn',
      links: [
        'Store',
        'Mac',
        'iPad',
        'iPhone',
        'Watch',
        'Vision',
        'AirPods',
        'TV & Home',
      ],
    },
    {
      title: 'Services',
      links: [
        'Apple Music',
        'Apple TV+',
        'Apple Fitness+',
        'Apple News+',
        'Apple Arcade',
        'iCloud',
        'Apple One',
        'Apple Card',
      ],
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
    },
    {
      title: 'Apple Store',
      links: [
        'Find a Store',
        'Genius Bar',
        'Today at Apple',
        'Apple Camp',
        'Apple Store App',
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Linkedin, href: '#' },
  ]

  const legalLinks = [
    'Privacy Policy',
    'Terms of Use',
    'Sales and Refunds',
    'Legal',
    'Site Map',
  ]

  return (
    <footer ref={ref} className="bg-[#f5f5f7] py-16 border-t border-gray-200">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Footnote */}
          <p className="text-xs text-gray-500 mb-8 pb-6 border-b border-gray-300">
            * Pricing applies to purchase of a new MacBook Air with qualifying
            new line. Requires activation on carrier network at time of
            purchase. Available to qualified customers and requires 24-month
            installment loan. Fees, taxes, and price of financed device may
            apply.
          </p>

          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Apple Logo */}
            <div className="col-span-2 md:col-span-1">
              <Apple className="w-6 h-6 text-[#1d1d1f] mb-4" />
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h4 className="text-xs font-semibold text-[#1d1d1f] mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs text-gray-600 hover:text-[#0066cc] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-gray-300">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-gray-600 hover:text-[#0066cc] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500">
              Copyright © 2024 Apple Inc. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
