import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              Available for Internships
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Designing digital experiences that{' '}
              <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
                delight users
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Computer Science student passionate about creating intuitive and beautiful user interfaces. 
              Currently pursuing my degree while building meaningful design solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToProjects} size="lg" className="w-fit">
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-fit"
              onClick={() => window.open('mailto:alex.chen@email.com', '_blank')}
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 to-accent/50 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-background border-2 border-border flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm">🎨</span>
            </div>
            <div className="absolute -bottom-2 -left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground text-sm">💡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}