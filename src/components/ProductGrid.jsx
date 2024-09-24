import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProductCard = ({ name, price, image, category }) => (
  <motion.div
    className="border rounded-lg p-4 shadow-sm"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-cover mb-4 rounded"
    />
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="text-gray-600 mb-2">${price.toFixed(2)}</p>
    <p className="text-sm text-gray-500 mb-2">{category}</p>
    <Button className="w-full">Add to Cart</Button>
  </motion.div>
);

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'LG OLED TV 55"',
      price: 1499.99,
      image: "/images/tv.jpg",
      category: "TVs",
    },
    {
      id: 2,
      name: "LG French Door Refrigerator",
      price: 2199.99,
      image: "/images/tv.jpg",
      category: "Appliances",
    },
    {
      id: 3,
      name: "LG Gram Laptop",
      price: 1299.99,
      image: "/images/tv.jpg",
      category: "Computers",
    },
    {
      id: 4,
      name: "LG TONE Free Wireless Earbuds",
      price: 199.99,
      image: "/images/tv.jpg",
      category: "Audio",
    },
    {
      id: 5,
      name: "LG UltraFine 4K Monitor",
      price: 699.99,
      image: "/images/tv.jpg",
      category: "Computers",
    },
    {
      id: 6,
      name: "LG Front Load Washer",
      price: 899.99,
      image: "/images/tv.jpg",
      category: "Appliances",
    },
    {
      id: 7,
      name: "LG Soundbar",
      price: 299.99,
      image: "/images/tv.jpg",
      category: "Audio",
    },
    {
      id: 8,
      name: 'LG NanoCell TV 65"',
      price: 1099.99,
      image: "/images/tv.jpg",
      category: "TVs",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
