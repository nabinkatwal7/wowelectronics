import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import FeaturedCarousel from "../components/FeaturedCarousel";
import EMISchemes from "../components/EMISchemes";
import TopOffers from "../components/TopOffers";
import RecommendedSection from "../components/RecommendedSection";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import BenefitsShowcase from "../components/BenefitsShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="space-y-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <FeaturedCarousel />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <TopOffers />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <BenefitsShowcase />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <RecommendedSection />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ProductGrid />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <EMISchemes />
        </motion.div>
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
