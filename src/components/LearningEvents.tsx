// src/components/LearningEvents.tsx
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
// Importamos o Autoplay para fazer a barra rolar sozinha
import Autoplay from "embla-carousel-autoplay";

// Imagens dos eventos 
import fotoEvento1 from '@/assets/eventos/img1.jpg';
import fotoEvento2 from '@/assets/eventos/img2.jpg';
import fotoEvento3 from '@/assets/eventos/img3.jpg';
import fotoEvento4 from '@/assets/eventos/img4.jpg';
import fotoEvento5 from '@/assets/eventos/img5.jpg';
import fotoEvento7 from '@/assets/eventos/img7.jpg';
import fotoEvento8 from '@/assets/eventos/img8.jpg';


const eventImages = [
  {
    // src: fotoEvento1, // <- Troque por esta linha
    src: fotoEvento1,
    alt: "Evento de Lançamento",
  },
  {
    // src: fotoEvento2,
    src: fotoEvento2,
    alt: "Palestra sobre Mercado Imobiliário",
  },
  {
    // src: fotoEvento3,
    src: fotoEvento3,
    alt: "Curso de Vendas",
  },
  {
    // src: fotoEvento4,
    src: fotoEvento4,
    alt: "Networking Imobiliário",
  },
  {
    // src: fotoEvento5,
    src: fotoEvento5,
    alt: "Aprendizado Contínuo, Conexões Valiosas",
  },
  {
    // src: fotoEvento7,
    src: fotoEvento7, 
    alt: "Inovação e Criatividade",
  },
  {
    // src: fotoEvento8,
    src: fotoEvento8,
    alt: "Liderança e Gestão",
  },
];

// Interface para receber o ID do Navbar
interface LearningEventsProps {
  id: string;
}

const LearningEvents: React.FC<LearningEventsProps> = ({ id }) => {
  // Configuração do plugin Autoplay
  const plugin = React.useRef(
    Autoplay({ 
      delay: 3000,                // 3 segundos por foto
      stopOnInteraction: false,   // Não para se o utilizador clicar
      stopOnMouseEnter: true,     // Para quando o rato está em cima
    })
  );

  return (
    // Usamos o ID aqui para que o link do Navbar funcione
    <section id={id} className="py-20 bg-muted/30"> {/* Fundo suave */}
      <div className="container px-6 md:px-12">
        
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Aprendizado & Networking
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha jornada em eventos, palestras e conexões valiosas que fortalecem meu trabalho.
          </p>
        </div>

        {/* Carrossel de Imagens 
          Usamos o plugin de Autoplay e loop
        */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {eventImages.map((image, index) => (
              <CarouselItem 
                key={index} 
                // Define quantas fotos aparecem por vez
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                {/* Card de Imagem */}
                <div className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src} // O src vem do nosso array
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay escuro para a legenda */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {/* Legenda da Foto */}
                  <p className="absolute bottom-4 left-4 font-poppins text-sm font-medium text-white">
                    {image.alt}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LearningEvents;