import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import NewmainOntent from "./components/NewmainpageContents";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroBanner />
      <NewmainOntent />
      <Footer />
    </div>
  );
}
