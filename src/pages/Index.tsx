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
import { MessageCircle, X, Send, ArrowUp } from 'lucide-react'; // Ou seu ícone do WhatsApp
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import whatsappLogo from '@/assets/WhatsApp.webp';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
}from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';

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

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  
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
  const whatsappNumber = "5585992265756"; 
  const [isChatOpen, setIsChatOpen] = useState(false);
  const defaultChatMessage = "Olá! Gostaria de saber mais sobre os imóveis.";
  const [chatMessage, setChatMessage] = useState(defaultChatMessage);

  // Estado e handlers para o botão "Voltar ao topo"
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

useEffect(() => {
  const onScroll = () => {
    if (typeof window !== "undefined") {
      setShowScrollTop(window.scrollY > 300);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", onScroll);
    onScroll();
  }
  return () => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", onScroll);
    }
  };
}, []);

return (
  <div className="min-h-screen bg-background font-poppins relative">

      {/* 1. Ordem correta dos componentes (COM IDs) */}
      <Navbar onContactClick={handleOpenModalGeneric} />
      
      {/* --- ALTERAÇÕES AQUI --- */}
      <Hero id="inicio" onSearchSubmit={handleOpenModalWithSearch} />
      <div id="sobre-mim">
        <AboutMe />
      </div>
      
      <PropertyCategories
        selectedCategory={selectedCategory}     
        onCategorySelect={setSelectedCategory}
      /> 
      
      {/* Adiciona os IDs aos outros componentes também */}
      {(() => {
        // Precisamos passar o ID para o FeaturedProperties
        const C: React.ComponentType<{ selectedCategory: string | null, id: string }> = FeaturedProperties;
        return (
          <C
            id="imoveis"
            selectedCategory={selectedCategory}
          />
        );
      })()}
      {(() => {
        // Cast Testimonials so we can pass an id prop for anchor linking
        const T: React.ComponentType<{ id: string }> = Testimonials;
        return <T id="depoimentos" />;
      })()}
      {(() => {
        // Cast Events so we can pass an id prop for anchor linking
        const E: React.ComponentType<{ id: string }> = Events;
        return <E id="eventos" />;
      })()}
      {(() => {
        // Cast InstagramFeed so we can pass an id prop for anchor linking
        const I: React.ComponentType<{ id: string }> = InstagramFeed;
        return <I id="instagram" />;
      })()}


      <Footer />

{/* 2. Botão Flutuante WhatsApp (AGORA COM POPOVER) */}
      <Popover open={isChatOpen} onOpenChange={setIsChatOpen}>
        <PopoverTrigger asChild>
          <button
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center bg-primary rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 group"
            aria-label="Iniciar conversa no WhatsApp"
            onClick={() => setIsChatOpen(true)}
          >
           
            <img 
              src={whatsappLogo} 
              alt="Iniciar conversa no WhatsApp" 
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
            />
           </button>
        </PopoverTrigger>
        
        {/* Conteúdo do Popover (O "Widget" da sua imagem) */}
        <PopoverContent 
          side="top"
          align="end"
          sideOffset={10}
          className="w-80 rounded-lg shadow-xl border p-0"
        >
          {/* Cabeçalho */}
          <div className="flex items-center justify-between bg-primary text-primary-foreground p-3 rounded-t-lg">
            <h3 className="font-poppins font-semibold text-base">Iniciar conversa</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground"
              onClick={() => {
                setIsChatOpen(false);
                setChatMessage(defaultChatMessage); 
              }}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Corpo do Widget */}
          <div className="p-4 space-y-3 bg-background rounded-b-lg">
            <Label htmlFor="chat-message" className="font-poppins text-sm text-muted-foreground">
              Digite sua mensagem:
            </Label>
            <Textarea
              id="chat-message"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              rows={4}
              className="font-poppins"
              placeholder="Escreva sua mensagem..."
            />
            {/* 4. BOTÃO DE ENVIAR ATUALIZADO (com ícone Send) */}
            <Button
              asChild 
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-montserrat" // Estilo verde
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(chatMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsChatOpen(false); 
                  setChatMessage(defaultChatMessage);
                }}
              >
                <Send className="h-4 w-4" /> {/* Ícone adicionado */}
                Enviar via WhatsApp
              </a>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      {/* Fim do Popover */}

      {/* 3. Modal de Contato */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseModal}
        searchCriteria={currentSearchCriteria}
      />

      {showScrollTop && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={scrollToTop}
                variant="default"
                size="icon"
                // MUDANÇAS AQUI: Removemos "right-6" e adicionámos "left-1/2 -translate-x-1/2"
                className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex h-14 w-14 rounded-full shadow-lg transition-all duration-300 group"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="h-7 w-7" />
              </Button>
            </TooltipTrigger>
            {/* MUDANÇA AQUI: "side" agora é "top" para o tooltip não ficar estranho */}
            <TooltipContent side="top">
              <p>Voltar ao topo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      {/* --- FIM DO NOVO CÓDIGO --- */}
    </div>
  );
};

export default Index;