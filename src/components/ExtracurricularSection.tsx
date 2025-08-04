import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExtracurricularSection = () => {
  const activities = [
    {
      title: "Secretary & Newsletter Editor-in-Chief",
      organization: "AI Club, GHRCEMN",
      period: "2024 - 2025",
      description: "Led strategic initiatives for the AI Club including managing operations, planning technical sessions, and publishing the official newsletter. Coordinated with team members and faculty to foster an engaging environment for AI and ML enthusiasts.",
      achievements: ["Published monthly newsletters covering AI Department News", "Boosted club engagement and event participation"],
      skills: ["Leadership", "Team Management", "Event Planning", "Content Writing", "Editing"]
    },
    {
      title: "NSS Volunteer",
      organization: "National Service Scheme (NSS) ",
      period: "2024",
      description: "Participated in a community outreach program at ZP Digital School, Linga, Katol. Conducted awareness sessions on hygiene and cleanliness, and introduced school students to AI and engineering through live demos.",
        achievements: ["Inspired 30+ students through hands-on demonstrations", "Promoted social responsibility and cleanliness awareness"],
      skills: ["Public Speaking", "Community Engagement", "Social Responsibility", "Teamwork, Presentation"]
    },
    {
      title: " Event Organizer",
      organization: "GHRCEMN",
      period: "24-25",
      description: "Spearheaded the organization of multiple college-level events, overseeing promotion, logistics, crowd management, and coordination with sponsors and participants.",
        achievements: ["Successfully managed events with 100+ attendees", "Increased event reach through strategic promotion","Ensured smooth execution and positive feedback"],
      skills: ["Event Management", "Marketing", "Communication", "Problem Solving", "Leadership"]
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Extracurricular Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond academics, I actively participate in various activities that help me grow personally and professionally.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 animate-slide-in-left border-l-4 border-l-primary/50 hover:border-l-primary"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                      {activity.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary/80">
                      {activity.organization}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="self-start md:self-center">
                    {activity.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {activity.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                 <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Skills Learned:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularSection;