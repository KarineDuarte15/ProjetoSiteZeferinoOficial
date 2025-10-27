import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyCategories from "@/components/PropertyCategories";
import FeaturedProperties from "@/components/FeaturedProperties";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar />
      <Hero />
      <AboutMe />
      <PropertyCategories />
      <FeaturedProperties />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default Index;
