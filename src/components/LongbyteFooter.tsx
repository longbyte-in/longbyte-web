import { Heart, Code, Sparkles } from "lucide-react";

const LongbyteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-longbyte-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="logo.png"
                alt="Longbyte Software Logo"
                className="h-8 w-8 mr-3"
              />
              <span className="text-xl font-bold">Longbyte</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Modern software consultancy empowering startups with AI-powered digital solutions. Building dreams into digital reality.
            </p>
            <div className="flex items-center text-gray-300">
              <span className="mr-2">📍</span>
              <span>Miryalaguda, Nalgonda, Telangana, India - 508278</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">What We Do</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">AI Integration</li>
              <li className="text-gray-300">Full-Stack Development</li>
              <li className="text-gray-300">Mobile Applications</li>
              <li className="text-gray-300">Startup Solutions</li>
              <li className="text-gray-300">Consulting</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Longbyte Software Private Limited. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LongbyteFooter;