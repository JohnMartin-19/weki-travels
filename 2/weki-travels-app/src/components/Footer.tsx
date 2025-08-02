import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Plane } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center text-2xl mb-4">
              <Plane className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-white">Weki</span>
              <span className="text-blue-400 ml-2">Travels</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted travel partner in Nairobi. We create unforgettable journeys across East Africa and beyond with personalized service and expert local knowledge.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3" />
                <span>+254 712 345 678</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@wekitravels.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg mb-4">Popular Destinations</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#destinations" className="hover:text-orange-400 transition-colors">Germany 🇩🇪</a></li>
              <li><a href="#destinations" className="hover:text-orange-400 transition-colors">UAE 🇦🇪</a></li>
              <li><a href="#destinations" className="hover:text-orange-400 transition-colors">Sweden 🇸🇪</a></li>
              <li><a href="#destinations" className="hover:text-orange-400 transition-colors">Croatia 🇭🇷</a></li>
              <li><a href="#destinations" className="hover:text-orange-400 transition-colors">Portugal 🇵🇹</a></li>
              <li><a href="#destinations" className="hover:text-orange-400 transition-colors">Netherlands 🇳🇱</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li><a href="#home" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#destinations" className="hover:text-orange-400 transition-colors">Destinations</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-orange-400 transition-colors">Packages</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
            
            <h4 className="text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
          © {currentYear} Weki Travels. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-300 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Travel Insurance</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Booking Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}