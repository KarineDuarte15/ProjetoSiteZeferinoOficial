import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyCategories from "@/components/PropertyCategories";
import FeaturedProperties from "@/components/FeaturedProperties";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import ContactModal from "@/components/ContactModal";
import { MessageCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  // TooltipProvider já está no App.tsx, não precisa aqui
} from "@/components/ui/tooltip";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isWhatsappTooltipOpen, setIsWhatsappTooltipOpen] = useState(false);
  const whatsappNumber = "5585999999999"; // SEU NÚMERO com código do país e DDD
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os imóveis."; // Mensagem inicial

  // Efeito para abrir o modal na primeira vez que a página carrega
  useEffect(() => {
    // Você pode adicionar lógica aqui para só abrir uma vez por sessão
    // usando sessionStorage, por exemplo. Por agora, abre sempre.
    const timer = setTimeout(() => {
       setIsContactModalOpen(true);
    }, 1500); // Abre após 1.5 segundos (ajuste se desejar)

    // Limpa o timer se o componente for desmontado antes
    return () => clearTimeout(timer);
  }, []); // Array vazio garante que rode só na montagem inicial

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  // Função para abrir o modal (pode ser passada para botões)
  const handleOpenModal = () => {
    setIsContactModalOpen(true);
  };

  
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar onContactClick={handleOpenModal} />
      <Hero />
      <AboutMe />
      <div className="min-h-screen bg-background font-poppins relative"> {/* Adicione relative aqui se não tiver */}
      {/* ... (Navbar, Hero, etc) */}

      {/* Botão Flutuante do WhatsApp */}
<Tooltip open={isWhatsappTooltipOpen} onOpenChange={setIsWhatsappTooltipOpen}>
        <TooltipTrigger asChild>
          {/* O link agora está dentro do TooltipTrigger */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            // 3. Estilização do Botão Flutuante (ajustada)
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center bg-primary rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 group" // Use flex para centralizar ícone, ajuste tamanho (h-14 w-14)
            aria-label="Iniciar conversa no WhatsApp"
          >
            {/* Ícone (Idealmente SVG do WhatsApp) */}
            <MessageCircle className="h-7 w-7 text-primary-foreground transition-transform duration-300 group-hover:scale-110" /> {/* Ajuste tamanho e adicione animação */}
          </a>
        </TooltipTrigger>
        {/* 4. Conteúdo do Tooltip */}
        <TooltipContent
            side="left" // Posiciona à esquerda do botão
            align="center"
            sideOffset={10} // Distância do botão
            className="bg-charcoal text-white rounded-md shadow-lg border-none font-poppins" // Estilo do balão (cor de fundo pode ser ajustada)
            onPointerDownOutside={(e) => e.preventDefault()} // Evita fechar ao clicar fora
            >
          Olá, precisa de ajuda?
        </TooltipContent>
      </Tooltip>

      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
    </div>
      <PropertyCategories />
      <FeaturedProperties />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default Index;
