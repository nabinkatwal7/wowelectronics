import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedCarousel = () => {
  const featuredProducts = [
    { id: 1, name: 'LG OLED TV 55"', image: "/images/tv.jpg" },
    {
      id: 2,
      name: "LG French Door Refrigerator",
      image: "/images/tv.jpg",
    },
    {
      id: 3,
      name: "LG Gram Laptop",
      image: "/images/tv.jpg",
    },
    {
      id: 4,
      name: "LG TONE Free Wireless Earbuds",
      image: "/images/tv.jpg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
      <Carousel>
        <CarouselContent>
          {featuredProducts.map((product) => (
            <CarouselItem key={product.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card>
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default FeaturedCarousel;
