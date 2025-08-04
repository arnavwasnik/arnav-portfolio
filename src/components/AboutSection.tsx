import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-hero-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card-gradient border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                   I'm Arnav Wasnik, a Full Stack Developer and AI/ML enthusiast driven by curiosity and a desire to build meaningful digital products. My journey started with experimenting on small web projects and has grown into a strong foundation in frontend, backend, and intelligent systems. I enjoy turning complex ideas into user-friendly experiences that solve real-world problems.

                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Outside of coding, I love exploring new technologies and expanding my AI/ML skills. I'm always learning, experimenting, and pushing myself to grow as a developer.

                </p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
<CardContent className="p-8">
  <h3 className="text-2xl font-semibold mb-4 text-accent">What I Do</h3>
  <ul className="space-y-3 text-muted-foreground">
    <li className="flex items-center">
      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
      Full Stack Web Development
    </li>
    <li className="flex items-center">
      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
      AI/ML Integration & Experimentation
    </li>
    <li className="flex items-center">
      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
      Mobile App Development with FlutterFlow
    </li>
    <li className="flex items-center">
      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
      Firebase & Backend Implementation
    </li>
    <li className="flex items-center">
      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
      Real-World Problem Solving with Scalable Apps
    </li>
  </ul>
</CardContent>

            </Card>
          </div>

          <Card className="mt-8 bg-card-gradient border-primary/20 shadow-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Let's Build Something Amazing Together</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                I'm always open to new ideas, fresh challenges, and meaningful collaborations. Whether you're planning something big or just getting started, I bring focus, creativity, and a problem-solving mindset to every project.

              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;