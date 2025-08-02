import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Plane, 
  Hotel, 
  MapPin, 
  FileText, 
  Camera, 
  Shield 
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Find and book the best flight deals to destinations worldwide.",
    features: ["Domestic & International Flights", "Best Price Guarantee", "Flexible Booking Options", "24/7 Customer Support"]
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Comfortable accommodations from budget to luxury options.",
    features: ["Global Hotel Network", "Instant Confirmation", "Special Group Rates", "Cancellation Protection"]
  },
  {
    icon: MapPin,
    title: "Tour Packages",
    description: "Expertly crafted tour packages for unforgettable experiences.",
    features: ["Safari Adventures", "Cultural Tours", "Beach Holidays", "Adventure Travel"]
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Comprehensive visa and travel document support.",
    features: ["Visa Applications", "Document Review", "Embassy Appointments", "Travel Insurance"]
  },
  {
    icon: Camera,
    title: "Group Travel",
    description: "Specialized services for corporate and group travel needs.",
    features: ["Corporate Travel", "Event Planning", "Group Discounts", "Custom Itineraries"]
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Protect your travel investment with comprehensive coverage.",
    features: ["Medical Coverage", "Trip Cancellation", "Lost Luggage", "Emergency Assistance"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Our Travel Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From flight bookings to complete tour packages, we provide comprehensive travel solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}