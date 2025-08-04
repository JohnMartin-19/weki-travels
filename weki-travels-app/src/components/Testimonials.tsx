import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "United Kingdom",
    trip: "Kenya Safari Package",
    rating: 5,
    text: "Weki Travels organized the most incredible safari experience! The guides were knowledgeable, accommodations were perfect, and seeing the Big Five was absolutely magical. I can't wait to book my next adventure with them!"
  },
  {
    name: "David Chen",
    location: "Singapore",
    trip: "Kilimanjaro Expedition",
    rating: 5,
    text: "Climbing Kilimanjaro was a dream come true, and Weki Travels made it happen seamlessly. The preparation, guides, and support throughout the journey were exceptional. Highly recommended for adventure seekers!"
  },
  {
    name: "Emma Thompson",
    location: "Australia",
    trip: "Zanzibar Beach Holiday",
    rating: 5,
    text: "The perfect getaway! Weki Travels handled every detail of our Zanzibar trip. From the spice tours to the pristine beaches, everything exceeded our expectations. Professional service from start to finish."
  },
  {
    name: "James Ochieng",
    location: "Kenya",
    trip: "Corporate Group Travel",
    rating: 5,
    text: "As a local company, we needed a reliable travel partner for our team retreats. Weki Travels consistently delivers excellent service, great rates, and smooth logistics. They understand our needs perfectly."
  },
  {
    name: "Maria Santos",
    location: "Brazil",
    trip: "East Africa Cultural Tour",
    rating: 5,
    text: "The cultural immersion tour was beautifully crafted. We experienced authentic local traditions, tasted amazing cuisine, and met wonderful people. Weki Travels created memories that will last a lifetime."
  },
  {
    name: "Ahmed Hassan",
    location: "UAE",
    trip: "Family Safari Adventure",
    rating: 5,
    text: "Traveling with kids can be challenging, but Weki Travels made our family safari stress-free and enjoyable for everyone. The kid-friendly activities and accommodations were perfect. Thank you for an amazing trip!"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied travelers from around the world have to say about their experiences with Weki Travels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-5 w-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-xs text-blue-600 mt-1">{testimonial.trip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}