import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, DollarSign, TrendingUp, Users, ArrowRight } from "lucide-react";

const ROICalculator = () => {
  const [numClients, setNumClients] = useState(50);
  const [avgRevenuePerClient, setAvgRevenuePerClient] = useState(5000);
  const [timeSavedPerClient, setTimeSavedPerClient] = useState(10);
  const hourlyRate = 75;

  const calculateROI = () => {
    const totalRevenue = numClients * avgRevenuePerClient;
    const totalTimeSaved = numClients * timeSavedPerClient;
    const valueOfTimeSaved = totalTimeSaved * hourlyRate;
    const totalValue = totalRevenue + valueOfTimeSaved;

    return {
      totalRevenue,
      totalTimeSaved,
      valueOfTimeSaved,
      totalValue,
    };
  };

  const roi = calculateROI();

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 md:mb-6 bg-blue-100 text-blue-800 border-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-full">
            <Calculator className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            ROI Calculator
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2 leading-tight">
            Unlock Your Coaching Potential
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Calculate the potential return on investment (ROI) of using Prime for your coaching business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Card */}
          <Card className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-gray-900">
                Enter Your Numbers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="clients" className="block text-sm font-medium text-gray-700">
                  Number of Clients
                </label>
                <input
                  type="number"
                  id="clients"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={numClients}
                  onChange={(e) => setNumClients(Number(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-gray-700">
                  Average Revenue per Client
                </label>
                <input
                  type="number"
                  id="revenue"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={avgRevenuePerClient}
                  onChange={(e) => setAvgRevenuePerClient(Number(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time Saved per Client (hours/month)
                </label>
                <input
                  type="number"
                  id="time"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={timeSavedPerClient}
                  onChange={(e) => setTimeSavedPerClient(Number(e.target.value))}
                />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Based on an hourly rate of ${hourlyRate}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Output Card */}
          <Card className="bg-blue-50 rounded-2xl p-6 md:p-8 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-gray-900">
                Potential ROI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-green-500" />
                <p className="text-gray-700">
                  Total Revenue: <span className="font-semibold">${roi.totalRevenue.toLocaleString()}</span>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <p className="text-gray-700">
                  Value of Time Saved: <span className="font-semibold">${roi.valueOfTimeSaved.toLocaleString()}</span>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-purple-500" />
                <p className="text-gray-700">
                  Total Time Saved: <span className="font-semibold">{roi.totalTimeSaved.toLocaleString()} hours/month</span>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Calculator className="w-5 h-5 text-orange-500" />
                <p className="text-gray-700">
                  Total Value: <span className="font-semibold">${roi.totalValue.toLocaleString()}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to unlock these results?
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base md:text-lg px-8 md:px-10 py-3 md:py-4 h-auto rounded-full"
            onClick={(e) => {
              e.preventDefault();
              const waitlistSection = document.getElementById('early-access');
              if (waitlistSection) {
                window.scrollTo({
                  top: waitlistSection.offsetTop - 100, // Adjust for any fixed header
                  behavior: 'smooth'
                });
              }
            }}
          >
            Join the Waitlist
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
