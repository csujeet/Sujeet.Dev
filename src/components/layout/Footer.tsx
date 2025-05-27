import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/' },
    { name: 'Twitter', icon: <Twitter size={18} />, url: 'https://twitter.com/' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:contact@example.com' },
  ];

  return (
    <footer className="border-t border-matrix-dark-green bg-matrix-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">SUJEET.DEV</h3>
            <p className="text-matrix-green opacity-75 text-sm">
              A matrix-inspired portfolio showcasing my work and skills in web development.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-matrix-green hover:text-matrix-light-green transition-colors">Home</a>
              <a href="#about" className="text-matrix-green hover:text-matrix-light-green transition-colors">About</a>
              <a href="#projects" className="text-matrix-green hover:text-matrix-light-green transition-colors">Projects</a>
              <a href="#skills" className="text-matrix-green hover:text-matrix-light-green transition-colors">Skills</a>
              <a href="#contact" className="text-matrix-green hover:text-matrix-light-green transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  className="text-matrix-green hover:text-matrix-light-green transition-colors"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-matrix-dark-green flex flex-col md:flex-row justify-between items-center">
          <p className="text-matrix-green opacity-75 text-sm">
            &copy; {currentYear} SUJEET.DEV. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm">
            <span className="inline-flex items-center">
              <span className="mr-2 h-2 w-2 rounded-full bg-matrix-green animate-pulse"></span>
              <span className="text-matrix-green opacity-75">System Online</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;