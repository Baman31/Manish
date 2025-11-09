import React, { useEffect } from "react";
import { Download, Cloud, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiVuedotjs, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs, 
  SiDocker, 
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiTerraform
} from "react-icons/si";

const About: React.FC = () => {
  // Skills data with logos
  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "AWS", icon: Cloud, color: "#FF9900" },
    { name: "Azure", icon: Cloud, color: "#0078D4" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "Cyber Security", icon: Shield, color: "#FF6B6B" },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
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
            <h2 className="text-3xl md:text-4xl font-bold mb-2 fade-in">
              About Me
            </h2>
            <p className="text-foreground/70 mb-6 fade-in">
              I’m a passionate DevOps and Cloud Engineer skilled in automating
              and optimizing development lifecycles using AWS, Azure, Docker,
              Kubernetes, and Jenkins.With a strong foundation in infrastructure
              as code and CI/CD pipelines, I focus on building scalable,
              efficient, and secure solutions.
            </p>

            <div className="mb-8 fade-in">
              <p className="mb-4">
                As a Microsoft Learn Student Ambassador and hackathon winner, I
                enjoy exploring new technologies, contributing to tech
                communities, and continuously learning to deliver innovative
                cloud-driven solutions.
              </p>
              <p>
                I believe in clean code, thoughtful design, and continuous
                learning.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 fade-in">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="fade-in flex flex-col items-center gap-2 p-4 rounded-md hover-elevate active-elevate-2 transition-all"
                      style={{ animationDelay: `${index * 50}ms` }}
                      data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Icon 
                        className="w-8 h-8" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm text-center font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Resume Button */}
            <div className="fade-in">
              <Button
                className="group"
                onClick={() =>
                  window.open("/ManishSharma_Resume.pdf", "_blank")
                }
                aria-label="Get Resume"
              >
                <Download
                  className="mr-2 group-hover:-translate-y-1 transition-transform"
                  size={16}
                />
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
