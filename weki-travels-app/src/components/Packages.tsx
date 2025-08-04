import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {  Users, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const packages = [
  {
    title: "The Blue Lagoon, Malta",
    duration: "7 Days",
    groupSize: "4-8 People",
    price: "KSh 145,000",
    originalPrice: "KSh 155,000",
    image: "https://images.unsplash.com/photo-1545298846-79dd1f8f391c?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    destinations: ["Valletta", "Mdina", "Gozo"],
    highlights: ["Sunset Boat Rides", "Deep Sea Diving", "Touring the cities"],
    badge: "Popular"
  },
  {
    title: "Zanzibar Beach Escape",
    duration: "5 Days",
    groupSize: "2-6 People",
    price: "KSh 32,000",
    originalPrice: "KSh 40,000",
    image: "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    destinations: ["Stone Town", "Nungwi Beach", "Jozani Forest"],
    highlights: ["Spice Tour", "Dolphin Watching", "Sunset Dhow Cruise"],
    badge: "Best Value"
  },
  {
    title: "Dubai, UAE",
    duration: "8 Days",
    groupSize: "2-12 People",
    price: "KSh 125,000",
    originalPrice: "KSh 145,000",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    destinations: ["Dubai, City", "Burj Khalifa", "Urban City"],
    highlights: ["Desert Fun", "Professional Guides", "Rich Culture"],
    badge: "Adventure"
  }
];

export function Packages() {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Featured Travel Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked travel packages designed to give you the best value and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                  {pkg.badge}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{pkg.title}</CardTitle>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {pkg.groupSize}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-blue-600 mr-1" />
                    <span className="text-sm text-gray-600">Destinations:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {pkg.destinations.map((dest, destIndex) => (
                      <Badge key={destIndex} variant="outline" className="text-xs">
                        {dest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm text-gray-900 mb-2">Package Highlights:</h4>
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl text-blue-600">{pkg.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <span className="text-sm text-gray-500">per person</span>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <a href="#contact"> Book Package</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}