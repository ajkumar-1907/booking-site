import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Sparkles className="w-8 h-8 text-nail-gold opacity-70" />
      </div>
      <div className="absolute bottom-32 right-16 animate-bounce delay-1000">
        <Sparkles className="w-6 h-6 text-nail-rose-light opacity-60" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold font-playwrite text-foreground mb-6 tracking-tight">
          Beautiful Nails
          <span className="block bg-gradient-primary font-michroma bg-clip-text text-transparent">
            Made Perfect
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your nails with our professional nail artistry. From classic elegance to creative designs, we bring your vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToBooking}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Appointment
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg transition-all duration-300"
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;