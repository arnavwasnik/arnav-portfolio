import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiGooglemaps, SiMongodb, SiExpress, SiFirebase, SiStripe, SiVite, SiSupabase, SiNextdotjs, SiPostgresql } from "react-icons/si";
import Navbar from "@/components/Navbar";

const ProjectDetails = () => {
  const { projectId } = useParams();
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
  "Stripe API": <SiStripe className="text-[#635BFF]" />,
  "JavaScript": <FaJs className="text-[#F7DF1E]" />,
  "Firebase": <SiFirebase className="text-[#FFCA28]" />,
  "CSS3": <FaCss3Alt className="text-[#1572B6]" />,
  "HTML5": <FaHtml5 className="text-[#E34F26]" />,
  "Python": <FaPython className="text-[#3776AB]" />,
  "Git": <FaGitAlt className="text-[#F05032]" />,
  "Docker": <FaDocker className="text-[#2496ED]" />,
  "Supabase": <SiSupabase className="text-[#3ECF8E]" />,
  "Next.js": <SiNextdotjs className="text-foreground" />,
  "PostgreSQL": <SiPostgresql className="text-[#336791]" />,
 "Google Maps API":  <SiGooglemaps className="text-[#4285F4]" />,
  // Missing / New icons
  "Scikit-learn": <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold">SK</div>,
  "Pandas": <div className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold">PD</div>,
  "Matplotlib": <div className="w-10 h-10 bg-purple-400 text-white rounded-full flex items-center justify-center text-sm font-bold">MP</div>,
  "TensorFlow/Keras": <div className="w-10 h-10 bg-orange-400 text-white rounded-full flex items-center justify-center text-sm font-bold">TF</div>,
  "OpenCV": <div className="w-10 h-10 bg-red-400 text-white rounded-full flex items-center justify-center text-sm font-bold">CV</div>,
  "NumPy": <div className="w-10 h-10 bg-indigo-400 text-white rounded-full flex items-center justify-center text-sm font-bold">NP</div>,
  "VPS": <div className="w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold">VPS</div>,
  "PM2": <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">PM2</div>,
  "Nginx": <div className="w-10 h-10 bg-green-400 text-white rounded-full flex items-center justify-center text-sm font-bold">NX</div>,
  "Flutter": <div className="w-10 h-10 bg-blue-300 text-white rounded-full flex items-center justify-center text-sm font-bold">FL</div>,
  "React-Inline": <div className="w-10 h-10 bg-pink-400 text-white rounded-full flex items-center justify-center text-sm font-bold">RI</div>,
  //"Google Maps API": <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">GM</div>,
  "Cloud Functions": <div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">CF</div>,
  "Responsive Design": <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">RD</div>,
  "Animations": <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold">AN</div>,
  "Multilingual": <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">ML</div>,
  "Content Updates": <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">CU</div>
};

  // Mock project data - in real app, this would come from API/database
  // Inside ProjectDetails component, update projectsData

const projectsData = {
  personal: [
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, professional design, and responsive layout for all devices.",
      longDescription: "This portfolio website showcases my skills and projects with a modern design approach. Built using React 18 with TypeScript for type safety, styled with Tailwind CSS for rapid UI development, and deployed using modern web technologies. The site features smooth animations, responsive design, dark theme, and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lovable"],
      images: [
          "/projects/portfolio1 (4).png",
  "/projects/portfolio1 (1).png",
  "/projects/portfolio1 (2).png",
  "/projects/portfolio1 (3).png"

],
      liveUrl: "https://arnavwasnikportfolio.netlify.app/",
      githubUrl: "#",
      features: [
        "Responsive design for all devices",
        "Dark/Light theme support",
        "Smooth scroll animations",
        "Contact form integration",
        "Performance optimized"
      ],
      challenges: [
        "Implementing smooth animations without performance impact",
        "Creating responsive design that works on all devices",
        "Optimizing for fast loading times"
      ]
    },
    {
      id: "concrete-ml",
      title: "Predicting Concrete Compressive Strength using Machine Learning Models",
      description: "Developed machine-learning models to accurately predict the compressive strength of concrete based on mix proportions, water–cement ratio, and curing conditions (7, 14, 28 days). The project replaces slow, destructive 28-day lab tests with instant, non-destructive predictions to support real-time construction decisions.",
      technologies: ["Python", "Scikit-learn", "Pandas","Random Forest", "Matplotlib"],
      images: [
         "/projects/concrete1 (1).png",
         "/projects/concrete1 (2).png",
         "/projects/concrete1 (3).png",
         "/projects/concrete1 (4).png",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/arnavwasnik/concrete-strength-prediction",
      features: ["High-accuracy strength predictions (mean CV accuracy ~91.5%)",
    "User-friendly tool for instant strength estimates",
    "Supports sustainable construction by reducing waste and costs"],
      challenges: ["Handling non-linear relationships in concrete mix data",
    "Ensuring model generalization across varying curing conditions"]
    },

    {
      id: "fruit-cnn",
      title: "Smart classification of Fruits and Vegetables using CNN",
      description:   "Built a deep-learning system to automatically classify fruits and vegetables from images for applications in agriculture, food processing, and retail. Used Convolutional Neural Networks with transfer learning (ResNet, Inception, EfficientNet) to achieve high accuracy even with limited data.",
      technologies: ["Python", "TensorFlow/Keras", "OpenCV", "NumPy", "Matplotlib"],
      images: [
         "/projects/fruitcnn1 (1).jpg",
         "/projects/fruitcnn1 (2).jpg",
         "/projects/fruitcnn1 (3).jpg",
         "/projects/fruitcnn1 (4).jpg",
         "/projects/fruitcnn1 (5).jpg"
         
      ],
      liveUrl: "#",
      githubUrl: "#",
      features: ["High-accuracy image classification using CNN + transfer learning",
    "Robust to variations in ripeness, size, and lighting",
    "Real-time prediction interface for automated sorting and billing"],
      challenges: ["Handling appearance changes across seasons and maturation",
    "Collecting and preprocessing a diverse image dataset"]
    }
  ],

  industry: [
    {
      id: "ful2win",
      title: "Ful2Win",
      description:  "Built and maintained a full-stack gaming rewards platform where players compete in multiple real-time games and tournaments with live leaderboards. Started with a React + Tailwind front end, later migrated major flows to FlutterFlow for rapid iteration. Deployed and scaled the production app on a VPS using PM2 and Nginx, and personally managed domain setup and SSL to ensure smooth, always-on gameplay.",
      technologies: ["React", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "VPS", "PM2", "Nginx"],
      images: [
        "/projects/ful2win (1).png",
        "/projects/ful2win (2).png",
        "/projects/ful2win (3).png",
        "/projects/ful2win (4).png"
      ],
      liveUrl: "#",
      githubUrl: "#",
      features: [ "Multi-game tournaments with real-time leaderboard updates",
        "Seamless migration from React to FlutterFlow for faster feature delivery",
        "Scalable VPS deployment with PM2 process management and Nginx reverse proxy",
        "Custom domain management and SSL configuration for reliable, secure access"],
      challenges: ["Ensuring low-latency gameplay across multiple concurrent tournaments",
    "Managing zero-downtime deployments during active competitions"]
    },
    {
      id: "dastarkhawn",
      title: "Dastarkhawn - Food Delivery Platform",
      description:  "Contributed as a full-stack developer to a food-delivery ecosystem with four products: User, Restaurant, and Delivery Agent apps (FlutterFlow) plus a React-based Admin Panel. Built and maintained login/registration/password flows, profile management, and real-time features across all apps using Firebase Authentication, Firestore, and Realtime Database. Implemented Google Maps–powered location fetch and live tracking, and configured the Google Cloud Console for API management. Added push notifications and custom dashboards in the Admin Panel for delivery-agent approvals and order status updates. Worked on both front-end and back-end logic, ensuring instant data sync whenever changes occurred in any app.",
      technologies: ["Flutter", "Firebase", "React", "React-Inline","Google Maps API", "Cloud Functions"],
      images: [
        "/projects/dastarkhan (1).jpg",
        "/projects/dastarkhan (6).jpg",
         "/projects/dastarkhan (2).jpg",
          "/projects/dastarkhan (3).png",
          "/projects/dastarkhan (5).jpg",
         
           "/projects/dastarkhan (4).png"
      ],
      liveUrl: "#",
      githubUrl: "#",
      features: ["User, Restaurant, and Delivery Agent apps built with FlutterFlow",
    "React-based Admin Panel with dashboards and approval workflows",
    "Real-time database updates across all apps via Firebase",
    "Google Maps integration for live order tracking and location fetch",
    "Push notifications for registrations and order updates"],
      challenges: ["Maintaining instant data synchronization across four interconnected apps",
    "Managing API keys and Google Cloud resources for live location services"]
    },
    {
      id: "retailcraft",
      title: "Retail Craft Asia Website",
      description: "Contributed to an existing corporate website by implementing smooth-scroll animations, refining the color theme, and enhancing overall UX/UI. Added new content sections including management team profiles with bios, and made the site fully bilingual (English & Thai) by integrating Google Translate and handling layout adjustments for both languages. Performed end-to-end QA to ensure mobile responsiveness, accessibility, and design consistency across all pages.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "Animations", "Multilingual"],
      images: [
        "/projects/retailcraft (1).png",
          "/projects/retailcraft (2).png",
            "/projects/retailcraft (3).png",
              "/projects/retailcraft (4).png"
      ],
      liveUrl: "https://retailcraftasia.com/",
      githubUrl: "#",
      features: [  "Smooth-scroll animations and refined color theme",
        "Management team section with member bios",
        "Full bilingual support (English & Thai) using Google Translate integration",
        "Mobile-first responsive design with cross-browser testing"],
      challenges: [ "Ensuring accurate layout and font rendering for both English and Thai",
        "Maintaining consistent animations and styles across devices and languages"]
    },
    {
      id: "p3sglobal",
      title: "P3s Global Website",
      description:  "Designed and developed a complete corporate website from scratch using React and TypeScript with a responsive, modern layout accented in emerald and gold. Implemented multiple fully-styled pages including Home, About, Services, Contact, Gallery, and Achievements, along with dynamic sections such as Vision & Mission, Areas of Expertise, Past Experience, Key Awards, and embedded YouTube videos. Integrated smooth animations, image galleries, and a functional contact form to create a professional, engaging online presence.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Gallery"],
      images: [
        "/projects/p3sglobal (1).png",
         "/projects/p3sglobal (4).png",
        "/projects/p3sglobal (2).png",
        "/projects/p3sglobal (3).png"
       
      ],
      liveUrl: "https://p3sglobal.com/",
      githubUrl: "#",
      features: [ "Full multi-page layout: Home, About, Services, Gallery, Achievements, Contact",
        "Hero section with custom animations and professional emerald–gold theme",
        "Vision & Mission, Areas of Expertise, Past Experience, and Key Awards sections",
        "Embedded YouTube videos and optional free-ebook giveaway feature",
        "Responsive design with smooth scrolling and image gallery transitions"],
      challenges: [ "Balancing a rich visual design with fast load times and responsiveness",
        "Ensuring consistent animations and styling across all pages and devices"]
    },
    {
      id: "carlonis",
      title: "Carlonis Website",
      description: "Contributed to an existing Next.js + Payload CMS site by adding new content sections, cards, and containers, updating internal/external links, and refining overall UI/UX. Focused on maintaining a consistent design system and ensuring smooth CMS-driven updates without disrupting live content.",
      technologies: ["Next.js", "Payload CMS", "React", "Tailwind CSS", "Content Updates"],
      images: [
        "/projects/carlonis (1).png",
        "/projects/carlonis (2).png",
        "/projects/carlonis (3).png",
        "/projects/carlonis (4).png"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/arnavwasnik/carlonis",
      features: [ "Integrated new CMS-driven cards and containers",
        "Updated and validated internal & external links",
        "Improved layout consistency and visual hierarchy",
        "Optimized site for smoother content updates"],
      challenges: [ "Maintaining consistent styling and UX while working within an established Next.js + Payload CMS architecture"]
    }
  ]
};

  // Get all projects
  const allProjects = [...projectsData.personal, ...projectsData.industry];
  const project = allProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-24">
        {/* Back Button */}
        <Button 
          onClick={() => navigate('/')} 
          variant="ghost" 
          className="mb-8 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        {/* Project Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <Button 
              className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </div>
        </div>

         {/* Project Content */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-card-gradient">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Overview
            </TabsTrigger>
            <TabsTrigger value="gallery" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Gallery
            </TabsTrigger>
            <TabsTrigger value="tech" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Tech Stack
            </TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Features
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <Card className="bg-card-gradient border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                {project.longDescription || project.description}
                </p>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Key Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 shrink-0"></span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="animate-fade-in">
            <Card className="bg-card-gradient border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Project Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="flex justify-center">
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="max-w-full h-auto rounded-lg shadow-lg object-contain max-h-[70vh]"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tech" className="animate-fade-in">
            <Card className="bg-card-gradient border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105 hover:shadow-glow"
                    >
                      <div className="text-4xl mb-3 group-hover:animate-bounce">
                        {techIcons[tech] || <div className="w-10 h-10 bg-muted rounded-full"></div>}
                      </div>
                      <span className="text-sm font-medium text-center text-foreground">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="animate-fade-in">
            <Card className="bg-card-gradient border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                     className="flex items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent mr-3 shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectDetails;