
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="h-8 w-8 rounded-full bg-kinder-blue flex items-center justify-center">
                <span className="text-white font-bold">TK</span>
              </span>
              <span className="font-display font-bold text-xl">Sabiluna Ceria</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="font-medium text-gray-600 hover:text-kinder-blue transition-colors">
              Beranda
            </a>
            <a href="#tentang-kami" className="font-medium text-gray-600 hover:text-kinder-blue transition-colors">
              Tentang Kami
            </a>
            <a href="#program" className="font-medium text-gray-600 hover:text-kinder-blue transition-colors">
              Program
            </a>
            <a href="#galeri" className="font-medium text-gray-600 hover:text-kinder-blue transition-colors">
              Galeri
            </a>
            <Button className="bg-kinder-blue hover:bg-kinder-blue/80 text-white">
              <a href="#kontak">Hubungi Kami</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-1">
            <a
              href="#beranda"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kinder-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </a>
            <a
              href="#tentang-kami"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kinder-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang Kami
            </a>
            <a
              href="#program"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kinder-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Program
            </a>
            <a
              href="#galeri"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kinder-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Galeri
            </a>
            <a
              href="#kontak"
              className="block px-3 py-2 bg-kinder-blue text-white text-center rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hubungi Kami
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
