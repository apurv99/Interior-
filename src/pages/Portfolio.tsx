import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Maximize2 } from 'lucide-react';

const categories = ["All", "Residential", "Commercial", "Kitchen", "Furniture"];

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    desc: "A complete home interior project in Noida featuring custom woodwork."
  },
  {
    id: 2,
    title: "Tech Hub Office",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    desc: "Ergonomic and stylish office design for a growing startup."
  },
  {
    id: 3,
    title: "Luxury Modular Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    desc: "High-gloss finish with smart storage solutions."
  },
  {
    id: 4,
    title: "Bespoke Teak Wardrobe",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
    desc: "Handcrafted wardrobe with intricate detailing."
  },
  {
    id: 5,
    title: "Contemporary Living Room",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    desc: "Warm tones and custom TV unit design."
  },
  {
    id: 6,
    title: "Executive Conference Room",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800",
    desc: "Professional setting with acoustic wall panels."
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Work</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-stone-900 mb-8">Portfolio of Excellence</h1>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? "bg-gold text-white shadow-lg shadow-gold/20" 
                    : "bg-white text-stone-500 hover:bg-stone-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden aspect-[4/5] bg-stone-100 rounded-sm"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-stone-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2">{project.category}</span>
                    <h3 className="text-white font-display font-bold text-2xl mb-2">{project.title}</h3>
                    <p className="text-stone-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
                    <button className="w-12 h-12 bg-gold text-white flex items-center justify-center rounded-full hover:scale-110 transition-transform">
                      <Maximize2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Before/After Teaser */}
      <section className="py-24 px-6 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Transformation</span>
            <h2 className="text-4xl font-display font-bold mb-6">The Power of Professional Design</h2>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Witness how we turn empty or outdated spaces into functional masterpieces. Our before and after gallery showcases the true impact of quality craftsmanship.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm font-medium">100% Custom Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm font-medium">Premium Material Selection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm font-medium">Expert Project Management</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-sm group">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" alt="Transformation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white text-stone-900 px-6 py-2 font-bold uppercase tracking-widest text-xs">View Before/After</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
