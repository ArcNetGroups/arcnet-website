
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Heart } from "lucide-react";

const FounderNote = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-100 text-purple-800 border-0 px-6 py-3 text-base font-medium rounded-full">
            <Heart className="w-5 h-5 mr-2 fill-current" />
            Why Now
          </Badge>
        </div>

        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 rounded-3xl shadow-xl">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">HG</span>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 mb-1">Henry Giwa</h4>
                  <p className="text-sm text-gray-600">Founder, ArcnetLabs</p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <Quote className="h-8 w-8 text-purple-600 mb-6" />
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                  "Most coaches still duct-tape tools together. I know because I was one of them. 
                  Spending more time switching between Zoom, WhatsApp, Drive, and payment platforms 
                  than actually coaching.
                </blockquote>
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                  Prime is the platform I wish I had when I was coaching communities and building tech. 
                  Every feature was born from real frustration, tested with real coaches, 
                  and designed to make your life genuinely easier.
                </blockquote>
                <blockquote className="text-xl text-gray-700 leading-relaxed">
                  We're not just building software—we're building the future of coaching. 
                  A future where technology serves coaches, not the other way around."
                </blockquote>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FounderNote;
