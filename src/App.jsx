import About from "./components/About";
import AdAgencyPackages from "./components/AdAgencyPackages";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectShowcase from "./components/ProjectShowcase";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="bg-orange-50 text-emerald-950 antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectShowcase />
      <AdAgencyPackages />
      <Team />
      <Testimonials /> 
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
