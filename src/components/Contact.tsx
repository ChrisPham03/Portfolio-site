import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      title: "Email",
      value: "alex.chen@email.com",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:alex.chen@email.com"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/alexchen",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/alexchen"
    },
    {
      title: "GitHub",
      value: "github.com/alexchen",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/alexchen"
    }
  ];

  return (
    <section id="contact" className="bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-medium">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm currently seeking internship opportunities and freelance projects. 
              Let's create something amazing together!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <Card key={method.title} className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent 
                  className="p-6 text-center space-y-4"
                  onClick={() => window.open(method.href, '_blank')}
                >
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('mailto:alex.chen@email.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            
            <div className="pt-8 border-t">
              <p className="text-muted-foreground text-sm">
                Based in San Francisco, CA • Open to remote work and relocation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}