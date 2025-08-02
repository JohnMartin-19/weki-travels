import { Card, CardContent } from "./ui/card";
import { MapPin, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const destinations = [
  {
    name: "Serbia 🇷🇸",
    country: "Belgrade & Novi Sad",
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    price: "KSh 85,000",
    description: "Rich history, vibrant culture, and stunning Danube views"
  },
  {
    name: "Germany 🇩🇪",
    country: "Berlin & Munich",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    price: "KSh 120,000",
    description: "Historic castles, modern cities, and Oktoberfest celebrations"
  },
  {
    name: "Croatia 🇭🇷",
    country: "Dubrovnik & Split",
    image: "https://images.unsplash.com/photo-1555990538-c58d6e3b34b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    price: "KSh 95,000",
    description: "Mediterranean coastline and medieval architecture"
  },
  {
    name: "Portugal 🇵🇹",
    country: "Lisbon & Porto",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    price: "KSh 110,000",
    description: "Colorful tiles, port wine, and Atlantic coastlines"
  },
  {
    name: "Malta 🇲🇹",
    country: "Valletta & Gozo",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    price: "KSh 90,000",
    description: "Ancient temples, crystal waters, and historic fortresses"
  },
  {
    name: "Netherlands 🇳🇱",
    country: "Amsterdam & Rotterdam",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    price: "KSh 115,000",
    description: "Tulip fields, canal cruises, and cycling adventures"
  },
  {
    name: "Kuwait 🇰🇼",
    country: "Kuwait City",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    price: "KSh 105,000",
    description: "Modern skylines, traditional souks, and desert experiences"
  },
  {
    name: "UAE 🇦🇪",
    country: "Dubai & Abu Dhabi",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    price: "KSh 135,000",
    description: "Luxury shopping, world's tallest buildings, and desert safaris"
  },
  {
    name: "Qatar 🇶🇦",
    country: "Doha",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    price: "KSh 125,000",
    description: "Futuristic architecture, cultural museums, and Arabian heritage"
  },
  {
    name: "Sweden 🇸🇪",
    country: "Stockholm & Gothenburg",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    price: "KSh 140,000",
    description: "Northern lights, archipelago islands, and Viking history"
  },
  {
    name: "Finland 🇫🇮",
    country: "Helsinki & Lapland",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    price: "KSh 145,000",
    description: "Aurora borealis, reindeer safaris, and midnight sun"
  }
];

export function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore breathtaking destinations across Europe and the Middle East with our carefully curated international travel experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm">{destination.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">{destination.country}</span>
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl text-blue-600">{destination.price}</span>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}