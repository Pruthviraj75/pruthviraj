import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend';

const projects = [
  {
    id: 1,
    title: "JobConnect",
    description: "Full-stack MERN job portal with role-based access for recruiters and job seekers. Features authentication, protected routes, Redux state management, REST APIs, and responsive React + Tailwind UI.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80",
    tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/Pruthviraj75/job_portal",
    live: "https://job-portal-fjmy.onrender.com/",
    category: "fullstack" as const,
    featured: true,
  },
  {
    id: 2,
    title: "Music Player App",
    description: "Responsive JavaScript music player with DOM manipulation, event handling, playback controls, and dynamic UI updates for an interactive listening experience.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80",
    tech: ["HTML", "CSS", "JavaScript", "DOM", "Git"],
    github: "https://github.com/Pruthviraj75/Music-Player-App",
    live: null,
    category: "frontend" as const,
    featured: false,
  },
  {
    id: 3,
    title: "PDF Merger Application",
    description: "Backend tool to merge multiple PDF files efficiently with secure uploads using Express middleware and Multer for robust file handling.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&auto=format&fit=crop&q=80",
    tech: ["Node.js", "Express", "Multer", "pdf-merger-js", "File Handling"],
    github: "https://github.com/Pruthviraj75/Pdf_Merger",
    live: null,
    category: "backend" as const,
    featured: false,
  },
];

const filterButtons: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setActiveFilter(btn.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === btn.value
                  ? 'gradient-bg text-primary-foreground shadow-lg'
                  : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              layout
              className={`project-card ${project.featured ? 'lg:grid lg:grid-cols-2' : ''}`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${project.featured ? 'h-64 lg:h-full' : 'h-48'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {project.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
                    <Star className="h-4 w-4" />
                    Featured Project
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    asChild
                    className="border-primary/50 hover:bg-primary/10 hover:border-primary"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      asChild
                      className="gradient-bg hover:opacity-90 text-primary-foreground"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Pruthviraj75"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium link-underline transition-colors"
          >
            <Github className="h-5 w-5" />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
