import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Java Full-Stack Development Intern",
      company: "BoostNow Solutions",
      period: "June 2024 - Present",
      location: "Remote",
      type: "Internship",
      description:
        "Contributing to live industry projects involving user-centric applications in the gaming and delivery domains. Focused on frontend and backend development, authentication flows, scalable deployments, and admin dashboard integration.",
      achievements: [
        "Built responsive frontend interfaces using React and Tailwind CSS",
        "Implemented real-time Backend with database design and Google Maps integration. ",
        "Implemented user authentication and form validations",
        "Deployed full-stack applications to VPS with PM2 and Nginx",
        "Assisted in building admin panel dashboards and handling production environments"
      ],
      technologies: [
        "React",
        "FlutterFlow",
        "Tailwind CSS",
        "JavaScript",
        "Node.js",
        "Firebase",
        "VPS",
        "Php",
        "Next.js",
        "PM2",
        "Nginx"
      ]
    },
    {
      title: "AI/ML Intern",
      company: "YBI Foundation",
      period: "Nov 2024 - Dec 2024",
      location: "Remote",
      type: "Internship",
      description:
        "Completed a 1-month internship focused on applying machine learning models to real-world datasets. Gained hands-on experience in data preprocessing, model training, evaluation, and deployment using industry-relevant tools.",
      achievements: [
        "Built a sales prediction model using Random Forest Regressor",
        "Performed sentiment analysis on financial market news articles",
        "Developed a customer review classification model for product feedback",
        "Practiced model tuning, feature engineering, and evaluation techniques"
      ],
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Google Colab",
        "Machine Learning"
      ]
    },
    {
      title: "NGO Internship",
      company: "Kalpvruksh Tree Foundation",
      period: "15-day program",
      location: "Nagpur",
      type: "NGO",
      description: "Participated in a focused 15-day tree plantation and maintenance initiative with the Kalpvruksh Tree Foundation. Contributed to environmental conservation efforts by planting and caring for native species.",
      achievements: [
        "Planted and maintained Kadu Neem (Margosa/Indian Lilac) saplings",
        "Supported daily watering, soil care, and protective measures for young trees",
        "Assisted team members in monitoring sapling growth and health",
        "Developed a deeper understanding of sustainable urban greening practices"
      ],
      technologies: [ "Environmental Conservation",
        "Tree Plantation",
        "Teamwork",
        "Leadership",
        "Communication"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-hero-gradient bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/30"></div>

            {experiences.map((experience, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
                  <Card className="bg-card-gradient border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-primary">
                            {experience.title}
                          </h3>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              experience.type === 'NGO' 
                                ? 'border-green-500 text-green-400' 
                                : 'border-blue-500 text-blue-400'
                            }`}
                          >
                            {experience.type}
                          </Badge>
                        </div>
                        <p className="text-accent font-medium">{experience.company}</p>
                        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-muted-foreground mt-2">
                          <span>{experience.period}</span>
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;