import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ImageWithText from "@/components/ImageWithText";
import ProductCat from "@/components/ProductCat";
import Footer from "@/components/Footer";
import AboutPage from "@/components/About";
import ContactSection from "@/components/Contact";
import ServicesPage from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
      <ProductCat/>
      <ServicesPage/>
      <AboutPage/>
      <ImageWithText/>
      <ContactSection/>
     <Footer/>
    </div>
  );
}
