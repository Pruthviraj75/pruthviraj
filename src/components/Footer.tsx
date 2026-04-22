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
    href: "https://www.linkedin.com/in/pruthvi-gaikwad",
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
    <footer className="border-t border-gray-800 mt-16">
  <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

    {/* LEFT - Branding */}
    <div>
      <h2 className="text-xl font-semibold text-white">Pruthviraj Gaikwad</h2>
      <p className="text-gray-400 mt-2 text-sm">
        Full-Stack Developer building scalable web applications and AI-powered products.
      </p>
    </div>

    {/* CENTER - Navigation */}
    <div>
      <h3 className="text-white font-medium mb-3">Quick Links</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
        <li><a href="#about" className="hover:text-white transition">About</a></li>
        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    {/* RIGHT - Socials */}
    <div>
      <h3 className="text-white font-medium mb-3">Connect</h3>
      <div className="flex gap-4">
        <a href="https://github.com/Pruthviraj75" target="_blank" className="text-gray-400 hover:text-white transition">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/pruthvi-gaikwad/" target="_blank" className="text-gray-400 hover:text-white transition">
          LinkedIn
        </a>
        <a href="mailto:gaikwadpruthviraj01@gmail.com" className="text-gray-400 hover:text-white transition">
          Email
        </a>
      </div>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
    © {new Date().getFullYear()} Pruthviraj Gaikwad · Built with Next.js & Tailwind CSS
  </div>
</footer>
  );
};
