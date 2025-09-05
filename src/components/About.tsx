import { Card, CardContent } from "./ui/card";

export function About() {
  return (
    <section id="about" className="bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science student at Stanford University with a passion for creating 
                digital experiences that make technology more accessible and enjoyable for everyone.
              </p>
              <p>
                My journey in design began during my freshman year when I discovered the perfect 
                intersection between my technical skills and creative interests. Since then, I've 
                been dedicated to learning the principles of user-centered design and applying them 
                to real-world problems.
              </p>
              <p>
                When I'm not designing or coding, you can find me exploring local coffee shops, 
                sketching in my notebook, or contributing to open-source projects that make design 
                more accessible to developers.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-2xl font-medium text-primary">3+</div>
                <p className="text-sm text-muted-foreground">Years of Design</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-2xl font-medium text-primary">15+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-2xl font-medium text-primary">2</div>
                <p className="text-sm text-muted-foreground">Design Internships</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-2xl font-medium text-primary">98%</div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}