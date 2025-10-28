// src/components/FeaturedProperties.tsx
import React from 'react'; // Import React
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Bed, Bath, Square, Home, Car, Import } from "lucide-react";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel";
// Importar o plugin Autoplay
import Autoplay from "embla-carousel-autoplay";

// --- IMPORT SUAS IMAGENS AQUI ---
//  Smart Pop Maraponga 

import biker1Img from '@/assets/pop-maraponga/bike.jpg';
import churrasqueiraImg from '@/assets/pop-maraponga/churrasqueira.jpg';
import cozinhaImg from '@/assets/pop-maraponga/cozinha.jpg';
import deckImg from '@/assets/pop-maraponga/deck.jpg';
import fachadaDImg from '@/assets/pop-maraponga/fachadaum.jpg';
import fachadaNImg from '@/assets/pop-maraponga/fachadadois.jpg';
import fitnessImg from '@/assets/pop-maraponga/fitness.jpg';
import playgroundImg from '@/assets/pop-maraponga/play.jpg';
import piscinaImg from '@/assets/pop-maraponga/piscina.jpg';
import guaritaImg from '@/assets/pop-maraponga/guarita.jpg';
import salaImg from '@/assets/pop-maraponga/sala.jpg';
import petImg from '@/assets/pop-maraponga/pet.jpg';
import suiteImg from '@/assets/pop-maraponga/suite.jpg';
import topImg from '@/assets/pop-maraponga/top.jpg';
import fotoImg from '@/assets/pop-maraponga/foto.jpg';
// .......................................................
//  Smart Mansões do lago (Casa)
import mansoesImg1 from "@/assets/mansoes-do-lago/Geral001.png";
import mansoesImg2 from "@/assets/mansoes-do-lago/Geral002.png";
import PlantaImg4 from "@/assets/mansoes-do-lago/Plantas001.jpeg";
import PlantaImg5 from "@/assets/mansoes-do-lago/Plantas002.jpeg";
import mansoesImg6 from "@/assets/mansoes-do-lago/Unidades001.png";
import mansoesImg7 from "@/assets/mansoes-do-lago/Unidades002.png";
import mansoesImg8 from "@/assets/mansoes-do-lago/Geral0001.png";
import mansoesImg9 from "@/assets/mansoes-do-lago/Areadelazer001.png";
import mansoesImg10 from "@/assets/mansoes-do-lago/Areadelazer002.png";
import mansoesImg11 from "@/assets/mansoes-do-lago/Areadelazer003.png";
import mansoesImg12 from "@/assets/mansoes-do-lago/Areadelazer004.png";
import mansoesImg13 from "@/assets/mansoes-do-lago/Areadelazer005.png";

// .......................................................



import { cn } from '@/lib/utils';








// Interface para definir a estrutura de um imóvel
interface Property {
  id: number;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  hasBalcony: boolean;
  parkingSpaces: number;
  images: string[]; // Array de strings (caminhos das imagens importadas ou URLs)
  featured: boolean;
}

// Array atualizado com os seus empreendimentos e usando imagens importadas
const properties: Property[] = [
  {
    id: 1,
    title: "Smart Pop Maraponga",
    location: "Maraponga",
    bedrooms: 2,
    bathrooms: 2,
    area: "42,38 a 662,34m²",
    hasBalcony: true,
    parkingSpaces: 1,
    // Use as variáveis importadas
    images: [

        biker1Img,
        churrasqueiraImg,
        cozinhaImg,
        deckImg,
        fachadaDImg,
        fachadaNImg
        ,fitnessImg,
        playgroundImg,
        piscinaImg,
        guaritaImg,
        salaImg,
        petImg,
        suiteImg,
        topImg,
        fotoImg
    ],
    featured: true
  },
  {
    id: 2,
    title: "Mansões do lago (Casa)",
    location: "Maracanaú",
    bedrooms: 3,
    bathrooms: 2,
    area: "88,68m²",
    hasBalcony: false,
    parkingSpaces: 2,
    // Substitua pelos imports reais ou URLs
    images: [ 
      mansoesImg1, 
      mansoesImg2
      ,PlantaImg4
      ,PlantaImg5
      ,mansoesImg6
      ,mansoesImg7
      ,mansoesImg8
      ,mansoesImg9
      ,mansoesImg10
      ,mansoesImg11
      ,mansoesImg12
      ,mansoesImg13
     ],
    featured: true
  },
  {
    id: 3,
    title: "Madri Residence",
    location: "Eusébio",
    bedrooms: 3,
    bathrooms: 2,
    area: "77,77 a 93,89m²",
    hasBalcony: true,
    parkingSpaces: 2,
     // Substitua pelos imports reais ou URLs
    images: [
      mansoesImg1
    ],
    featured: true
  },
   {
    id: 4,
    title: "Atlântico",
    location: "Praia do Futuro",
    bedrooms: 2,
    bathrooms: 2,
    area: "48,95 a 100,02m²",
    hasBalcony: true,
    parkingSpaces: 1,
    images: [
      mansoesImg1
    ],
    featured: false
  },
  {
    id: 5,
    title: "Vista Costeira",
    location: "Cumbuco",
    bedrooms: 2,
    bathrooms: 2,
    area: "48,82 a 84,08m²",
    hasBalcony: true,
    parkingSpaces: 1,
    images: [ mansoesImg2 ], // Substitua
    featured: false
  },
  {
    id: 6,
    title: "Vista Mar",
    location: "Praia do Futuro",
    bedrooms: 2,
    bathrooms: 2,
    area: "47,70 a 73,89m²",
    hasBalcony: true,
    parkingSpaces: 1,
     images: [
      mansoesImg1
    ],
    featured: false
  },
   {
    id: 7,
    title: "Vista Parque",
    location: "Passaré",
    bedrooms: 2,
    bathrooms: 2,
    area: "49,65 a 74,26m²",
    hasBalcony: true,
    parkingSpaces: 1,
    images: [
      mansoesImg1
    ],
    featured: false
  },
  {
    id: 8,
    title: "Vitória Acácia",
    location: "Messejana",
    bedrooms: 2,
    bathrooms: 1,
    area: "38,08 a 58,94m²",
    hasBalcony: false,
    parkingSpaces: 1,
     images: [
      mansoesImg1
    ],
    featured: false
  },
   {
    id: 9,
    title: "Vitória Eusébio",
    location: "Eusébio",
    bedrooms: 2,
    bathrooms: 1,
    area: "40,02 a 60,37m²",
    hasBalcony: false,
    parkingSpaces: 1,
    images: [
      mansoesImg1
    ],
    featured: false
  },
  {
    id: 10,
    title: "Vitória Isis",
    location: "Messejana",
    bedrooms: 2,
    bathrooms: 1,
    area: "40,02 a 63,47m²",
    hasBalcony: false,
    parkingSpaces: 1,
    images: [
      mansoesImg1
    ],
    featured: false
  },
   {
    id: 11,
    title: "Vitória Maracanaú",
    location: "Maracanaú",
    bedrooms: 2,
    bathrooms: 1,
    area: "38,08 a 58,21m²",
    hasBalcony: false,
    parkingSpaces: 1,
     images: [
      mansoesImg1
    ],
    featured: false
  }
];

const FeaturedProperties: React.FC = () => {

  // Hook para referência do plugin Autoplay (um para todos os carrosseis internos)
  // Se quiser que cada um tenha um controle independente, mova isso para dentro do map
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );
  const whatsappNumber = "5585996409590"; 

  return (
      <section id="imoveis" className="py-20 bg-background">
        <div className="container px-6 md:px-12">
          {/* Título e Descrição */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Imóveis em Destaque
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Seleção exclusiva de propriedades para você encontrar o seu lar ideal.
            </p>
          </div>

          {/* Carrossel Principal */}
          <Carousel
            opts={{ align: "start", loop: properties.length > 2 }}
            className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {properties.map((property) => {
                // 5. Construir a mensagem do WhatsApp para este imóvel
                let message = `Gostaria de saber mais sobre o ${property.title}\n`;
                message += `${property.location}\n\n`; // Adiciona localização e linha extra
                message += `${property.bedrooms} Quarto(s)\n`;
                message += `${property.bathrooms} Banheiro(s)\n`;
                message += `${property.area}\n`;
                if (property.hasBalcony) {
                  message += `Varanda\n`;
                }
                message += `${property.parkingSpaces} Vaga(s)`;

                // 6. Criar a URL do WhatsApp
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

                return (
                  <CarouselItem key={property.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="overflow-hidden border bg-card text-card-foreground shadow-lg group flex flex-col h-full">
                        {/* Carrossel Aninhado (Imagens) */}
                        <div className="relative overflow-hidden">
                          <Carousel
                            plugins={[autoplayPlugin.current]}
                            opts={{ loop: property.images.length > 1 }}
                            className="w-full"
                          >
                            <CarouselContent>
                              {property.images.map((imgSrc, imgIndex) => (
                                <CarouselItem key={imgIndex}>
                                  <img
                                    src={imgSrc}
                                    alt={`${property.title} - Imagem ${imgIndex + 1}`}
                                    className="w-full h-56 object-cover block"
                                  />
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            {property.images.length > 1 && (
                              <>
                                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10 h-8 w-8 bg-white/70 hover:bg-white text-primary" />
                                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10 h-8 w-8 bg-white/70 hover:bg-white text-primary" />
                              </>
                            )}
                          </Carousel>
                          {property.featured && (
                            <Badge className="absolute top-3 right-3 z-10 bg-accent text-accent-foreground shadow">
                              Destaque
                            </Badge>
                          )}
                        </div>

                        {/* Conteúdo do Card */}
                        <CardContent className="p-5 flex flex-col flex-grow">
                          {/* Título, Localização, Ícones */}
                          <h3 className="font-playfair text-xl font-bold text-primary mb-1"> {property.title} </h3>
                          <p className="font-poppins text-sm text-muted-foreground mb-3"> {property.location} </p>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-1"><Bed className="w-3.5 h-3.5 text-accent" /><span>{property.bedrooms} Quarto(s)</span></div>
                            <div className="flex items-center gap-1"><Bath className="w-3.5 h-3.5 text-accent" /><span>{property.bathrooms} Banheiro(s)</span></div>
                            <div className="flex items-center gap-1"><Square className="w-3.5 h-3.5 text-accent" /><span>{property.area}</span></div>
                            {property.hasBalcony && (<div className="flex items-center gap-1"><Home className="w-3.5 h-3.5 text-accent" /><span>Varanda</span></div>)}
                            <div className="flex items-center gap-1"><Car className="w-3.5 h-3.5 text-accent" /><span>{property.parkingSpaces} Vaga(s)</span></div>
                          </div>

                          {/* 7. Botão agora é um Link (<a>) estilizado */}
                          <div className="mt-auto pt-4 flex justify-end">
                            <a
                              href={whatsappUrl} // Usa a URL gerada
                              target="_blank" // Abre em nova aba
                              rel="noopener noreferrer"
                              // Aplica estilos de botão usando buttonVariants
                              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                            >
                              Saiba Mais
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* Controles do Carrossel Principal */}
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
          </Carousel>
        </div>
      </section>
    );
};

export default FeaturedProperties;