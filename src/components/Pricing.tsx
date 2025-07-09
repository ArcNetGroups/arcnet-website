import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, ArrowRight, Zap, Mail } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Solo Coach",
      price: "Free",
      period: "",
      description: "Perfect for individual coaches getting started",
      features: [
        "15 1-on-1 sessions",
        "5 group sessions",
        "Basic scheduling & reminders",
        "Community hub (1 group)",
        "Content library (5GB storage)",
        "Basic analytics",
        "Email support"
      ],
      popular: false,
      cta: "Get Started Free"
    },
    {
      name: "Professional",
      price: "$20",
      period: "/month",
      description: "Most popular for growing coaching businesses",
      features: [
        "Unlimited audience",
        "Unlimited sessions (1-on-1 & group)",
        "Advanced scheduling with AI optimization",
        "Multiple communities (up to 5)",
        "Enhanced content library (50GB)",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom branding",
        "Integration with external tools",
        "10% royalty on products sold"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Coming Soon",
      period: "",
      description: "For established coaching businesses",
      features: [
        "Unlimited clients & coaches",
        "White-label solution",
        "Advanced automation workflows",
        "Unlimited communities",
        "Unlimited storage",
        "Custom analytics & reporting",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security features",
        "0% royalty on products sold"
      ],
      popular: false,
      cta: "Contact Us"
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 md:mb-6 bg-blue-100 text-blue-800 border-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-full">
            <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Transparent Pricing
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2 leading-tight">
            Simple plans for every stage
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              No hidden fees, no surprises. Just straightforward pricing to help you grow your coaching business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`flex flex-col h-full ${plan.popular ? "border-blue-500 shadow-xl" : "shadow-md hover:shadow-lg transition-shadow"}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                  {plan.popular && (
                    <Badge className="ml-2 bg-yellow-100 text-yellow-800 border-0">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </Badge>
                  )}
                </CardTitle>
                <div className="text-gray-600">{plan.description}</div>
                <div className="text-4xl font-extrabold text-blue-600 mt-4">
                  {plan.price}
                  <span className="text-lg text-gray-500 font-medium">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Button 
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base font-medium rounded-full h-auto py-3 ${plan.cta === 'Get Started' ? 'animate-subtle-shake' : ''}`}
                  >
                    <div className="flex items-center justify-center">
                      {plan.cta}
                      {plan.cta !== 'Contact Us' && <ArrowRight className="ml-2 h-4 w-4" />}
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-500 mb-8">
            Not sure which plan is right for you?{' '}
            <a 
              href="mailto:company@arcnetlabs.com" 
              className="text-blue-600 hover:underline flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:company@arcnetlabs.com';
              }}
            >
              <Mail className="w-4 h-4 mr-1" /> Contact Us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
