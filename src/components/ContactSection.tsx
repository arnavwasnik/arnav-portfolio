import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-hero-gradient bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-card-gradient border-primary/20 shadow-card">
            <CardContent className="p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">arnavwasnik405@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary">📱</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 7709773462</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Nagpur, MH</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-card-gradient border-primary/20 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open("https://www.linkedin.com/in/arnav-wasnik", "_blank")}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open("https://github.com/arnavwasnik", "_blank")}
                >
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open("https://twitter.com", "_blank")}
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open("https://arnavwasnikportfolio.netlify.app", "_blank")}

                >
                  Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
