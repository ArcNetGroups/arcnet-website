
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Revenue Model", href: "#revenue" },
        { name: "API Documentation", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Mobile App", href: "#" }
      ]
    },
    {
      title: "For Coaches",
      links: [
        { name: "Solo Coaches", href: "#" },
        { name: "Group Coaching", href: "#" },
        { name: "Corporate Training", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "Best Practices", href: "#" },
        { name: "Templates", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Mission", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Investors", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Support", href: "#" },
        { name: "System Status", href: "#" },
        { name: "Community Forum", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Training", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section with CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Coaching Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of coaches already using Prime to build stronger connections with their audience.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 h-auto">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" showText={true} size="md" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              The all-in-one platform for coaches and subject matter experts. 
              Build stronger business connections and scale your expertise.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>company@arcnetlabs.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <Badge variant="outline" className="bg-green-900/50 text-green-400 border-green-600">
                SOC 2 Certified
              </Badge>
              <Badge variant="outline" className="bg-blue-900/50 text-blue-400 border-blue-600">
                GDPR Compliant
              </Badge>
              <Badge variant="outline" className="bg-purple-900/50 text-purple-400 border-purple-600">
                ISO 27001
              </Badge>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>99.9% Uptime SLA</span>
              <span>Bank-level Security</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                &copy; 2024 Prime Technologies, Inc. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
