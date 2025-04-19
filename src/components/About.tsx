
import React, { useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const About: React.FC = () => {
  // Skills data
  const skills = [
    { name: 'JavaScript / TypeScript', proficiency: 90 },
    { name: 'React / Vue', proficiency: 85 },
    { name: 'HTML / CSS', proficiency: 95 },
    { name: 'Cyber Security', proficiency: 80 },
    { name: 'Node.js', proficiency: 75 },
    { name: 'DevOps', proficiency: 85 }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="lg:w-1/3 fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-lg"></div>
              <img 
                src="manish_photo.jpg" 
                alt="About me" 
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 fade-in">About Me</h2>
            <p className="text-foreground/70 mb-6 fade-in">
              I'm a passionate Cloud Engineer and Full Stack Developer with working experience creating 
              beautiful, functional websites and applications and Cloud Based Solutions.
            </p>
            
            <div className="mb-8 fade-in">
              <p className="mb-4">
                My journey in web development began at University, where I studied Computer Science 
                and discovered my passion for creating digital experiences. Since then, I've worked 
                with startups, agencies, and enterprises to build solutions that are both visually 
                appealing and technically sound.
              </p>
              <p>
                I believe in clean code, thoughtful design, and continuous learning. When I'm not 
                coding, you can find me exploring new design trends, contributing to open source.
              </p>
            </div>
            
            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 fade-in">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Resume Button */}
            <div className="fade-in">
              <Button 
                className="group" 
                onClick={() => window.open('/ManishSharma_Resume.pdf', '_blank')}
                aria-label="Get Resume"
              >
                <Download className="mr-2 group-hover:-translate-y-1 transition-transform" size={16} />
                Get Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
