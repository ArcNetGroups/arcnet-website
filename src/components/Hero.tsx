import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart } from "lucide-react";
import { scrollToWaitlist } from "@/utils/scrollToWaitlist";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        <Badge className="mb-4 md:mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-full">
          <Heart className="w-3 h-3 md:w-4 md:h-4 mr-2 fill-current" />
          Built with love for finance and business coaches
        </Badge>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-2">
          <span className="block mb-2 md:mb-0">Online coaching tools are</span>
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent block">
            scattered and clunky.
          </span>
        </h1>
        
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed px-4">
            Prime brings sessions, content, and community into one streamlined platform — 
            built with love for coaches tired of messy Zoom + WhatsApp + Drive workflows.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16 px-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base md:text-lg px-8 md:px-10 py-3 md:py-4 h-auto rounded-full min-h-[48px]"
            onClick={scrollToWaitlist}
          >
            Join the Waitlist
            <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base md:text-lg px-8 md:px-10 py-3 md:py-4 h-auto border-2 rounded-full min-h-[48px]"
            onClick={scrollToWaitlist}
          >
            Book a 15-min Founder Chat
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 text-sm md:text-base text-gray-500 px-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-medium">Free 14-day Trial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="font-medium">No Setup Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="font-medium">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
