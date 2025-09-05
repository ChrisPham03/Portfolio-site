import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const projects = [
    {
      title: "EcoTrack Mobile App",
      description: "A comprehensive mobile application for tracking personal environmental impact. Features intuitive data visualization, goal setting, and community challenges. Designed with accessibility and user engagement in mind.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2OTc5NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Mobile UI", "React Native", "Figma", "User Research"],
      liveUrl: "https://ecotrack-demo.com",
      githubUrl: "https://github.com/alexchen/ecotrack",
      isLarge: true
    },
    {
      title: "Analytics Dashboard",
      description: "Clean and modern dashboard design for data visualization. Features customizable widgets, real-time updates, and responsive layout for all devices.",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzU2OTgxMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Web UI", "React", "Data Viz", "Charts"],
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/alexchen/analytics"
    },
    {
      title: "Recipe Sharing Platform",
      description: "Social platform for sharing and discovering recipes. Includes user profiles, recipe collections, and interactive cooking instructions.",
      image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NTY5OTgwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["UI/UX", "Prototyping", "User Testing", "Figma"],
      liveUrl: "https://recipes-demo.com"
    },
    {
      title: "Task Management App",
      description: "Minimalist task management interface focusing on productivity and ease of use. Features drag-and-drop functionality and smart notifications.",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwcHJvdG90eXBlfGVufDF8fHx8MTc1Njk3MDM1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Mobile UI", "Productivity", "Interaction Design"],
      githubUrl: "https://github.com/alexchen/taskapp"
    }
  ];

  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of UI/UX design projects showcasing my approach to creating 
            user-centered digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.title}
              {...project}
            />
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://dribbble.com/alexchen', '_blank')}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              View Dribbble →
            </button>
            <button 
              onClick={() => window.open('https://behance.net/alexchen', '_blank')}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              View Behance →
            </button>
            <button 
              onClick={() => window.open('https://github.com/alexchen', '_blank')}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              View GitHub →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}