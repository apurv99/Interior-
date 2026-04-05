import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-stone-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-stone-900 mb-6">Shahnawaz Chaudhary</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A master craftsman and visionary interior designer dedicated to creating spaces that inspire and endure.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1581578731522-745d05ad9a2d?auto=format&fit=crop&q=80&w=800" 
                alt="Shahnawaz Chaudhary at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-gold p-10 text-white hidden lg:block">
              <h3 className="text-5xl font-display font-bold mb-1">15+</h3>
              <p className="uppercase tracking-widest text-xs font-bold">Years of Mastery</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-stone-900 mb-8 leading-tight">
              Crafting Luxury with a <br />
              <span className="text-gold">Personal Touch</span>
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                With over 15 years of experience in high-end residential and commercial projects, Shahnawaz Chaudhary has established himself as a premier name in the Noida interior design landscape.
              </p>
              <p>
                His journey started with a passion for wood and a keen eye for detail. Today, he leads a team of skilled artisans who share his commitment to quality and innovation. From bespoke furniture pieces to full-scale home renovations, every project is a testament to his craftsmanship.
              </p>
              <p>
                We believe that a home should reflect the personality of its inhabitants. That's why we work closely with our clients, ensuring every detail—from the choice of wood to the final polish—is perfect.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-900">Custom Design</h4>
                  <p className="text-xs text-stone-500">Tailored to your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-gold shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-900">Premium Materials</h4>
                  <p className="text-xs text-stone-500">Only the best quality</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Award className="text-gold w-12 h-12 mb-6" />,
              title: "Quality First",
              desc: "We never compromise on materials or finishing. Our reputation is built on the longevity of our work."
            },
            {
              icon: <Users className="text-gold w-12 h-12 mb-6" />,
              title: "Client Focused",
              desc: "Your vision is our blueprint. We listen, suggest, and execute to exceed your expectations."
            },
            {
              icon: <Clock className="text-gold w-12 h-12 mb-6" />,
              title: "Timely Delivery",
              desc: "We respect your time. Our projects are managed efficiently to ensure on-schedule completion."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center md:text-left"
            >
              {item.icon}
              <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
              <p className="text-stone-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
