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
import { useQuery } from "@tanstack/react-query";
import { api } from "../../utils/getData";

const Index = () => {
  const { data: televisionData } = useQuery({
    queryKey: ["television"],
    queryFn: () => {
      return api.get(`/televisions`).then((res) => res.data);
    },
  });

  const { data: refrigeratorsData } = useQuery({
    queryKey: ["refrigerators"],
    queryFn: () => {
      return api.get(`/refrigerators`).then((res) => res.data);
    },
  });

  const { data: acData } = useQuery({
    queryKey: ["acs"],
    queryFn: () => {
      return api.get(`/acs`).then((res) => res.data);
    },
  });

  const { data: coolerData } = useQuery({
    queryKey: ["cooler"],
    queryFn: () => {
      return api.get(`/coolers`).then((res) => res.data);
    },
  });

  const { data: washingData } = useQuery({
    queryKey: ["washing"],
    queryFn: () => {
      return api.get(`/washing-machines`).then((res) => res.data);
    },
  });

  console.log(televisionData?.data);
  console.log(refrigeratorsData?.data);
  console.log(acData?.data);
  console.log(coolerData?.data);
  console.log(washingData?.data);

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
