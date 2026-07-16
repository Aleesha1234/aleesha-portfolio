import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import resumeAiImg from '@/assets/generated_images/resume-ai.jpg';
import bikersHubImg from '@/assets/generated_images/bikers-hub.jpg';
import digitalAgencyImg from '@/assets/generated_images/digital-agency.jpg';
import expenseTrackerImg from '@/assets/generated_images/expense-tracker.jpg';
import calculatorImg from '@/assets/generated_images/calculator.jpg';
import portfolioImg from '@/assets/generated_images/portfolio.jpg';

const projects = [
  {
    title: "AI Resume Analyzer",
    description: "An intelligent tool that evaluates resumes against job descriptions using AI, providing actionable feedback and matching scores.",
    image: resumeAiImg,
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Gemini API"],
    demoLink: "https://aleeshatariq25.pythonanywhere.com",
    githubLink: "https://github.com/Aleesha1234/ai-resume-analyzer"
  },
  {
    title: "Bikers Hub",
    description: "A comprehensive mobile application for motorcycle enthusiasts to discover routes, organize events, and connect with fellow riders.",
    image: bikersHubImg,
    tech: ["Flutter", "Dart", "Firebase"],
    demoLink: "https://github.com/Aleesha1234/biker_hub",
    githubLink: "https://github.com/Aleesha1234/biker_hub"
  },
  {
    title: "Digital Agency Website",
    description: "A high-performance, modern corporate landing page with smooth animations and responsive design tailored for a creative agency.",
    image: digitalAgencyImg,
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    demoLink: "https://digital-agency-website-eight.vercel.app",
    githubLink: "https://github.com/Aleesha1234/digital-agency-website"
  },
  {
    title: "Expense Tracker",
    description: "A data-driven web application to monitor personal finances, featuring interactive visualizations and spending categorizations.",
    image: expenseTrackerImg,
    tech: ["Python", "Streamlit", "Pandas"],
    demoLink: "https://github.com/Aleesha1234/expense-tracker",
    githubLink: "https://github.com/Aleesha1234/expense-tracker"
  },
  {
  title: "Personal Portfolio Website",
  description: "A modern and responsive portfolio website showcasing my projects, technical skills, education, and achievements. It features smooth animations, resume download functionality, and a Formspree-powered contact form.",
  image: portfolioImg,
  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "Framer Motion",
    "Formspree"
  ],
  demoLink: "https://aleesha-portfolio.vercel.app",
  githubLink: "https://github.com/Aleesha1234/aleesha-portfolio"
  },
  {
    title: "DOM Calculator",
    description: "A sleek, fully functional calculator app focusing on clean component architecture and robust state management.",
    image: calculatorImg,
    tech: ["React", "TypeScript"],
    demoLink: "https://github.com/Aleesha1234/json-dom-calculator",
    githubLink: "https://github.com/Aleesha1234/json-dom-calculator"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(29,58,77,0.12)] border border-gray-100 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-gray-50">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative z-20 bg-white">
                <h3 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-primary/70 text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3.5 py-1.5 bg-[#F5E2DE]/50 text-accent text-xs font-semibold rounded-full border border-accent/10">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.demoLink} 
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-gray-200 text-primary rounded-xl text-sm font-semibold hover:border-primary hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Github size={16} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
