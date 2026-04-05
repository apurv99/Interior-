import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-sm">
              <Hammer className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">
              SK INTERIOR
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Interior & Model Kitchen by Shahnawaz. Crafting luxury interiors and bespoke furniture with precision and passion.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6">Services</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>Custom Carpentry</li>
            <li>Modular Kitchens</li>
            <li>Residential Interiors</li>
            <li>Commercial Spaces</li>
            <li>Furniture Restoration</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6">Contact Info</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>Sector 62, Noida, Uttar Pradesh, India</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>contact@shahnawazinteriors.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-stone-800 mt-16 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} Sk interior. All rights reserved.</p>
        <p>Interior & Model Kitchen by Shahnawaz.</p>
      </div>
    </footer>
  );
}
