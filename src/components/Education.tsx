import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 bg-[#EAEAEA] relative">
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 tracking-tight">
            Education
          </h2>
          <div className="w-24 h-1.5 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-white p-10 md:p-12 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(29,58,77,0.15)] border border-transparent hover:border-accent/10 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#F5E2DE] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <GraduationCap className="text-accent" size={32} />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-sm font-semibold text-primary/70 mb-4">
                <Calendar size={14} className="text-accent" />
                2022 — 2026
              </div>

              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">
                Bachelor of Software Engineering
              </h3>

              <div className="flex items-center justify-center gap-2 text-primary/80 font-medium mb-6">
                <MapPin size={16} className="text-accent/70" />
                University of Gujrat
              </div>

              <p className="text-primary/70 leading-relaxed text-[15px] max-w-xl">
                Currently pursuing a comprehensive degree in Software Engineering, building a strong foundation in algorithmic thinking, data structures, and modern software development practices. Engaging in hands-on projects and collaborative learning to solve real-world problems.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-3">
                <Award size={18} className="text-accent" />
                <span className="text-sm font-semibold text-primary">Focus: Full-Stack & Artificial Intelligence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
