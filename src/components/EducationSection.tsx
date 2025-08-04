import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence",
      institution: "G H Raisoni College of Engineering and Management, Nagpur",
      period: "2022 - 2026",
      location: "Nagpur, Maharashtra",
      description: "Currently pursuing Bachelor's degree in Artificial Intelligence with focus on software development, Machine Learning, algorithms, and web technologies.",
      gpa: "7.53/10",
      status: "Final Year"
    },
    {
      degree: "HSC (12th Grade)",
      institution: "Dinanath Jr College",
      period: "2021 - 2022",
      location: "Nagpur, Maharashtra", 
      description: "Completed HSC education with Science stream (PCMB+IT - Physics, Chemistry, Mathematics, Biology, Information Technology).",
      //gpa: "85%",
      status: "Completed"
    },
    {
      degree: "SSC (10th Grade)",
      institution: "Bishop Cotton High School", 
      period: "2019 - 2020",
      location: "Nagpur, Maharashtra",
      description: "Completed secondary education with excellent academic performance.",
      gpa: "77%",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      name: "Artificial Intelligence and Machine Learning Internship",
      issuer: "Ybi Foundation",
      date: "2024",
      credentialId: "Credential ID ONEOOS8G1WL9T"
    },
    {
      name: "Introduction to Generative AI with Google Cloud",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "Udacity"
    },
    {
      name: "Data Science & Analytics",
      issuer: "HP LIFE", 
      date: "2025",
     // credentialId: ""
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-hero-gradient bg-clip-text text-transparent">
          Education & Certifications
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-center mb-8 text-accent">Education</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card-gradient border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-primary mb-2">{edu.degree}</h4>
                      <p className="text-accent font-medium mb-1">{edu.institution}</p>
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>{edu.period}</span>
                        <span className="text-primary font-medium">{edu.status}</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">Grade: {edu.gpa}</p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-semibold text-center mb-8 text-accent">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card-gradient border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {cert.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                    <p className="text-foreground text-sm mb-3 font-medium">{cert.date}</p>
                    <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                      {cert.credentialId}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;