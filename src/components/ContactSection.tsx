import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  const handleCall = () => {
    window.open('tel:+1234567890', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:hello@nailstudio.com', '_self');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/nailstudio', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://facebook.com/nailstudio', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book your appointment or have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  123 Beauty Street<br />
                  Downtown District<br />
                  City, State 12345
                </p>
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button onClick={handleCall} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              <Button onClick={handleEmail} variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={handleInstagram} variant="outline" size="icon" className="rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button onClick={handleFacebook} variant="outline" size="icon" className="rounded-full">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
            <CardHeader>
              <CardTitle>Find Us</CardTitle>
              <CardDescription>
                Located in the heart of downtown, easily accessible by car or public transport
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-80 bg-gradient-hero rounded-b-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center text-primary-foreground">
                  <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm opacity-90">Click to view full map</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Dream Nails?</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Don't wait to transform your nails! Book your appointment today and let us create something beautiful together.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-card text-card-foreground hover:bg-card/90"
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;