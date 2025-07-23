
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="footer-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 5 L35 20 L20 35 L5 20 Z" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="block group">
              <img 
                src="https://static.readdy.ai/image/b6f35bc4d46748b9c45dd8515a4882aa/8b714b78b1cfbd8f2b750c2e9e193ffb.png" 
                alt="Nifty Solutions Logo" 
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed font-light max-w-sm">
              Premium digital solutions and strategic consulting for businesses that demand excellence.
            </p>
            <div className="flex space-x-4">
              {['linkedin', 'twitter', 'github', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-red-500 transition-all duration-300 group"
                  style={{ '--hover-bg': '#ff5757' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff5757';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <i className={`ri-${social}-fill text-lg group-hover:scale-110 transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">Services</h3>
            <div className="space-y-3">
              {['Web Development', 'Mobile Apps', 'AI Solutions', 'E-commerce', 'Design Services'].map((service) => (
                <Link
                  key={service}
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors font-light hover:translate-x-1 transform duration-200"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">Company</h3>
            <div className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Portfolio', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors font-light hover:translate-x-1 transform duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line" style={{ color: '#ff5757' }}></i>
                <span className="text-gray-300 font-light">hello@nifty-digital.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line" style={{ color: '#ff5757' }}></i>
                <span className="text-gray-300 font-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-global-line" style={{ color: '#ff5757' }}></i>
                <span className="text-gray-300 font-light">www.nifty-digital.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm font-light">
              2024 Nifty Solutions. All rights reserved. Premium quality guaranteed.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
                <Link
                  key={policy}
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors font-light relative group"
                >
                  {policy}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-500 transition-all group-hover:w-full" style={{ backgroundColor: '#ff5757' }}></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 w-32 h-32 bg-red-500 rounded-full animate-pulse opacity-10" style={{ backgroundColor: '#ff5757' }}></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-500 rounded-full animate-bounce opacity-10" style={{ backgroundColor: '#ffbd59' }}></div>
    </footer>
  );
}
