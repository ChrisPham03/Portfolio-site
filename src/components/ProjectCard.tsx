import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  isLarge?: boolean;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  liveUrl, 
  githubUrl, 
  isLarge = false 
}: ProjectCardProps) {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isLarge ? 'col-span-1 md:col-span-2' : ''}`}>
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <ImageWithFallback 
            src={image}
            alt={title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              isLarge ? 'h-80' : 'h-64'
            }`}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className={`font-medium group-hover:text-primary transition-colors ${
              isLarge ? 'text-xl' : 'text-lg'
            }`}>
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2 pt-2">
            {liveUrl && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => window.open(liveUrl, '_blank')}
                className="text-xs h-8"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => window.open(githubUrl, '_blank')}
                className="text-xs h-8"
              >
                <Github className="w-3 h-3 mr-1" />
                Code
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}