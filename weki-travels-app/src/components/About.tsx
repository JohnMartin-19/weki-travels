import { Card, CardContent } from "./ui/card";
import { Users, Award, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const stats = [
    { icon: Users, number: "250+", label: "Happy Travelers" },
    { icon: Award, number: "1+", label: "Years Experience" },
    { icon: MapPin, number: "15+", label: "Destinations" },
    { icon: Clock, number: "24/7", label: "Customer Support" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
              About Weki Travels
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Based in the heart of Nairobi, Weki Travels has been creating exceptional international travel experiences for over 1 year. We specialize in connecting Kenyan travelers with the rich cultures, historic cities, and stunning landscapes of Europe and the Middle East.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experienced travel consultants understands that every international journey is unique. Whether you're seeking European cultural exploration, Middle Eastern luxury experiences, or Nordic adventures, we craft personalized itineraries that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From our Nairobi headquarters, we've built strong partnerships with local operators, hotels, and airlines to ensure seamless travel experiences and competitive pricing for our valued clients.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4 bg-white">
                  <CardContent className="p-0">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl text-orange-500 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <ImageWithFallback
              src="https://plus.unsplash.com/premium_photo-1661964380285-35671516d887?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Nairobi city skyline and travel office"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}