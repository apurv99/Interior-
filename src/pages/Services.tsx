import React from 'react';
import { motion } from 'motion/react';
import { Sofa, Layout, Home, Briefcase, Paintbrush, Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Sofa className="w-10 h-10" />,
    title: "Custom Furniture",
    desc: "Handcrafted sofas, dining tables, and beds designed to fit your space perfectly. We use premium teak and hardwood for durability.",
    features: ["Bespoke Designs", "Premium Wood", "Expert Finishing"]
  },
  {
    icon: <Layout className="w-10 h-10" />,
    title: "Modular Kitchen",
    desc: "Smart, space-saving kitchen solutions with high-quality hardware and waterproof materials. Designed for the modern Indian home.",
    features: ["Soft-close Hardware", "Waterproof Ply", "Ergonomic Layouts"]
  },
  {
    icon: <Home className="w-10 h-10" />,
    title: "Home Interior",
    desc: "End-to-end residential interior services including false ceilings, lighting, wall treatments, and flooring.",
    features: ["3D Visualizations", "Turnkey Projects", "Thematic Designs"]
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Office Interior",
    desc: "Professional and productive workspaces designed to reflect your brand identity and enhance employee comfort.",
    features: ["Acoustic Solutions", "Ergonomic Desks", "Reception Design"]
  },
  {
    icon: <Paintbrush className="w-10 h-10" />,
    title: "Renovation Work",
    desc: "Breathe new life into your old spaces. We handle everything from structural changes to aesthetic upgrades.",
    features: ["Structural Repairs", "Modern Upgrades", "Cost-effective"]
  },
  {
    icon: <Hammer className="w-10 h-10" />,
    title: "Carpentry Services",
    desc: "Expert general carpentry for doors, windows, wardrobes, and repair work with a focus on precision.",
    features: ["Door Installation", "Wardrobe Design", "General Repairs"]
  }
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-stone-950 py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1920" alt="Service Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Comprehensive Design Solutions</h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From a single piece of furniture to a complete building interior, we bring the same level of passion and precision to every project.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-sm border border-stone-100 hover:border-gold transition-all duration-500 group hover:shadow-2xl hover:shadow-gold/5"
            >
              <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3 mb-10">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-stone-500 font-medium">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 text-stone-900 font-bold uppercase tracking-widest text-xs group-hover:text-gold transition-colors">
                Get a Quote <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">How We Work</span>
            <h2 className="text-4xl font-display font-bold text-stone-900">Our Simple 4-Step Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision, requirements, and budget." },
              { step: "02", title: "Design & Plan", desc: "We create detailed 3D designs and material lists." },
              { step: "03", title: "Crafting", desc: "Our skilled artisans build your furniture with precision." },
              { step: "04", title: "Installation", desc: "We install everything and ensure a perfect finish." }
            ].map((p, i) => (
              <div key={i} className="relative">
                <span className="text-6xl font-display font-bold text-stone-100 absolute -top-8 -left-4 z-0">{p.step}</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-stone-900 mb-3">{p.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
