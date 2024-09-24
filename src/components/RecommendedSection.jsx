import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RecommendedProduct = ({ title, description, price, image }) => (
  <Card className="w-full min-h-[400px]">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="truncate">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <p className="text-2xl font-bold">${price}</p>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Add to Cart</Button>
    </CardFooter>
  </Card>
);

const RecommendedSection = () => {
  const recommendedProducts = [
    {
      id: 1,
      title: "LG C1 OLED TV",
      description: "Perfect for gaming and movies",
      price: 1499.99,
      image: "/images/tv.jpg",
    },
    {
      id: 2,
      title: "LG InstaView Refrigerator",
      description: "See inside without opening the door",
      price: 2799.99,
      image: "/images/tv.jpg",
    },
    {
      id: 3,
      title: "LG Gram 16",
      description: "Ultra-light laptop for professionals",
      price: 1399.99,
      image: "/images/tv.jpg",
    },
    {
      id: 4,
      title: "LG TONE Free FP9",
      description: "Wireless earbuds with active noise cancellation",
      price: 199.99,
      image: "/images/tv.jpg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedProducts.map((product) => (
          <RecommendedProduct key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
