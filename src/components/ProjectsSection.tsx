import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const personalProjects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, professional design, and responsive layout for all devices.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      title: "Predicting Concrete Compressive Strength using Machine Learning Models",
      description: "Built ML models to predict the compressive strength of concrete based on ingredient mix proportions and curing duration (7, 14, and 21 days). Applied regression algorithms like Linear Regression, Random Forest, and XGBoost to identify optimal combinations for construction use.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"]
    },
    {
      title: "Smart classification of Fruits and Vegetables using CNN",
      description: "Developed a Convolutional Neural Network to classify different fruits and vegetables based on image data. Achieved high accuracy by training on a labeled dataset and optimizing the model with data augmentation and tuning.",
      technologies: ["Python", "TensorFlow/Keras", "OpenCV", "NumPy", "Matplotlib"]
    }
  ];

  const industryProjects = [
    {
      title: "Gaming Rewards Platform",
      description: "Contributed to a production-grade gaming rewards platform. Built responsive frontend pages using FlutterFlow, developed a custom admin panel, and deployed the complete system to a VPS with domain configuration. Also handled user authentication and integrated leaderboard logic for real-time gameplay events.",
      technologies: ["React", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "VPS", "PM2", "Nginx"]
    },
    {
      title: "Food Delivery App for Restaurants",
      description:  "Currently working in a team on an industry-grade, full-stack delivery platform with modules for User, Restaurant, Delivery Agent, and Admin Panel. Building key flows in FlutterFlow for ordering, real-time updates, and location tracking via Google Maps API.Designing the database schema and implementing a real-time Firebase backend (Auth, Firestore, Realtime DB).Developing frontend pages and contributing to the React-based Admin Panel with secure auth, analytics, and CRUD.Collaborating on backend APIs for smooth, optimized communication across all modules.",
      technologies: ["FlutterFlow", "Firebase", "React", "React-Inline","Google Maps API", "Cloud Functions"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-hero-gradient bg-clip-text text-transparent">
          My Projects
        </h2>

        {/* All Personal Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {personalProjects.map((project, index) => (
            <Card key={index} className="bg-card-gradient border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 space-y-4">
                <h4 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Internship Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-accent">Industry Projects</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {industryProjects.map((project, index) => (
            <Card key={index} className="bg-card-gradient border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 space-y-4">
                <h4 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
