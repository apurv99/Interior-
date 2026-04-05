import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-stone-900 mb-6">Let's Build Your Dream Space</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind? We'd love to hear from you. Fill out the form below or reach out directly.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-8">Contact Details</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 flex items-center justify-center rounded-sm shrink-0 text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-1">Call Us</p>
                    <p className="text-lg font-bold text-stone-900">+91 98765 43210</p>
                    <p className="text-sm text-stone-500">Mon - Sat, 9am - 7pm</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 flex items-center justify-center rounded-sm shrink-0 text-gold">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-1">Email Us</p>
                    <p className="text-lg font-bold text-stone-900">contact@shahnawaz.com</p>
                    <p className="text-sm text-stone-500">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-stone-100 flex items-center justify-center rounded-sm shrink-0 text-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-1">Visit Us</p>
                    <p className="text-lg font-bold text-stone-900">Sector 62, Noida</p>
                    <p className="text-sm text-stone-500">Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-900 p-8 text-white rounded-sm">
              <h4 className="text-xl font-display font-bold mb-4">Quick WhatsApp</h4>
              <p className="text-stone-400 text-sm mb-6">Need a quick estimate? Send us a message on WhatsApp for instant support.</p>
              <a href="https://wa.me/919876543210" className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gold-dark transition-colors">
                <MessageSquare size={16} /> Chat Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-stone-50 p-10 md:p-16 rounded-sm border border-stone-100">
              <h3 className="text-3xl font-display font-bold text-stone-900 mb-8">Send a Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-stone-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border border-stone-200 px-6 py-4 rounded-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-stone-500">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full bg-white border border-stone-200 px-6 py-4 rounded-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-stone-500">Service Interested In</label>
                  <select className="w-full bg-white border border-stone-200 px-6 py-4 rounded-sm focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option>Select a Service</option>
                    <option>Custom Furniture</option>
                    <option>Modular Kitchen</option>
                    <option>Home Interior</option>
                    <option>Office Interior</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-stone-500">Your Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-stone-200 px-6 py-4 rounded-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-stone-900 hover:bg-black text-white py-5 rounded-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 group">
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-stone-200 relative overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-50">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920" alt="Map Placeholder" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass-effect p-8 text-center max-w-sm">
            <MapPin className="text-gold mx-auto mb-4" size={40} />
            <h4 className="font-display font-bold text-xl mb-2">Our Workshop</h4>
            <p className="text-stone-600 text-sm">Visit us at Sector 62, Noida for a personal consultation and material selection.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
