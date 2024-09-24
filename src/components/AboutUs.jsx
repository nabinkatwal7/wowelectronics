import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About LG Clone
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/images/tv.jpg"
              alt="About wow"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-lg">
              Wow is a leading provider of cutting-edge electronics and home
              appliances. With a commitment to innovation and quality, we strive
              to enhance the lives of our customers through advanced technology
              and exceptional design.
            </p>
            <p className="text-lg">
              Our extensive range of products includes state-of-the-art TVs,
              energy-efficient appliances, and innovative mobile devices. We are
              dedicated to creating a smarter, more connected world for
              everyone.
            </p>
            <p className="text-lg">
              At Wow, we believe in pushing the boundaries of what is possible,
              always with our customers needs at the forefront of everything we
              do.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
