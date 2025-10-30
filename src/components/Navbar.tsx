// src/components/Navbar.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoHeader from "@/assets/logoheader.png";
interface NavbarProps { // Adicione esta interface
  onContactClick: () => void;
} 

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Imóveis", href: "#imoveis" },
    { name: "Sobre", href: "#Aboutme" },
    { name: "Instagram", href: "#Instagram" },
    { name: "Eventos", href: "#Events" },
    { name: "Depoimentos", href: "#Testimonials" },
    { name: "Contato", href: "#ContactModal" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-1 group">
            
            <img 
              src={logoHeader} 
              alt="Zeferino Logo" 
              className="w-14 h-14 logo-key" 
            />
            <span className="font-playfair text-4xl font-bold text-primary">
              Zeferino
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-poppins text-sm font-medium text-steel hover:text-primary transition-colors duration-200 uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-poppins text-base font-medium text-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-2">
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;