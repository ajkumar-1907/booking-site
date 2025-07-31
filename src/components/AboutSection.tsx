import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Users, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients"
  },
  {
    icon: Clock,
    value: "3+",
    label: "Years Experience"
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfaction Rate"
  },
  {
    icon: Sparkles,
    value: "1000+",
    label: "Designs Created"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-nail-rose-light text-nail-rose-dark">About Our Studio</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Artistry Meets Expertise
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to our nail studio, where passion for nail art meets professional expertise. 
              We specialize in creating stunning nail designs that reflect your unique style and personality.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From classic manicures to intricate 3D nail art, our skilled artist brings creativity 
              and precision to every appointment. We use only premium products and the latest techniques 
              to ensure your nails not only look beautiful but also stay healthy and strong.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What Makes Us Special:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-nail-gold flex-shrink-0" />
                  <span>Custom designs tailored to your style</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-nail-gold flex-shrink-0" />
                  <span>Premium quality products and tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-nail-gold flex-shrink-0" />
                  <span>Hygienic and comfortable environment</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-nail-gold flex-shrink-0" />
                  <span>Attention to detail in every service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center p-6 bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;