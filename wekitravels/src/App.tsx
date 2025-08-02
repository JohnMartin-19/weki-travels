import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Destinations } from "./components/Destinations";
import { Services } from "./components/Services";
import { Packages } from "./components/Packages";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Services />
        <Packages />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}