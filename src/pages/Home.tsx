import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Custom Carpentry",
    desc: "Bespoke furniture crafted with premium wood and precision finishing.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Modular Kitchen",
    desc: "Modern, ergonomic kitchen designs that blend functionality with style.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Interior Design",
    desc: "Complete home and office transformations tailored to your vision.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
  }
];

const projects = [
  {
    title: "Luxury Villa, Noida",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Modern Office Hub",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Bespoke Penthouse",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white pt-[140px] pb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-gold font-bold tracking-[0.3em] uppercase text-sm mb-6"
          >
            Interior & Model Kitchen by Shahnawaz
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight"
          >
            Transforming Spaces with <br />
            <span className="text-gradient-gold">Precision & Artistry</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-12 font-light"
          >
            Premium interior design and bespoke carpentry for high-end residential and commercial projects in Noida and beyond.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            <Link to="/portfolio" className="bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all shadow-xl shadow-gold/20 flex items-center gap-2 group">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all">
              Get a Quote
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Years Experience', value: '15+' },
            { label: 'Projects Done', value: '250+' },
            { label: 'Happy Clients', value: '180+' },
            { label: 'Cities Served', value: '10+' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-2">{stat.value}</h3>
              <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900">Our Premium Services</h2>
            </div>
            <Link to="/services" className="text-stone-900 font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:text-gold transition-colors">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group bg-white p-4 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="overflow-hidden mb-6 aspect-square">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900">Featured Masterpieces</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden aspect-[4/5]"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2">{project.category}</span>
                  <h4 className="text-white font-display font-bold text-2xl mb-4">{project.title}</h4>
                  <Link to="/portfolio" className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5">
          <Quote size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Rajesh Khanna",
                role: "Homeowner, Noida",
                text: "Shahnawaz and his team transformed our 4BHK into a luxury haven. The attention to detail in the modular kitchen and custom wardrobes is unmatched."
              },
              {
                name: "Anjali Sharma",
                role: "Interior Architect",
                text: "As an architect, I'm very picky about finishing. Shahnawaz's carpentry work is world-class. He understands complex designs and executes them perfectly."
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-stone-800/50 p-10 border border-stone-700 rounded-sm"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}
                </div>
                <p className="text-stone-300 italic text-lg mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-white">{t.name}</h5>
                    <p className="text-stone-500 text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gold">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-stone-900 mb-8">Ready to Build Your Dream Space?</h2>
          <p className="text-stone-800 text-lg mb-12 max-w-2xl mx-auto font-medium">
            Let's collaborate to bring your vision to life with premium materials and expert craftsmanship.
          </p>
          <Link to="/contact" className="bg-stone-900 hover:bg-black text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest transition-all shadow-2xl flex items-center gap-2 mx-auto w-fit">
            Get Started Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
