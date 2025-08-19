import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Gem, Crown, Sparkles, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; 

const services = [
  {
    icon: Palette,
    title: "Basic Polish",
    description: "Classic nail polish application on natural nails",
    price: "From ₹200",
    features: ["Clean & Shape", "Cuticle Care", "Base & Top Coat", "Color Application"],
    popular: false
  },
  {
    icon: Sparkles,
    title: "Nail Extensions",
    description: "Professional nail extensions with gel or acrylic",
    price: "From ₹350",
    features: ["Length Extension", "Shape Customization", "Strengthening", "Natural Look"],
    popular: true
  },
  {
    icon: Heart,
    title: "Nail Art Design",
    description: "Creative nail art with unique patterns and designs",
    price: "From ₹500",
    features: ["Custom Designs", "Hand-painted Art", "Pattern Work", "Color Mixing"],
    popular: false
  },
  {
    icon: Gem,
    title: "3D Nail Art (Full Set)",
    description: "Dimensional nail art with raised elements and textures",
    price: "From ₹1100",
    features: ["3D Elements", "Textured Designs", "Sculptural Art", "Premium Materials"],
    popular: false
  },
  {
    icon: Star,
    title: "Full Set Premium",
    description: "Complete nail makeover with premium treatments",
    price: "From ₹800",
    features: ["Full Set Application", "Premium Products", "Detailed Art", "Long-lasting"],
    popular: true
  },
  {
    icon: Crown,
    title: "Bridal Package",
    description: "Special bridal nail designs for your perfect day",
    price: "From ₹1200+",
    features: ["Bridal Consultation", "Trial Session", "Wedding Day Service", "Touch-up Kit"],
    popular: false
  }
];

const addOns = [
  { name: "Rhinestones", price: "₹30/ Nail" },
  { name: "Studs & Charms", price: "₹30/ Nail" },
  { name: "Chrome Finish", price: "₹30/ Nail" },
  { name: "Matte Top Coat", price: "₹30/ Nail" },
  { name: "Quick Dry", price: "₹30/ Nail" }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of professional nail services, from classic elegance to creative artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="relative group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-border/50">
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 text-nail-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="bg-gradient-card rounded-lg p-8 shadow-soft">
          <h3 className="text-2xl font-bold mb-6 text-center">Add-Ons & Extras</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-border hover:bg-accent/20 transition-colors">
                <div className="font-semibold text-sm mb-1">{addon.name}</div>
                <div className="text-primary font-bold text-sm">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ⬇️ Shop Button */}
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button
              className="
                bg-gradient-to-r from-primary to-accent 
                text-white font-semibold 
                px-8 py-4 
                rounded-xl 
                shadow-soft 
                hover:shadow-elegant 
                transform hover:-translate-y-1 
                transition-all duration-300
                "
              >
            Visit Shop
          </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;