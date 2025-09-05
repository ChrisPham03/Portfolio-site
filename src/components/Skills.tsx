import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Palette, Code, Users, Lightbulb } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Framer", "Principle"]
    },
    {
      title: "Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS", "Node.js", "Python", "Git"]
    },
    {
      title: "UX Methods",
      icon: <Users className="w-6 h-6" />,
      skills: ["User Research", "Usability Testing", "Wireframing", "Prototyping", "Journey Mapping", "A/B Testing"]
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="w-6 h-6" />,
      skills: ["Problem Solving", "Communication", "Collaboration", "Critical Thinking", "Time Management", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="container mx-auto px-6 py-20">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A blend of design thinking and technical implementation to create 
            meaningful user experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-medium">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/50 rounded-xl p-8 text-center space-y-4">
          <h3 className="text-xl font-medium">Design Philosophy</h3>
          <blockquote className="text-muted-foreground italic text-lg max-w-3xl mx-auto">
            "Good design is not just about making things look pretty—it's about creating 
            solutions that are functional, accessible, and delightful to use. Every pixel 
            should serve a purpose."
          </blockquote>
        </div>
      </div>
    </section>
  );
}