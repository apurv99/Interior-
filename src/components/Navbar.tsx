import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        scrolled ? 'glass-effect py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-stone-900 flex items-center justify-center rounded-sm group-hover:bg-gold transition-colors duration-300">
            <Hammer className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-display font-bold text-xl tracking-tight leading-none",
              !scrolled && location.pathname === '/' ? "text-white" : "text-stone-900"
            )}>
              SK INTERIOR
            </span>
            <span className={cn(
              "text-[10px] uppercase tracking-[0.2em] font-medium",
              !scrolled && location.pathname === '/' ? "text-stone-300" : "text-stone-500"
            )}>
              Interior & Model Kitchen by Shahnawaz
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold',
                location.pathname === link.path 
                  ? 'text-gold' 
                  : (!scrolled && location.pathname === '/' ? 'text-white' : 'text-stone-600')
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-gold/20"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={cn(scrolled || location.pathname !== '/' ? "text-stone-900" : "text-white")} />
          ) : (
            <Menu className={cn(scrolled || location.pathname !== '/' ? "text-stone-900" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-stone-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-display font-medium py-2 border-b border-stone-50',
                  location.pathname === link.path ? 'text-gold' : 'text-stone-800'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-stone-900 text-white text-center py-4 rounded-sm font-bold uppercase tracking-widest mt-4"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
