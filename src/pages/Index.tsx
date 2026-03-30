import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(270,60%,8%)]">
      <Header />
      <Hero />
      <Tours />
      <About />
      <Gallery />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
