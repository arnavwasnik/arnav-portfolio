import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiGooglemaps, SiFirebase, SiNginx, SiPm2, SiVite, SiNextdotjs, SiFlutter } from "react-icons/si";

const ProjectsSection = () => {
  const navigate = useNavigate();

  // Technology icon mapping
  const techIcons: { [key: string]: JSX.Element } = {
    "React": <FaReact className="text-[#61DAFB]" />,
    "TypeScript": <SiTypescript className="text-[#3178C6]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
    "Vite": <SiVite className="text-[#646CFF]" />,
    "Node.js": <FaNodeJs className="text-[#339933]" />,
    "Express.js": <SiExpress className="text-foreground" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "Firebase": <SiFirebase className="text-[#FFCA28]" />,
    "JavaScript": <FaJs className="text-[#F7DF1E]" />,
    "Python": <FaPython className="text-[#3776AB]" />,
    "CSS3": <FaCss3Alt className="text-[#1572B6]" />,
    "HTML5": <FaHtml5 className="text-[#E34F26]" />,
    "PM2":  <SiPm2 className="text-[#000000]" />,
    "React-Inline": <FaReact className="text-[#61DAFB]" />,
    "Nginx": <SiNginx className="text-[#269539]" />,
    "Google Maps API":  <SiGooglemaps className="text-[#4285F4]" />,
    "Next.js": <SiNextdotjs className="text-[#000000]" />,
    "Flutter": <SiFlutter className="text-[#02569B]" />
  };

  const personalProjects = [
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, professional design, and responsive layout for all devices.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "https://arnavwasnikportfolio.netlify.app/",
      githubUrl: "#"
    },
    {
      id: "concrete-ml",
      title: "Predicting Concrete Compressive Strength using Machine Learning Models",
      description: "Built ML models to predict the compressive strength of concrete based on ingredient mix proportions and curing duration (7, 14, and 21 days). Applied regression algorithms like Linear Regression, Random Forest, and XGBoost to identify optimal combinations for construction use.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "fruit-cnn",
      title: "Smart classification of Fruits and Vegetables using CNN",
      description: "Developed a Convolutional Neural Network to classify different fruits and vegetables based on image data. Achieved high accuracy by training on a labeled dataset and optimizing the model with data augmentation and tuning.",
      technologies: ["Python", "TensorFlow/Keras", "OpenCV", "NumPy", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const industryProjects = [
    {
      id: "ful2win",
      title: "Ful2Win",
      description: "Contributed to multiple pages and functionalities of a production-grade gaming rewards platform. Developed frontend features using React, integrated multiple games, handled deployment on VPS using PM2 and Nginx, managed domains, and ensured smooth real-time gameplay events with leaderboard integration.",
      technologies: ["React", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "VPS", "PM2", "Nginx"],
      liveUrl: "#"
    },
    {
      id: "dastarkhawn",
      title: "Dastarkhawn - Food Delivery Platform",
      description: "Worked on a full-stack delivery platform across three apps (User, Restaurant, Delivery Agent) and the React-based landing page. Built multiple pages in FlutterFlow, handling complete frontend flows for login/signup and real-time updates. Managed Firebase backend, including authentication, Firestore, and Realtime DB, ensuring smooth data sync across apps. Implemented location fetching and tracking using Google Maps API via Google Console.",
      technologies: ["Flutter", "Firebase", "React", "React-Inline","Google Maps API", "Cloud Functions"],
      liveUrl: "#"
    },
    {
      id: "retailcraft",
      title: "Retail Craft Asia Website",
      description: "Worked on the full website: added pages, updated existing content, implemented animations, made the site fully mobile responsive, performed end-to-end QA for functionality and design consistency, and added multilingual support (English & Thai).",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "Animations", "Multilingual"],
      liveUrl: "https://retailcraftasia.com/"
    },
    {
      id: "p3sglobal",
      title: "P3s Global Website",
      description: "Developed from scratch a full company website showing achievements, gallery, company details, revenue, and best practices. Built using React and TypeScript with a responsive, modern layout.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Gallery"],
      liveUrl: "#"
    },
    {
      id: "carlonis",
      title: "Carlonis Website",
      description: "Worked on a Next.js + Payload CMS website: made content changes, added new cards and containers, updated links, and improved overall UI/UX. Did not build from scratch but optimized and maintained features.",
      technologies: ["Next.js", "Payload CMS", "React", "Tailwind CSS", "Content Updates"],
      liveUrl: "#"
    }
  ];

  const renderProjectCard = (project: any) => (
    <Card key={project.id} className="bg-card-gradient border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
      <CardHeader>
        <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors duration-300">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech: string, idx: number) => (
            <div key={idx} className="group flex items-center gap-2 p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105">
              <div className="text-lg group-hover:animate-pulse">
                {techIcons[tech] || <Badge variant="secondary" className="text-xs">{tech}</Badge>}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 transition-all duration-300"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            View Details
          </Button>
          {project.liveUrl && (
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-hero-gradient bg-clip-text text-transparent">
          My Projects
        </h2>

        {/* Personal Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {personalProjects.map(renderProjectCard)}
        </div>

        {/* Industry Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-accent">Industry Projects</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryProjects.map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
