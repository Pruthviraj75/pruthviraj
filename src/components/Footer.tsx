import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Pruthviraj75",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/pruthviraj-gaikwad",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:gaikwadpruthviraj01@gmail.com",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Pruthviraj
            </a>
            <p className="text-muted-foreground mt-2">
              Frontend & MERN Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Pruthviraj Gaikwad. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
