import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <img
        src="/images/tv.jpg"
        alt="LG OLED TV"
        className="w-full h-[600px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Experience LG OLED TV
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Immerse yourself in perfect blacks and infinite contrast
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-x-4"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black border-white hover:bg-white hover:text-blue-600"
            >
              View EMI Schemes
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
