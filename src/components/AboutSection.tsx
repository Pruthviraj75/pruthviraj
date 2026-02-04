import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: "B.E. in Information Technology",
    institution: "Dr. D. Y. Patil Institute of Technology",
    year: "2020 - 2024",
    grade: "CGPA: 7.72",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Junior College",
    year: "2020",
    grade: "73.54%",
    icon: Award,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "High School",
    year: "2018",
    grade: "88%",
    icon: Award,
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Get to know more about my journey and passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Passionate Frontend Developer
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated Frontend & MERN Stack Developer with a strong focus on 
                  building modern, responsive web applications. My passion lies in creating 
                  clean, user-friendly interfaces that provide exceptional experiences.
                </p>
                <p>
                  As a fresher with hands-on project experience, I bring fresh perspectives 
                  and up-to-date knowledge of modern web technologies. I believe in writing 
                  clean, maintainable code and following best practices in software development.
                </p>
                <p>
                  My expertise spans across the entire MERN stack, allowing me to build 
                  full-stack applications from concept to deployment. I'm always eager to 
                  learn new technologies and tackle challenging problems.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-border">
                <div>
                  <span className="text-3xl font-bold gradient-text">5+</span>
                  <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
                </div>
                <div>
                  <span className="text-3xl font-bold gradient-text">10+</span>
                  <p className="text-sm text-muted-foreground mt-1">Technologies Mastered</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Education
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <edu.icon className="h-5 w-5 text-primary" />
                    </div>

                    <div className="glass-card-hover p-6">
                      <div className="flex items-center gap-2 text-sm text-primary mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {edu.institution}
                      </p>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
