import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Star } from 'lucide-react';

const Certifications: React.FC = () => {
  // Certifications data
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'AWS Academy Graduate- AWS Academy Cloud Foundations',
      date: '2023',
      icon: Award,
      color: 'text-orange-500'
    },
    {
      title: 'AWS Academy Graduate- AWS Academy Cloud Foundations',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      icon: Award,
      color: 'text-blue-500'
    },
    {
      title: 'Microsoft Certified: Azure AI Engineer Associate (AI- 102)',
      issuer: 'Microsoft',
      date: '2025',
      icon: Award,
      color: 'text-blue-600'
    },
    {
      title: 'HashiCorp Terraform Associate',
      issuer: 'HashiCorp',
      date: '2023',
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  // Achievements data
  const achievements = [
    {
      title: 'Microsoft Learn Student Ambassador',
      description: 'Selected as Microsoft Learn Student Ambassador, mentoring students in cloud technologies',
      icon: Trophy,
      color: 'text-blue-500',
      link: 'https://mvp.microsoft.com/en-US/studentambassadors/profile/a245527c-083e-4892-ae81-ae50b8ed2a94'
    },
    {
      title: 'Hackathon Winner',
      description: 'Won first place in national level hackathon for innovative cloud solution',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to popular DevOps and cloud infrastructure projects',
      icon: Star,
      color: 'text-green-500'
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="certifications" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 fade-in">
          Certifications & Achievements
        </h2>
        <p className="text-foreground/70 mb-12 max-w-2xl fade-in">
          Professional certifications and notable achievements in my career
        </p>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 fade-in">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={cert.title}
                  className="fade-in hover-elevate transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`cert-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <Icon className={`w-8 h-8 ${cert.color}`} />
                      <Badge variant="secondary" className="text-xs">
                        {cert.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-3">{cert.title}</CardTitle>
                    <CardDescription className="text-sm">{cert.issuer}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 fade-in">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const CardWrapper = achievement.link ? 'a' : 'div';
              const cardProps = achievement.link 
                ? { href: achievement.link, target: '_blank', rel: 'noopener noreferrer', className: 'block' }
                : {};
              
              return (
                <CardWrapper key={achievement.title} {...cardProps}>
                  <Card
                    className={`fade-in hover-elevate transition-all h-full ${achievement.link ? 'cursor-pointer hover:shadow-lg' : ''}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    data-testid={`achievement-${achievement.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <CardHeader>
                      <Icon className={`w-8 h-8 mb-2 ${achievement.color}`} />
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70">{achievement.description}</p>
                      {achievement.link && (
                        <p className="text-sm text-blue-500 mt-2 hover:underline">View Profile →</p>
                      )}
                    </CardContent>
                  </Card>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
