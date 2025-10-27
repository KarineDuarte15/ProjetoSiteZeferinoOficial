import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyCategories from "@/components/PropertyCategories";
import FeaturedProperties from "@/components/FeaturedProperties";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar />
      <Hero />
      <PropertyCategories />
      <FeaturedProperties />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default Index;
