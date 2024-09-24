import { motion } from "framer-motion";
import { Shield, Truck, CreditCard, HeadphonesIcon } from "lucide-react";

const BenefitCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const BenefitsShowcase = () => {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Quality Guarantee",
      description:
        "All our products come with a 2-year warranty and quality assurance.",
    },
    {
      icon: <Truck className="w-12 h-12 text-green-500" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders over $500.",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-purple-500" />,
      title: "Easy Payments",
      description:
        "Multiple payment options including EMI for your convenience.",
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12 text-red-500" />,
      title: "24/7 Support",
      description: "Our customer support team is always ready to assist you.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Wow Electronics?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsShowcase;
