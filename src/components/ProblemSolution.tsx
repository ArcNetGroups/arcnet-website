import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Users, Calendar, FileText, MessageSquare, CreditCard } from "lucide-react";

const ProblemSolution = () => {
  const solutions = [
    {
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      title: "Smart Scheduling",
      description: "AI-powered calendar that prevents double bookings and sends smart reminders"
    },
    {
      icon: <FileText className="h-8 w-8 text-green-500" />,
      title: "Centralized Content",
      description: "All your resources, worksheets, and materials organized in one searchable hub"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
      title: "Structured Communities",
      description: "Topic-based discussions with threaded conversations and easy moderation"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-orange-500" />,
      title: "Seamless Payments",
      description: "Integrated billing with automated invoicing and subscription management"
    }
  ];

  return (
    <section id="solution" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 md:mb-6 bg-green-100 text-green-800 border-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-full">
            <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Our Solution
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2 leading-tight">
            <span className="block mb-2 md:mb-0">A unified platform to</span>
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent block">
              streamline your entire coaching workflow
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Prime eliminates the chaos of juggling multiple tools. Finally, manage your sessions, content, and community from one place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4 md:mb-6">
                {solution.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center leading-tight">{solution.title}</h3>
              <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Ready to simplify your coaching business?</h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 md:mb-12">
            Join the waitlist and be among the first to experience the power of Prime.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-base md:text-lg px-8 md:px-10 py-3 md:py-4 h-auto rounded-full">
            Join the Waitlist
            <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
