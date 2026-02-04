import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Monitor, Smartphone, Server, 
  Plug, Cloud, Palette 
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: "Frontend Web Development",
    description: "Building responsive, interactive, and visually stunning user interfaces using modern technologies like React and Tailwind CSS.",
  },
  {
    icon: Smartphone,
    title: "React App Development",
    description: "Creating dynamic single-page applications with React, Redux for state management, and modern UI/UX best practices.",
  },
  {
    icon: Server,
    title: "Full Stack (MERN) Development",
    description: "End-to-end web application development using MongoDB, Express.js, React, and Node.js with secure authentication.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Connecting applications with third-party services and building custom RESTful APIs for seamless data exchange.",
  },
  {
    icon: Cloud,
    title: "Deployment & Hosting",
    description: "Deploying web applications on platforms like Render, GitHub Pages, and cloud services for reliable hosting.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Services I provide to help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-8 group"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Decorative glow */}
                <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Have a project in mind? Let's work together!
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium link-underline transition-colors"
          >
            Get in touch
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
