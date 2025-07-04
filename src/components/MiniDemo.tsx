import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Calendar, Users, FileText, MessageSquare, BarChart3, ArrowRight } from "lucide-react";

const MiniDemo = () => {
  const demoFeatures = [
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: "Smart Scheduling",
      description: "See how AI prevents double bookings"
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Community Management",
      description: "Experience structured discussions"
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      title: "Content Organization",
      description: "Explore the centralized library"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-600" />,
      title: "Analytics Dashboard",
      description: "View real-time insights"
    }
  ];

  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 md:mb-6 bg-purple-100 text-purple-800 border-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-full">
            <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            See Prime in Action
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2 leading-tight">
            <span className="block mb-2 md:mb-0">A Glimpse into the</span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent block">
              Future of Coaching
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Explore key features with our interactive mini-demo. See how Prime streamlines your workflow and enhances the coaching experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {demoFeatures.map((feature, index) => (
            <Card key={index} className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center justify-center">
                <div className="mb-4 md:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center leading-tight">{feature.title}</h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to dive deeper?
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-base md:text-lg px-8 md:px-10 py-3 md:py-4 h-auto rounded-full">
            Explore Full Demo
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MiniDemo;
