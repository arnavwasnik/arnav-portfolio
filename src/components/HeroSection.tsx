import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              Hi, I'm <span className="block">Arnav Wasnik</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A passionate <span className="text-primary font-semibold">Full Stack Developer</span> & 
              <span className="text-accent font-semibold"> AI/ML Developer</span> creating 
              digital experiences that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 shadow-elegant hover:shadow-glow transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-2 bg-card-gradient border-primary/20 shadow-card animate-float">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Profile"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-10 rounded-lg"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
