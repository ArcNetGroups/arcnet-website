
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Users, TrendingUp, Target, CheckCircle } from "lucide-react";

const RevenueModel = () => {
  const revenueStreams = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Subscription Plans",
      description: "Monthly recurring revenue from core platform access",
      challenge: "Convincing early users to pay pre-MVP",
      status: "Primary Revenue Stream"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Tiered Pricing",
      description: "Different feature bundles for solo vs. group coaches",
      challenge: "Pricing structure that feels fair and valuable",
      status: "Multiple Options"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Platform Fees",
      description: "Percentage fee on digital products and session sales",
      challenge: "Building sufficient transaction volume early",
      status: "Growth-Based"
    }
  ];

  const roadmapSteps = [
    {
      step: "1",
      title: "Finish MVP",
      description: "Complete core features: sessions, content, community",
      status: "completed"
    },
    {
      step: "2",
      title: "Pilot Program",
      description: "Conduct pilot onboarding with early users",
      status: "in-progress"
    },
    {
      step: "3",
      title: "Payment Integration",
      description: "Integrate payment gateways (Stripe, Paystack)",
      status: "upcoming"
    },
    {
      step: "4",
      title: "A/B Testing",
      description: "Test pricing plans and free trial strategies",
      status: "upcoming"
    },
    {
      step: "5",
      title: "Public Launch",
      description: "Launch publicly with limited access",
      status: "upcoming"
    },
    {
      step: "6",
      title: "Optimize",
      description: "Collect feedback and optimize monetization",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Target className="w-4 h-4 mr-2" />
            Business Model & Revenue
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sustainable Revenue Streams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diversified revenue model ensures platform sustainability while providing 
            maximum value to coaches at every level.
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {revenueStreams.map((stream, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">{stream.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{stream.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{stream.description}</p>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-blue-900">Key Challenge:</p>
                    <p className="text-sm text-blue-700">{stream.challenge}</p>
                  </div>
                  <div className="text-center">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {stream.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Roadmap to Revenue */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Steps to First Revenue</h3>
            <p className="text-lg text-gray-600">Our strategic roadmap to sustainable monetization</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmapSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className={`flex items-start space-x-4 p-6 rounded-2xl transition-all duration-300 ${
                  item.status === 'completed' ? 'bg-green-50 border-2 border-green-200' :
                  item.status === 'in-progress' ? 'bg-blue-50 border-2 border-blue-200' :
                  'bg-gray-50 border-2 border-gray-200'
                }`}>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    item.status === 'completed' ? 'bg-green-500 text-white' :
                    item.status === 'in-progress' ? 'bg-blue-500 text-white' :
                    'bg-gray-300 text-gray-600'
                  }`}>
                    {item.status === 'completed' ? <CheckCircle className="w-6 h-6" /> : item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="mt-3">
                      <Badge variant="outline" className={
                        item.status === 'completed' ? 'bg-green-100 text-green-700 border-green-300' :
                        item.status === 'in-progress' ? 'bg-blue-100 text-blue-700 border-blue-300' :
                        'bg-gray-100 text-gray-600 border-gray-300'
                      }>
                        {item.status === 'completed' ? 'Completed' :
                         item.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Challenge Areas */}
          <div className="mt-12 p-6 bg-amber-50 rounded-2xl border-2 border-amber-200">
            <h4 className="text-xl font-bold text-amber-900 mb-4">Key Challenge Areas We're Addressing</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-amber-800">Early adoption without a large brand presence</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-amber-800">Balancing free value vs. paid feature access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueModel;
