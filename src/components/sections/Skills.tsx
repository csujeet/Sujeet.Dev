import React, { useEffect, useRef, useState } from 'react';
import SkillBar from '../ui/SkillBar';
import GlitchText from '../ui/GlitchText';
import { Code, Database, Palette, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', percentage: 95 },
        { name: 'TypeScript', percentage: 90 },
        { name: 'CSS / Tailwind', percentage: 92 },
        { name: 'WebGL / Three.js', percentage: 85 },
      ],
    },
    {
      icon: <Database size={24} />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', percentage: 88 },
        { name: 'Python', percentage: 82 },
        { name: 'SQL / NoSQL', percentage: 85 },
        { name: 'GraphQL', percentage: 78 },
      ],
    },
    {
      icon: <Palette size={24} />,
      title: 'Design',
      skills: [
        { name: 'UI/UX Design', percentage: 88 },
        { name: 'Figma / Adobe XD', percentage: 85 },
        { name: 'Motion Design', percentage: 80 },
        { name: 'Design Systems', percentage: 90 },
      ],
    },
    {
      icon: <Cloud size={24} />,
      title: 'DevOps',
      skills: [
        { name: 'Docker', percentage: 85 },
        { name: 'AWS / Azure', percentage: 80 },
        { name: 'CI/CD', percentage: 88 },
        { name: 'Kubernetes', percentage: 75 },
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-matrix-gray to-matrix-black relative"
    >
      {/* Tech circuit background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,0 L50,0 L50,50 L0,50 Z" fill="none" stroke="#00FF41" strokeWidth="0.5" />
            <path d="M50,0 L100,0 L100,50 L50,50 Z" fill="none" stroke="#00FF41" strokeWidth="0.5" />
            <path d="M0,50 L50,50 L50,100 L0,100 Z" fill="none" stroke="#00FF41" strokeWidth="0.5" />
            <path d="M50,50 L100,50 L100,100 L50,100 Z" fill="none" stroke="#00FF41" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="3" fill="#00FF41" />
            <circle cx="0" cy="0" r="3" fill="#00FF41" />
            <circle cx="100" cy="0" r="3" fill="#00FF41" />
            <circle cx="0" cy="100" r="3" fill="#00FF41" />
            <circle cx="100" cy="100" r="3" fill="#00FF41" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <h2 className="section-heading text-center mb-16">
          <GlitchText text="Technical Skills" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6 text-matrix-green">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={isVisible ? skillIndex * 200 : 0}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;