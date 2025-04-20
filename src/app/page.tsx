import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ImageWithText from "@/components/ImageWithText";
import ProductCat from "@/components/ProductCat";
import Footer from "@/components/Footer";
import SuggestionPage from "@/components/Suggestions";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
      <ProductCat/>
      <ImageWithText/>
     <SuggestionPage/>
     <Footer/>
    </div>
  );
}
