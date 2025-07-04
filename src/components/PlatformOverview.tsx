import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, FileText, MessageSquare, CreditCard, BarChart3, Video, Shield } from "lucide-react";

const PlatformOverview = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "Smart Scheduling",
      description: "AI-powered calendar management with automated reminders and conflict prevention"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community Hub",
      description: "Structured discussion spaces with moderation tools and engagement analytics"
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: "Content Library",
      description: "Centralized resource management with version control and easy sharing"
    },
    {
      icon: <Video className="h-8 w-8 text-red-600" />,
      title: "Video Sessions",
      description: "Built-in video calling with recording, screen sharing, and breakout rooms"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-orange-600" />,
      title: "Payment Processing",
      description: "Integrated billing with subscription management and automated invoicing"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
      title: "Analytics Dashboard",
      description: "Track engagement, revenue, and growth with detailed insights and reports"
    }
  ];

  return (
    <section id="platform" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 md:mb-6 bg-blue-100 text-blue-800 border-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-full">
            <Shield className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            All-in-One Platform
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2 leading-tight">
            <span className="block mb-2 md:mb-0">Everything you need to</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              manage and scale your coaching business
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Prime centralizes all the essential tools for coaching into one intuitive platform. 
              From scheduling to payments, content sharing to community engagement, we've got you covered.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4 md:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center leading-tight">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Ready to see Prime in action?
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base md:text-lg px-8 md:px-10 py-3 md:py-4 h-auto rounded-full min-h-[48px]">
            Explore All Features
            <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
