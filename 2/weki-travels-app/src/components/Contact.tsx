import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your inquiry! Our travel consultant will contact you within 24 hours.");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Plan Your Next Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore the world? Contact us today for personalized travel planning and expert advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+254 712 345 678</p>
                <p className="text-sm text-gray-500 mt-1">WhatsApp available</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">info@wekitravels.com</p>
                <p className="text-sm text-gray-500 mt-1">We respond within 4 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Nairobi, Kenya</p>
                <p className="text-sm text-gray-500 mt-1">CBD - Easy access location</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-gray-600">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Get Travel Quote</CardTitle>
                <CardDescription>
                  Tell us about your dream trip and we'll create a personalized itinerary just for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Preferred Destination</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="germany">Germany 🇩🇪</SelectItem>
                          <SelectItem value="uae">UAE 🇦🇪</SelectItem>
                          <SelectItem value="sweden">Sweden 🇸🇪</SelectItem>
                          <SelectItem value="croatia">Croatia 🇭🇷</SelectItem>
                          <SelectItem value="portugal">Portugal 🇵🇹</SelectItem>
                          <SelectItem value="netherlands">Netherlands 🇳🇱</SelectItem>
                          <SelectItem value="qatar">Qatar 🇶🇦</SelectItem>
                          <SelectItem value="kuwait">Kuwait 🇰🇼</SelectItem>
                          <SelectItem value="malta">Malta 🇲🇹</SelectItem>
                          <SelectItem value="serbia">Serbia 🇷🇸</SelectItem>
                          <SelectItem value="finland">Finland 🇫🇮</SelectItem>
                          <SelectItem value="other">Other Destination</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="travelDate">Travel Date</Label>
                      <Input id="travelDate" type="date" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Traveler</SelectItem>
                          <SelectItem value="2">2 Travelers</SelectItem>
                          <SelectItem value="3-5">3-5 Travelers</SelectItem>
                          <SelectItem value="6-10">6-10 Travelers</SelectItem>
                          <SelectItem value="10+">10+ Travelers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range (KSh)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under 50,000</SelectItem>
                          <SelectItem value="50k-100k">50,000 - 100,000</SelectItem>
                          <SelectItem value="100k-200k">100,000 - 200,000</SelectItem>
                          <SelectItem value="over-200k">Over 200,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Special Requirements</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your travel preferences, special occasions, dietary requirements, or any other details"
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Get Travel Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}