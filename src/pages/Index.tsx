// src/pages/Index.tsx
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyCategories from "@/components/PropertyCategories"; 
import FeaturedProperties from "@/components/FeaturedProperties"; 
import AboutMe from "@/components/AboutMe";                   
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { MessageCircle } from 'lucide-react'; // Ou seu ícone do WhatsApp
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Interface para definir a estrutura dos dados da busca
interface SearchCriteria {
  estado?: string;
  cidade?: string;
  bairro?: string;
}

// Interface para as props do Navbar e Footer (para tipagem)
interface LayoutComponentProps {
  onContactClick: () => void;
}

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentSearchCriteria, setCurrentSearchCriteria] = useState<SearchCriteria | undefined>(undefined);
  const [isWhatsappTooltipOpen, setIsWhatsappTooltipOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Efeito para tooltip do WhatsApp
  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      setIsWhatsappTooltipOpen(true);
    }, 3000);
    return () => clearTimeout(tooltipTimer);
  }, []);

  
   useEffect(() => {
   const timer = setTimeout(() => {
   setIsContactModalOpen(true);
   }, 1500);
   return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
    setCurrentSearchCriteria(undefined);
  };

  const handleOpenModalWithSearch = (criteria?: SearchCriteria) => {
    setCurrentSearchCriteria(criteria);
    setIsContactModalOpen(true);
  };

  const handleOpenModalGeneric = () => {
     setCurrentSearchCriteria(undefined);
     setIsContactModalOpen(true);
  };

  const whatsappNumber = "5585996409590"; 
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os imóveis.";

  return (
    // Adicionado 'relative' para o botão flutuante funcionar corretamente
    <div className="min-h-screen bg-background font-poppins relative">

      {/* 1. Ordem correta dos componentes */}
      <Navbar onContactClick={handleOpenModalGeneric} />
      <Hero onSearchSubmit={handleOpenModalWithSearch} />
      <AboutMe />
      <PropertyCategories
        selectedCategory={selectedCategory}     
        onCategorySelect={setSelectedCategory}
      /> 
      {(() => {
        const C: React.ComponentType<{ selectedCategory: string | null }> = FeaturedProperties;
        return (
          <C
            selectedCategory={selectedCategory}
          />
        );
      })()}
      <Testimonials />
      <Events />
      <InstagramFeed />
      <Footer /> 

      {/* 2. Botão Flutuante WhatsApp */}
      <Tooltip open={isWhatsappTooltipOpen} onOpenChange={setIsWhatsappTooltipOpen}>
        <TooltipTrigger asChild>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center bg-primary rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 group"
            aria-label="Iniciar conversa no WhatsApp"
          >
            {/* Idealmente, substitua por um SVG do WhatsApp */}
            <MessageCircle className="h-7 w-7 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
          </a>
        </TooltipTrigger>
        <TooltipContent
            side="left"
            align="center"
            sideOffset={10}
            className="bg-charcoal text-white rounded-md shadow-lg border-none font-poppins" //
            onPointerDownOutside={(e) => e.preventDefault()}
            >
          Olá, precisa de ajuda?
        </TooltipContent>
      </Tooltip>

      {/* 3. Modal de Contato */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseModal}
        searchCriteria={currentSearchCriteria}
      />
    </div>
  );
};

export default Index;