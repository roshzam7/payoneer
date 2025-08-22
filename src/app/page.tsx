import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import ContentCards from "./components/ContentCards";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroBanner />
      <ContentCards />
      <Footer />
    </div>
  );
}
