import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Monitor, Cpu } from 'lucide-react';
import GlitchText from '../ui/GlitchText';

const About: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with modern frameworks and technologies.',
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Building robust server-side applications, APIs, and database solutions.',
    },
    {
      icon: <Monitor size={24} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive user experiences and visually appealing interfaces.',
    },
    {
      icon: <Cpu size={24} />,
      title: 'System Architecture',
      description: 'Developing scalable and maintainable software architectures.',
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-matrix-black relative overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#00FF4133_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="section-heading mb-6">
              <GlitchText text="About Me" />
            </h2>
            
            <div className="space-y-4 text-matrix-green">
              <p>
                I am a passionate full-stack developer with expertise in creating immersive digital experiences. 
                My journey in the world of coding began over 6 years ago, and I've been diving deeper into the matrix ever since.
              </p>
              
              <p>
                With a background in computer science and a love for clean, efficient code, I specialize in developing 
                web applications that are not only functional but also visually stunning and user-friendly.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or unplugging from the matrix to enjoy nature and photography.
              </p>
              
              <div className="pt-4">
                <a href="#contact" className="matrix-button">
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
          
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-matrix-gray bg-opacity-30 border border-matrix-dark-green p-6 rounded-lg hover:border-matrix-green transition-all duration-300 group"
                >
                  <div className="text-matrix-green mb-4 group-hover:text-matrix-light-green transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-matrix-green group-hover:text-matrix-light-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-matrix-green opacity-75">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;