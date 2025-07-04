
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Video, FileText, MessageSquare, Calendar, BarChart3, Shield, Zap, Activity, Bot } from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Community Building",
      description: "Create dedicated spaces for your audience to connect and engage",
      details: ["Private member areas", "Discussion forums", "Group challenges", "Member directories"]
    },
    {
      icon: <Video className="h-8 w-8 text-purple-600" />,
      title: "Interactive Sessions",
      description: "Host live events, webinars, and workshops seamlessly",
      details: ["HD video conferencing", "Screen sharing", "Recording capabilities", "Breakout rooms"]
    },
    {
      icon: <FileText className="h-8 w-8 text-green-600" />,
      title: "Premium Content",
      description: "Share exclusive content and resources with your community",
      details: ["Course creation", "Digital downloads", "Progressive content unlock", "Content analytics"]
    },
    {
      icon: <Activity className="h-8 w-8 text-red-600" />,
      title: "Engagement Tracking",
      description: "Monitor how actively your customers engage with sessions and content",
      details: ["Real-time engagement metrics", "Content interaction tracking", "Session attendance analytics", "Participation insights"]
    },
    {
      icon: <Bot className="h-8 w-8 text-indigo-600" />,
      title: "AI-Powered Automation",
      description: "Automate routine tasks to focus on what matters most",
      details: ["Auto-scheduling calendar invites", "Session summary generation", "Smart notifications", "Workflow automation"]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-orange-600" />,
      title: "Unified Communication",
      description: "All your messaging and engagement tools in one place",
      details: ["Direct messaging", "Group chats", "Automated sequences", "Smart notifications"]
    }
  ];

  const advancedFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance"
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "API Integrations",
      description: "Connect with 500+ third-party tools"
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "White-label Options",
      description: "Customize platform with your branding"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 px-4 py-2 text-sm md:text-base">
            Platform Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Everything You Need to Scale
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Powerful features designed specifically for coaches and subject matter experts 
            to build, engage, and monetize their expertise.
          </p>
        </div>
        
        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center leading-tight">{feature.title}</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-center text-sm md:text-base leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advanced Features */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Advanced Capabilities</h3>
            <p className="text-blue-100 text-base md:text-lg">Enterprise-grade features for scaling businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white/10 rounded-xl p-4 md:p-6">
                <div className="flex justify-center mb-3 md:mb-4 bg-white/20 rounded-full w-12 h-12 md:w-16 md:h-16 items-center mx-auto">
                  {feature.icon}
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h4>
                <p className="text-blue-100 text-sm md:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
