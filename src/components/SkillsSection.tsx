import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
skills: [
  { name: "React", level: 95 },
  { name: "FlutterFlow", level: 90 },
  { name: "Tailwind CSS", level: 82 },
  { name: "Javascript", level: 81 },
  { name: "Vite", level: 80 },
]

    },
    {
      title: "Backend",
      skills: [
        { name: "JAVA", level: 90 },
        { name: "Python", level: 82 },
        { name: "Node js", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 75 },
       { name: "VPS Deployment (Nginx, PM2)", level: 78 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Firebase", level: 78 },
        { name: "AWS", level: 72 },
        { name: "Figma", level: 88 },
        { name: "Conversational AI Development", level: 85 }
      ]
    }
  ];

  const technologies =[
  "React", "TypeScript", "Tailwind CSS", "Firebase", "FlutterFlow",
  "Python", "SQL", "MongoDB", "Machine Learning", "Model Training",
  "Git", "Figma", "VPS Deployment", "REST APIs", "Generative AI"
]
;

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-hero-gradient bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        {/* Skill Bars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card-gradient border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-skill-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <Card className="bg-card-gradient border-primary/20 shadow-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-accent">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;