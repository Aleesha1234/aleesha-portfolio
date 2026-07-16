import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Code2 } from 'lucide-react';
import { SiReact, SiPython, SiFlutter } from 'react-icons/si';
import profileImg from '@/assets/generated_images/profile.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-24 pb-16 relative overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] text-[#F5E2DE]/40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.7,-76.4C58.9,-69.3,69.1,-55.3,77.7,-40.8C86.3,-26.3,93.4,-11.2,93.2,3.8C93,18.8,85.5,33.7,75.7,46.1C65.9,58.5,53.8,68.4,40.1,75.5C26.4,82.6,11.2,86.9,-3.9,86.3C-19.1,85.8,-38.1,80.4,-53.4,70.9C-68.7,61.4,-80.1,47.8,-86.3,32.3C-92.5,16.8,-93.4,-0.6,-88.7,-16.1C-84,-31.6,-73.7,-45.3,-60.8,-53.4C-47.9,-61.5,-32.4,-64.1,-17.8,-69.4C-3.2,-74.7,10.6,-82.7,24.1,-82C37.5,-81.2,50.7,-71.8,45.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
        </svg>
        <svg className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] text-[#EAEAEA]/60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="currentColor" strokeWidth="1" d="M38.1,-63.9C51.6,-56.5,66.3,-48.9,76.5,-37.2C86.7,-25.5,92.4,-9.7,90.4,5.4C88.4,20.5,78.8,35,66.8,46.2C54.8,57.4,40.4,65.3,25.6,71.2C10.8,77.1,-4.4,81.1,-19.6,79.5C-34.8,77.9,-50,70.8,-60.2,59.3C-70.4,47.8,-75.6,31.9,-78.9,15.7C-82.2,-0.5,-83.6,-17,-78.1,-31.2C-72.6,-45.4,-60.2,-57.3,-46.5,-64.6C-32.8,-71.9,-16.4,-74.6,-0.8,-73.4C14.8,-72.2,24.6,-71.3,38.1,-63.9Z" transform="translate(100 100) scale(1.1)" />
        </svg>
        <div className="absolute top-[20%] left-[10%] w-3 h-3 rounded-full bg-accent/20"></div>
        <div className="absolute bottom-[30%] right-[15%] w-4 h-4 rounded-full border border-primary/20"></div>
        <div className="absolute top-[40%] right-[25%] w-2 h-2 rounded-full bg-primary/20"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="flex flex-col justify-center order-2 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-accent"></span>
              <span className="text-accent font-semibold tracking-widest uppercase text-sm">Hello, I'm</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-primary mb-4 tracking-tight">
              <span className="relative inline-block">
                Aleesha Tariq
                <svg className="absolute -bottom-2 left-0 w-full text-accent/30" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 15.5C85.5 4.5 198 -3 298 15.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h1>
            
            <motion.h2 variants={fadeInUp} className="text-2xl lg:text-3xl font-medium text-primary/80 mb-6 font-heading">
              Software Engineer / Full-Stack Developer
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-primary/70 leading-relaxed max-w-lg mb-10 text-lg">
              Turning ideas into functional, scalable, and user-friendly applications through modern technologies and thoughtful design.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-5 mb-12">
            <a
  href="/resume.pdf"
  download
  target="_blank"
  className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 hover:shadow-[0_10px_20px_-10px_rgba(29,58,77,0.5)] transition-all duration-300 hover:-translate-y-0.5"
>
  <Download
    size={18}
    className="group-hover:-translate-y-0.5 transition-transform"
  />
  Download Resume
</a>
              <a 
                href="#contact" 
                className="group flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              {[
                { icon: Github, link: "https://github.com/Aleesha1234", label: "GitHub" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/aleesha-tariq-se", label: "LinkedIn" },
                { icon: Mail, link: "mailto:aleeshatariq4499@gmail.com", label: "Email" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link} 
                  aria-label={social.label}
                  className="group relative w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <social.icon size={20} className="relative z-10 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Area */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Central gradient soft glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F5E2DE] to-[#EAEAEA] rounded-full blur-2xl opacity-70 scale-110" />
              
              {/* The Image */}
              <div className="relative w-full h-full rounded-full p-2 bg-white shadow-2xl z-10">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={profileImg} 
                    alt="Aleesha Tariq" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 z-20 bg-white px-4 py-2.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-2 border border-gray-50"
              >
                <div className="w-8 h-8 rounded-full bg-[#E3F2FD] flex items-center justify-center text-[#61DAFB]">
                  <SiReact size={18} />
                </div>
                <span className="font-semibold text-primary text-sm pr-1">React</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-8 z-20 bg-white px-4 py-2.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-2 border border-gray-50"
              >
                <div className="w-8 h-8 rounded-full bg-[#FFF8E1] flex items-center justify-center text-[#FFCA28]">
                  <SiPython size={18} className="text-[#3776AB]" />
                </div>
                <span className="font-semibold text-primary text-sm pr-1">Python</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-32 -right-8 z-20 bg-white px-4 py-2.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-2 border border-gray-50"
              >
                <div className="w-8 h-8 rounded-full bg-[#E1F5FE] flex items-center justify-center text-[#02569B]">
                  <SiFlutter size={18} />
                </div>
                <span className="font-semibold text-primary text-sm pr-1">Flutter</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }} 
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-10 -right-4 z-20 bg-white px-4 py-2.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-2 border border-gray-50"
              >
                <div className="w-8 h-8 rounded-full bg-[#F5E2DE] flex items-center justify-center text-accent">
                  <Code2 size={18} />
                </div>
                <span className="font-semibold text-primary text-sm pr-1">Full-Stack</span>
              </motion.div>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
