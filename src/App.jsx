import About from "./components/About";
import AdAgencyPackages from "./components/AdAgencyPackages";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectShowcase from "./components/ProjectShowcase";
import Services from "./components/Services";
import Team from "./components/Team";

export default function App() {
  return (
    <div className="overflow-y-hidden bg-orange-50 text-emerald-950 antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectShowcase />
      <AdAgencyPackages />
      <Team />
    </div>
  );
}
