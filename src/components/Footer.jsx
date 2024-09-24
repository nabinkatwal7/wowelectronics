const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Wow Electronics</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Company Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Brand Identity
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  TVs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Appliances
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Computer Products
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Manuals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Software & Drivers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Phone Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Find a Store
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Wow Electronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
