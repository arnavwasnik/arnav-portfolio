import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

import certificate from "@/assets/publishcertificate.jpg";

const PublicationsSection = () => {
  const publication = {
    title: "Smart Classification of Fruits and Vegetables using CNN and Machine Learning",
    journal: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
    date: "2024",
    description:
      "Published research on using Convolutional Neural Networks for classifying fruits and vegetables based on image data.",
    link: "https://doi.org/10.55041/IJSREM47182",
    certificatePath: certificate,
    status: "Published",
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Publications & Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My contributions to the academic and professional community
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card-gradient border-primary/10 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
            <CardHeader>
              <Badge variant="default" className="mb-2 w-fit">
                {publication.status}
              </Badge>
              <CardTitle className="text-xl leading-tight">
                {publication.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-primary mt-1">
                <Calendar className="h-4 w-4" />
                {publication.journal} • {publication.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {publication.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  variant="default"
                  onClick={() => window.open(publication.link, "_blank")}
                >
                  View Publication
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(publication.certificatePath, "_blank")}
                >
                  View Certificate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
