import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  repoUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-matrix-gray rounded-lg overflow-hidden border border-matrix-dark-green group transition-all duration-300 hover:border-matrix-green"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-matrix-black to-transparent opacity-80"></div>
        
        {/* Matrix-like overlay effect */}
        <div 
          className={`absolute inset-0 bg-matrix-black bg-opacity-40 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,255,65,0.15), rgba(0,255,65,0.15) 1px, transparent 1px, transparent 2px)',
            backgroundSize: '100% 2px',
          }}
        ></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-matrix-green group-hover:text-matrix-light-green transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-matrix-green opacity-75 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-matrix-dark-green text-matrix-green rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-4">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-matrix-green hover:text-matrix-light-green transition-colors"
            >
              <ExternalLink size={16} className="mr-1" /> Demo
            </a>
          )}
          
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-matrix-green hover:text-matrix-light-green transition-colors"
            >
              <Github size={16} className="mr-1" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;