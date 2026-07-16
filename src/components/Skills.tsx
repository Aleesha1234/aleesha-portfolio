import { motion } from 'framer-motion';
import { 
  SiCplusplus, SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiReact, SiTailwindcss, SiBootstrap, SiVite,
  SiNodedotjs, SiDotnet, SiFirebase,
  SiMysql, SiNumpy, SiPandas,
  SiGit, SiGithub, SiAndroidstudio, SiVercel, SiWordpress
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiJava, DiCss3 } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';

const skillsData = [
  {
    category: "Programming",
    items: [
      { name: "Java", icon: DiJava, color: "#ED8B00" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C#", icon: TbBrandCSharp, color: "#239120" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: DiCss3, color: "#1572B6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ]
  },
  {
    category: "Database & Libraries",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1.5 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-20">
          {skillsData.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-8 border-l-4 border-accent pl-4">
                {group.category}
              </h3>
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {group.items.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="group bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(29,58,77,0.15)] border border-transparent hover:border-accent/10 transition-all duration-300"
                    >
                      <Icon className="text-4xl transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" style={{ color: skill.color }} />
                      <span className="text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
