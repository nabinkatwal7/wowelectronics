import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="text" placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={4} />
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600" />
              <span>contact@wow.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600" />
              <span>123 Tech Street, Silicon Valley, CA 94000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
