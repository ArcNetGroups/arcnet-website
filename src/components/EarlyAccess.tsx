
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Mail, Calendar, Star, CheckCircle } from "lucide-react";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup
    setIsSubmitted(true);
  };

  const testimonials = [
    {
      quote: "Finally, a platform that gets what coaches actually need.",
      author: "Sarah Chen",
      role: "Leadership Coach",
      avatar: "SC"
    },
    {
      quote: "Prime saved me 10+ hours per week. My clients love it too.",
      author: "Marcus Williams",
      role: "Business Coach",
      avatar: "MW"
    },
    {
      quote: "The unified approach is exactly what the industry needed.",
      author: "Dr. Lisa Park",
      role: "Executive Coach",
      avatar: "LP"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-white/20 text-white border-0 px-6 py-3 text-base font-medium rounded-full">
            <Rocket className="w-5 h-5 mr-2" />
            Early Access
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to transform
            <span className="block">your coaching business?</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Join 500+ coaches who are already on the waitlist. Be among the first to experience 
            the future of coaching platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Waitlist Form */}
          <Card className="bg-white rounded-3xl shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h3>
                <p className="text-gray-600">Get early access + exclusive founder pricing</p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg"
                  >
                    Secure My Spot
                    <Rocket className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">You're in!</h4>
                  <p className="text-gray-600">We'll be in touch soon with early access details.</p>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>Early access pricing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No spam, ever</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Founder Chat */}
          <Card className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
            <CardContent className="p-8 text-white">
              <div className="text-center mb-8">
                <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Book a 15-min Founder Chat</h3>
                <p className="text-blue-100">Get personalized advice for your coaching business</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Discuss your current workflow challenges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Get a personalized Prime demo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Early access to beta features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>No sales pitch, just honest advice</span>
                </div>
              </div>

              <Button className="w-full bg-white/20 border border-white/30 text-white hover:bg-white/30 py-4 rounded-xl font-bold text-lg backdrop-blur-sm">
                Schedule Free Call
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">What early users are saying</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold mx-auto mb-4">
                    {testimonial.avatar}
                  </div>
                  <blockquote className="text-white mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-blue-100">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
