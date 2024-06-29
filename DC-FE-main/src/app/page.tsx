import Image from "next/image";
import Hero from "./components/website/Hero";
import Header from "./components/website/Header";
import Announcement from "./components/website/Announcement";
import Footer from "./components/website/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <Announcement />
      <Hero />
      <Footer />
    </div>
  );
}
