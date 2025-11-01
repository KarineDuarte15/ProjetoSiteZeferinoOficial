// 🚀 COPIA E COLA ISTO PARA: src/components/Navbar.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoHeader from "@/assets/logoheader.png";

// Interface para as props
interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Array de links ATUALIZADO
  // Nota como os hrefs correspondem aos IDs que vamos usar
  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Imóveis", href: "#imoveis" },
    { name: "Sobre", href: "#sobre-mim" },
    { name: "Eventos", href: "#eventos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#ContactModal" }, // Este é especial
  ];

  // --- LÓGICA DE SCROLL ---
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1); // Remove o "#"
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Fecha o menu mobile
  };

  // --- LÓGICA DO MODAL ---
  const handleContactClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onContactClick(); // Chama a função que abre o modal
    setIsOpen(false); // Fecha o menu mobile
  };

  // Função para renderizar cada link (Desktop e Mobile)
  // Isto decide se o link faz scroll ou abre o modal
  const renderLink = (link: { name: string; href: string }, isMobile = false) => {
    const mobileClasses = isMobile ? "text-base py-2" : "text-sm";
    
    // O link "Contato" é o único que abre o modal
    if (link.name === "Contato") {
      return (
        <a
          key={link.name}
          href={link.href}
          onClick={handleContactClick} // <-- USA O CLIQUE DO MODAL
          className={`font-poppins font-medium text-steel hover:text-primary transition-colors duration-200 uppercase tracking-wide ${mobileClasses} cursor-pointer`}
        >
          {link.name}
        </a>
      );
    }

    // Todos os outros links usam o scroll suave
    return (
      <a
        key={link.name}
        href={link.href}
        onClick={(e) => handleScroll(e, link.href)} // <-- USA O CLIQUE DE SCROLL
        className={`font-poppins font-medium text-steel hover:text-primary transition-colors duration-200 uppercase tracking-wide ${mobileClasses}`}
      >
        {link.name}
      </a>
    );
  };
  // --- FIM DA LÓGICA PRINCIPAL ---

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => handleScroll(e, "#inicio")} // Logo também faz scroll
            className="flex items-center gap-1 group"
          >
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
            {navLinks.map((link) => renderLink(link, false))}
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
              {navLinks.map((link) => renderLink(link, true))}
              
              <Button 
                className="w-full mt-2"
                onClick={handleContactClick} // <-- USA O CLIQUE DO MODAL
              >
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