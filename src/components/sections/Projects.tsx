import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import GlitchText from '../ui/GlitchText';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: 'Neural Network Visualizer',
      description: 'An interactive visualization tool for neural networks using WebGL and React.',
      tags: ['React', 'WebGL', 'TensorFlow.js', 'TypeScript'],
      imageUrl: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Quantum Encryption App',
      description: 'End-to-end encrypted messaging platform with quantum-resistant algorithms.',
      tags: ['Next.js', 'Node.js', 'Cryptography', 'WebSockets'],
      imageUrl: 'https://images.pexels.com/photos/8294607/pexels-photo-8294607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Virtual Reality Dashboard',
      description: 'A VR interface for monitoring and controlling IoT devices in real-time.',
      tags: ['Three.js', 'WebXR', 'IoT', 'React'],
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'AI Content Generator',
      description: 'A tool that uses machine learning to generate creative content for various platforms.',
      tags: ['Python', 'TensorFlow', 'GPT-3', 'FastAPI'],
      imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Blockchain Explorer',
      description: 'A visual interface for exploring and analyzing blockchain transactions and smart contracts.',
      tags: ['Ethereum', 'React', 'GraphQL', 'D3.js'],
      imageUrl: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Augmented Reality Portfolio',
      description: 'An AR experience that showcases projects in an interactive 3D space.',
      tags: ['AR.js', 'A-Frame', 'JavaScript', 'WebGL'],
      imageUrl: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#',
    },
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-matrix-black to-matrix-gray relative"
    >
      <div className="section-container">
        <h2 className="section-heading text-center mb-16">
          <GlitchText text="My Projects" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="matrix-button"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;