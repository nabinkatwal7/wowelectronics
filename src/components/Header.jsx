import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 mr-8">
              WOW Electronics
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                TV/Audio/Video
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Appliances
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Computer Products
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Air Solutions
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <Input type="text" placeholder="Search" className="mr-2" />
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="outline">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Cart
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              TV/Audio/Video
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              Appliances
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              Computer Products
            </a>
            <a
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              Air Solutions
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
