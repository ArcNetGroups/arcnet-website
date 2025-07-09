import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, Calendar } from "lucide-react";

const EarlyAccess = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Get current timestamp in ISO format
      const timestamp = new Date().toISOString();
      
      const response = await fetch('https://sheetdb.io/api/v1/wkj127a2dsvzl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [{
            Name: formData.name.trim(),
            Email: formData.email.trim(),
            Timestamp: timestamp
          }]
        })
      });

      const responseData = await response.json();
      
      if (!response.ok) {
        console.error('API Response:', responseData);
        throw new Error(responseData.message || 'Failed to submit form');
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "" });
    } catch (err) {
      console.error('Error details:', err);
      setError('There was an error submitting the form. Please try again or contact support.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="early-access" className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-white/20 text-white border-0 px-6 py-3 text-base font-medium rounded-full">
            <Mail className="w-5 h-5 mr-2" />
            Early Access
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to transform
            <span className="block">your coaching business?</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join 100+ coaches who are already on the waitlist for early access to Prime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Waitlist Form */}
          <Card className="bg-white rounded-3xl shadow-2xl border-0 h-full">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="text-center mb-8">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h3>
                <p className="text-gray-600">Get early access + exclusive founder pricing</p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg"
                  >
                    {isLoading ? 'Submitting...' : 'Secure My Spot'}
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8 flex-1">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">You're in!</h4>
                  <p className="text-gray-600">We'll be in touch soon with early access details.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Founder Chat */}
          <Card className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 h-full">
            <CardContent className="p-8 h-full flex flex-col text-white">
              <div className="text-center mb-8">
                <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Book a 15-min Founder Chat</h3>
                <p className="text-blue-100">Get personalized advice for your coaching business</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
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

              <Button 
                asChild
                className="w-full bg-white/20 border border-white/30 text-white hover:bg-white/30 py-4 rounded-xl font-bold text-lg backdrop-blur-sm"
              >
                <a 
                  href="https://calendly.com/henry-arcnetlabs/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Schedule Free Call
                  <Calendar className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
