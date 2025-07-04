
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, ArrowRight, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Solo Coach",
      price: "Free",
      period: "",
      description: "Perfect for individual coaches getting started",
      features: [
        "Up to 25 active clients",
        "Unlimited 1-on-1 sessions",
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
      price: "$10",
      period: "/month",
      description: "Most popular for growing coaching businesses",
      features: [
        "Up to 100 active clients",
        "Unlimited sessions (1-on-1 & group)",
        "Advanced scheduling with AI optimization",
        "Multiple communities (up to 5)",
        "Enhanced content library (50GB)",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom branding",
        "Integration with external tools"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "10%",
      period: " transaction fee",
      description: "Pay as you earn - perfect for scaling coaches",
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
        "Advanced security features"
      ],
      popular: false,
      cta: "Contact Sales"
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
            <Card key={index} className={plan.popular ? "border-blue-500 shadow-xl" : "shadow-md hover:shadow-lg transition-shadow"}>
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
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base font-medium rounded-full h-auto py-3 px-6">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-500">
            Not sure which plan is right for you? <a href="#" className="text-blue-600 hover:underline">Contact us</a> for a personalized recommendation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
