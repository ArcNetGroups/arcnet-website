
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, Users, FileX, MessageCircleX, CreditCard } from "lucide-react";

const Problem = () => {
  const painPoints = [
    {
      icon: <Clock className="h-6 w-6 md:h-8 md:w-8 text-red-500" />,
      title: "Missed Sessions",
      description: "Double bookings and forgotten meetings hurt your professional reputation"
    },
    {
      icon: <FileX className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />,
      title: "Lost Files",
      description: "Important resources scattered across Drive, Dropbox, and email attachments"
    },
    {
      icon: <MessageCircleX className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />,
      title: "Disconnected Communities",
      description: "WhatsApp groups become chaotic, valuable discussions get buried"
    },
    {
      icon: <CreditCard className="h-6 w-6 md:h-8 md:w-8 text-purple-500" />,
      title: "Payment Headaches",
      description: "Chasing invoices across multiple platforms kills your coaching flow"
    }
  ];

  return (
    <section id="problem" className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 md:mb-6 bg-red-100 text-red-800 border-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-full">
            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            The Real Problem
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2 leading-tight">
            <span className="block mb-2 md:mb-0">Scattered tools hurt both</span>
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent block">
              coach and learner experience
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              You became a coach to transform lives, not to juggle a dozen different apps. 
              Yet here you are, switching between Zoom, WhatsApp, Google Drive, and Stripe—losing momentum with every click.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4 md:mb-6">
                {point.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center leading-tight">{point.title}</h3>
              <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Hidden Cost</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg md:text-xl">3-5 hours weekly</div>
                    <span className="text-gray-600 text-sm md:text-base">lost to admin tasks</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg md:text-xl">30% client churn</div>
                    <span className="text-gray-600 text-sm md:text-base">due to poor experience</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg md:text-xl">$2,000+ monthly</div>
                    <span className="text-gray-600 text-sm md:text-base">in lost revenue potential</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 md:p-8">
              <Users className="h-12 w-12 md:h-16 md:w-16 text-blue-600 mx-auto mb-4 md:mb-6" />
              <blockquote className="text-base md:text-lg text-gray-700 italic text-center leading-relaxed mb-4">
                "I spent more time managing tools than coaching. My clients felt it too—they were frustrated, 
                I was overwhelmed, and we both knew something had to change."
              </blockquote>
              <p className="text-center text-sm text-gray-500">— Sarah, Leadership Coach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
