import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaDocker, FaFigma, FaVuejs, FaAws,  FaJava, FaBrain } from "react-icons/fa";
import { SiTypescript,  SiFirebase,  SiNginx, SiMysql,SiHostinger, SiFlutter, SiTailwindcss, SiMongodb, SiPostgresql, SiGraphql, SiNextdotjs, SiJest, SiCypress, SiWebpack } from "react-icons/si";




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

  
  const technologies = [
   
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "FlutterFlow", icon: <SiFlutter className="text-[#0465E3]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
 { name: "Machine Learning", icon: <FaBrain className="text-pink-500" /> },
 { name: "Hostinger", icon: <SiHostinger className="text-[#3E70BB]" /> },
 { name: "Nginx", icon: <SiNginx className="text-[#3E70BB]" /> },
 { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },


  ];

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
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-default"
                >
                  <div className="text-3xl mb-2 group-hover:animate-bounce">
                    {tech.icon}
                  </div>
                  <span className="text-xs font-medium text-center text-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;