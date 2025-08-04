import { Button } from "./ui/button";
import { Phone, Menu, X, Plane } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center text-2xl">
              <Plane className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-orange-600">Weki</span>
              <span className="text-blue-600 ml-2">Travels</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#packages" className="text-gray-700 hover:text-blue-600 transition-colors">Packages</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-primary">
              <Phone className="h-4 w-4 mr-2" />
              <span>+254792136318</span>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <a href="#contact">Book Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#packages" className="text-gray-700 hover:text-blue-600 transition-colors">Packages</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <div className="flex items-center text-primary pt-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>+254 712 345 678</span>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-fit">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}