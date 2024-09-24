import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OfferCard = ({ title, description, price, image }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
      <p className="text-2xl font-bold">${price}</p>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Shop Now</Button>
    </CardFooter>
  </Card>
);

const TopOffers = () => {
  const categories = [
    { id: 'tvs', name: 'TVs' },
    { id: 'appliances', name: 'Appliances' },
    { id: 'computers', name: 'Computers' },
    { id: 'audio', name: 'Audio' },
  ];

  const offers = {
    tvs: [
      { id: 1, title: "65\" OLED 4K TV", description: "Experience true blacks and infinite contrast", price: 1999.99, image: "/images/tv.jpg" },
      { id: 2, title: "55\" QNED MiniLED TV", description: "Quantum Dot NanoCell Color Technology", price: 1299.99, image: "/images/tv.jpg" },
    ],
    appliances: [
      { id: 3, title: "French Door Refrigerator", description: "Large capacity with InstaView Door-in-Door", price: 2499.99, image: "/images/tv.jpg" },
      { id: 4, title: "Front Load Washer", description: "AI-powered washing with TurboWash 360", price: 999.99, image: "/images/tv.jpg" },
    ],
    computers: [
      { id: 5, title: "LG Gram 17\"", description: "Ultra-lightweight laptop with long battery life", price: 1499.99, image: "/images/tv.jpg" },
      { id: 6, title: "UltraFine 5K Display", description: "27-inch 5K display for stunning visuals", price: 1299.99, image: "/images/tv.jpg" },
    ],
    audio: [
      { id: 7, title: "TONE Free Wireless Earbuds", description: "True wireless earbuds with UVnano charging case", price: 199.99, image: "/images/tv.jpg" },
      { id: 8, title: "XBOOM Go Portable Speaker", description: "Powerful sound with 24-hour battery life", price: 149.99, image: "/images/tv.jpg" },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">Our Top Offers</h2>
      <Tabs defaultValue="tvs">
        <TabsList className="mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>{category.name}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offers[category.id].map((offer) => (
                <OfferCard key={offer.id} {...offer} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default TopOffers;