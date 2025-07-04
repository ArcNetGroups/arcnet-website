
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "The Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "What is Prime", href: "#platform" },
    { name: "ROI Calculator", href: "#calculator" },
    { name: "Demo", href: "#demo" },
    { name: "Pricing", href: "#pricing" }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-6 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2 text-lg text-left cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-6 border-t border-gray-100">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full h-12 text-base">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
