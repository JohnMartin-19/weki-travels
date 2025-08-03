import { Button } from "./ui/button";
import { MapPin, Calendar, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative bg-blue-600 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl text-white mb-6">
              Discover Amazing <span className="text-blue-200">Travel Experiences</span> with <span className="text-orange-400">Weki Travels</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Your trusted travel partner in Nairobi. We specialize in international destinations across Europe and the Middle East, creating unforgettable journeys with expertly crafted itineraries and personalized service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
               <a href="#contact"> Plan Your Trip</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-orange hover:bg-white hover:text-blue-600">
               <a href="#packages"> Browse Packages</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <p className="text-sm text-gray-100">50+ Destinations</p>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <p className="text-sm text-gray-100">Custom Itineraries</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <p className="text-sm text-gray-100">Excellent Customer Service</p>
              </div>
            </div>
          </div>

          <div className="lg:text-center relative">
            <ImageWithFallback
              src="https://plus.unsplash.com/premium_photo-1661501359079-b362cda0d5d0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Beautiful travel destination landscape"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="text-2xl text-blue-600">KSh 15,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}