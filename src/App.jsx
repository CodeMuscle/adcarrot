import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="overflow-y-hidden bg-orange-50 text-emerald-950 antialiased">
      <Navbar />
      <Hero />
    </div>
  );
}
