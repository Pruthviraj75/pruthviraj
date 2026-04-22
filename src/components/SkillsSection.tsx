import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, Server, Database, Wrench, 
  Palette, Layout, Globe, Layers, Brain, Settings 
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Palette,
    skills: [
      "HTML5", "CSS3", "JavaScript (ES6+)", 
      "React.js", "Next.js (App Router)", "TypeScript",
      "Redux Toolkit", "Tailwind CSS", "ShadCN UI",
      "Responsive Design", "UI/UX Best Practices",
      "React Flow (Workflow UI)"
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Node.js", "Express.js", "RESTful APIs",
      "JWT Authentication", "MVC Architecture",
      "API Integration", "Error Handling", "Validation",
      "Web Streams API (Streaming Responses)",
      "Serverless Functions (Next.js API Routes)"
    ],
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      "MongoDB", "Mongoose", "Convex (Realtime DB)",
      "Schema Design", "CRUD Operations",
      "Cloud Deployment (Vercel, Render)",
      "Environment Management (.env)"
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "AI & Integrations",
    icon: Brain,
    skills: [
      "Google Gemini API", "AI Tool Calling",
      "Prompt Engineering (Basics)",
      "External API Integration (Weather API, etc.)",
      "Dynamic API Query Handling",
      "JSON Parsing & Structured Responses"
    ],
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Tools & Practices",
    icon: Settings,
    skills: [
      "Git", "GitHub", "Postman", "VS Code",
      "Clerk Authentication", "Arcjet Security",
      "Debugging", "Clean Code",
      "Problem Solving", "Agile Methodology"
    ],
    color: "from-teal-500 to-green-400",
  }
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="skill-card group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="tech-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Code, label: "Clean Code", value: "Best Practice" },
            { icon: Layout, label: "Responsive", value: "Mobile-First" },
            { icon: Globe, label: "SEO", value: "Optimized" },
            { icon: Layers, label: "Scalable", value: "Architecture" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="glass-card p-4 text-center hover-lift"
            >
              <item.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-semibold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
