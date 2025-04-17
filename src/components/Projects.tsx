
import React, { useState, useEffect } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<ProjectCardProps[]>([]);

  // Sample project data - replace with your actual projects
  const projects: ProjectCardProps[] = [
    {
      title: 'E-commerce Dashboard',
      description: 'A responsive admin dashboard for managing online store inventory, sales, and customer data.',
      imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'web'
    },
    {
      title: 'Travel Journal App',
      description: 'Mobile application for travelers to document and share their journey experiences with interactive maps.',
      imageSrc: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2574&auto=format&fit=crop',
      tags: ['React Native', 'Firebase', 'Google Maps API'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'mobile'
    },
    {
      title: 'Minimal Weather UI',
      description: 'Clean and intuitive weather forecast interface with animated visualizations and location tracking.',
      imageSrc: 'https://images.unsplash.com/photo-1530563885674-66db50a1af19?q=80&w=2574&auto=format&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'ui'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website with a clean, modern design and smooth animations.',
      imageSrc: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2670&auto=format&fit=crop',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'web'
    },
    {
      title: 'Music Player Interface',
      description: 'Sleek music player design with visualizations, playlist management, and social sharing features.',
      imageSrc: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop',
      tags: ['Figma', 'Prototyping', 'UX Design'],
      category: 'ui'
    },
    {
      title: 'Task Management Tool',
      description: 'Collaborative project management application with drag-and-drop interface and real-time updates.',
      imageSrc: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop',
      tags: ['Vue.js', 'Vuex', 'Firebase', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: '#',
      category: 'web'
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ui', name: 'UI Design' }
  ];

  // Filter projects when selected category changes
  useEffect(() => {
    setFilteredProjects(
      selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory)
    );
  }, [selectedCategory]);

  // Initialize with all projects
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

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
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 fade-in">My Work</h2>
        <p className="text-foreground/70 mb-12 max-w-2xl fade-in">
          Here are some selected projects that showcase my skills and experience
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10 fade-in">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary text-foreground/70 hover:bg-secondary/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.title} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
