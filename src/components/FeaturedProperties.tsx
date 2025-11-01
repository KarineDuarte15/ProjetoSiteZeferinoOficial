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
// madri residence
import madriImg1 from "@/assets/madri/madri1.jpg";
import madriImg2 from "@/assets/madri/madri2.jpg";
import madriImg3 from "@/assets/madri/madri3.jpg";
import madriImg4 from "@/assets/madri/madri4.jpg";
import madriImg5 from "@/assets/madri/madri5.jpg";
import madriImg6 from "@/assets/madri/madri6.jpg"; 
import madriImg7 from "@/assets/madri/madri7.jpg";
import madriImg8 from "@/assets/madri/madri8.jpg";
import madriImg9 from "@/assets/madri/madri9.jpg";
import madriImg10 from "@/assets/madri/madri10.jpg";
// .......................................................
//  atlantico
import atlanticImg1 from "@/assets/atlantico/atlantico1.jpg";
import atlanticImg2 from "@/assets/atlantico/atlantico2.jpg";
import atlanticImg3 from "@/assets/atlantico/atlantico3.jpg";
import atlanticImg4 from "@/assets/atlantico/atlantico4.jpg";
import atlanticImg5 from "@/assets/atlantico/atlantico5.jpg";
import atlanticImg6 from "@/assets/atlantico/atlantico6.jpg"; 
import atlanticImg7 from "@/assets/atlantico/atlantico7.jpg";
import atlanticImg8 from "@/assets/atlantico/atlantico8.jpg";
import atlanticImg9 from "@/assets/atlantico/atlantico9.jpg";
import atlanticImg10 from "@/assets/atlantico/atlantico10.jpg";
import atlanticImg11 from "@/assets/atlantico/atlantico11.jpg";
import atlanticImg12 from "@/assets/atlantico/atlantico12.jpg";
import atlanticImg13 from "@/assets/atlantico/atlantico13.jpg";
import atlanticImg14 from "@/assets/atlantico/atlantico14.jpg";
import atlanticImg15 from "@/assets/atlantico/atlantico15.jpg";
import atlanticImg16 from "@/assets/atlantico/atlantico16.jpg";
import atlanticImg17 from "@/assets/atlantico/atlantico17.jpg";
import atlanticImg18 from "@/assets/atlantico/atlantico18.jpg"; 
import atlanticImg19 from "@/assets/atlantico/atlantico19.jpg";
import atlanticImg20 from "@/assets/atlantico/atlantico20.jpg";
import atlanticImg21 from "@/assets/atlantico/atlantico21.jpg";
import atlanticImg22 from "@/assets/atlantico/atlantico22.jpg";
import atlanticImg23 from "@/assets/atlantico/atlantico23.jpg";
import atlanticImg24 from "@/assets/atlantico/atlantico24.jpg";
// .......................................................  
//vista costeira 
import vistacosteiraImg1 from "@/assets/vistacosteira/img1.jpg";
import vistacosteiraImg2 from "@/assets/vistacosteira/img2.jpg";
import vistacosteiraImg3 from "@/assets/vistacosteira/img3.jpg";
import vistacosteiraImg4 from "@/assets/vistacosteira/img4.jpg";
import vistacosteiraImg5 from "@/assets/vistacosteira/img5.jpg";
import vistacosteiraImg6 from "@/assets/vistacosteira/img6.jpg";
import vistacosteiraImg7 from "@/assets/vistacosteira/img7.jpg";
import vistacosteiraImg8 from "@/assets/vistacosteira/img8.jpg";
import vistacosteiraImg9 from "@/assets/vistacosteira/img9.jpg";
import vistacosteiraImg10 from "@/assets/vistacosteira/img10.jpg";
import vistacosteiraImg11 from "@/assets/vistacosteira/img11.jpg";
import vistacosteiraImg12 from "@/assets/vistacosteira/img12.jpg";
import vistacosteiraImg13 from "@/assets/vistacosteira/img13.jpg";
import vistacosteiraImg14 from "@/assets/vistacosteira/img14.jpg";
import vistacosteiraImg15 from "@/assets/vistacosteira/img15.jpg";
import vistacosteiraImg16 from "@/assets/vistacosteira/img16.jpg";
import vistacosteiraImg17 from "@/assets/vistacosteira/img17.jpg";
import vistacosteiraImg18 from "@/assets/vistacosteira/img18.jpg";
import vistacosteiraImg19 from "@/assets/vistacosteira/img19.jpg";
import vistacosteiraImg20 from "@/assets/vistacosteira/img20.jpg";
import vistacosteiraImg21 from "@/assets/vistacosteira/img21.jpg";
import vistacosteiraImg22 from "@/assets/vistacosteira/img22.jpg";
import vistacosteiraImg23 from "@/assets/vistacosteira/img23.jpg";
import vistacosteiraImg24 from "@/assets/vistacosteira/img24.jpg";
import vistacosteiraImg25 from "@/assets/vistacosteira/img25.jpg";
import vistacosteiraImg26 from "@/assets/vistacosteira/img26.jpg";
import vistacosteiraImg27 from "@/assets/vistacosteira/img27.jpg";
import vistacosteiraImg28 from "@/assets/vistacosteira/img28.jpg";
import vistacosteiraImg29 from "@/assets/vistacosteira/img29.jpg";
import vistacosteiraImg30 from "@/assets/vistacosteira/img30.jpg";
//........................................................
//vista mar 
import vistamarImg1 from "@/assets/vistamar/img1.jpg";
import vistamarImg2 from "@/assets/vistamar/img2.jpg";
import vistamarImg3 from "@/assets/vistamar/img3.jpg";
import vistamarImg4 from "@/assets/vistamar/img4.jpg";
import vistamarImg5 from "@/assets/vistamar/img5.jpg";
import vistamarImg6 from "@/assets/vistamar/img6.jpg";
import vistamarImg7 from "@/assets/vistamar/img7.jpg";
import vistamarImg8 from "@/assets/vistamar/img8.jpg";
import vistamarImg9 from "@/assets/vistamar/img9.jpg";
import vistamarImg10 from "@/assets/vistamar/img10.jpg";
import vistamarImg11 from "@/assets/vistamar/img11.jpg";
import vistamarImg12 from "@/assets/vistamar/img12.jpg";
import vistamarImg13 from "@/assets/vistamar/img13.jpg";
import vistamarImg14 from "@/assets/vistamar/img14.jpg";
import vistamarImg15 from "@/assets/vistamar/img15.jpg";
import vistamarImg16 from "@/assets/vistamar/img16.jpg";
import vistamarImg17 from "@/assets/vistamar/img17.jpg";
import vistamarImg18 from "@/assets/vistamar/img18.jpg";
import vistamarImg19 from "@/assets/vistamar/img19.jpg";
import vistamarImg20 from "@/assets/vistamar/img20.jpg";
import vistamarImg21 from "@/assets/vistamar/img21.jpg";

//.......................................................
//vista parque 
import vistaParqueImg1 from "@/assets/vistaparque/img1.jpg";
import vistaParqueImg2 from "@/assets/vistaparque/img2.jpg";
import vistaParqueImg3 from "@/assets/vistaparque/img3.jpg";
import vistaParqueImg4 from "@/assets/vistaparque/img4.jpg";
import vistaParqueImg5 from "@/assets/vistaparque/img5.jpg";
import vistaParqueImg6 from "@/assets/vistaparque/img6.jpg";
import vistaParqueImg7 from "@/assets/vistaparque/img7.jpg";
import vistaParqueImg8 from "@/assets/vistaparque/img8.jpg";
import vistaParqueImg9 from "@/assets/vistaparque/img9.jpg";
import vistaParqueImg10 from "@/assets/vistaparque/img10.jpg";
import vistaParqueImg11 from "@/assets/vistaparque/img11.jpg";
import vistaParqueImg12 from "@/assets/vistaparque/img12.jpg";
import vistaParqueImg13 from "@/assets/vistaparque/img13.jpg";
import vistaParqueImg14 from "@/assets/vistaparque/img14.jpg";
import vistaParqueImg15 from "@/assets/vistaparque/img15.jpg";
import vistaParqueImg16 from "@/assets/vistaparque/img16.jpg";
import vistaParqueImg17 from "@/assets/vistaparque/img17.jpg";
import vistaParqueImg18 from "@/assets/vistaparque/img18.jpg";
import vistaParqueImg19 from "@/assets/vistaparque/img19.jpg";
import vistaParqueImg20 from "@/assets/vistaparque/img20.jpg"; 
import vistaParqueImg21 from "@/assets/vistaparque/img21.jpg";
import vistaParqueImg22 from "@/assets/vistaparque/img22.jpg";
import vistaParqueImg23 from "@/assets/vistaparque/img23.jpg";
import vistaParqueImg24 from "@/assets/vistaparque/img24.jpg";
import vistaParqueImg25 from "@/assets/vistaparque/img25.jpg";

//.......................................................
//vitória acácia 
//.......................................................
//vitória eusébio 
//.......................................................
//vitória isis 
//.......................................................
//vitória maracanaú 
//....................................................... 


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
        churrasqueiraImg,
        biker1Img,
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
      mansoesImg2,
      mansoesImg1, 
      PlantaImg4
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
      madriImg7,
      madriImg1,
      madriImg2,
      madriImg3,
      madriImg4,
      madriImg5,
      madriImg6,
      madriImg8,
      madriImg9,
      madriImg10
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
      atlanticImg8,
      atlanticImg1,
      atlanticImg2,
      atlanticImg3,
      atlanticImg4,
      atlanticImg5,
      atlanticImg6,
      atlanticImg7,
      atlanticImg9,
      atlanticImg10,
      atlanticImg11,
      atlanticImg12,
      atlanticImg13,
      atlanticImg14,
      atlanticImg15,
      atlanticImg16,
      atlanticImg17,
      atlanticImg18,
      atlanticImg19,
      atlanticImg20,
      atlanticImg21,
      atlanticImg22,
      atlanticImg23,
      atlanticImg24   
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
    images: [
      vistacosteiraImg11,
      vistacosteiraImg1,
      vistacosteiraImg2,
      vistacosteiraImg3,
      vistacosteiraImg4,
      vistacosteiraImg5,
      vistacosteiraImg6,
      vistacosteiraImg7,
      vistacosteiraImg8,
      vistacosteiraImg9,
      vistacosteiraImg10,
      vistacosteiraImg12,
      vistacosteiraImg13,
      vistacosteiraImg14,
      vistacosteiraImg15,
      vistacosteiraImg16,
      vistacosteiraImg17,
      vistacosteiraImg18,
      vistacosteiraImg19,
      vistacosteiraImg20,
      vistacosteiraImg21,
      vistacosteiraImg22,
      vistacosteiraImg23,
      vistacosteiraImg24,
      vistacosteiraImg25,
      vistacosteiraImg26,
      vistacosteiraImg27,
      vistacosteiraImg28,
      vistacosteiraImg29,
      vistacosteiraImg30
     ], 
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
      
      vistamarImg1,
      vistamarImg2,
      vistamarImg3,
      vistamarImg4,
      vistamarImg5,
      vistamarImg6,
      vistamarImg7,
      vistamarImg8,
      vistamarImg9,
      vistamarImg10,
      vistamarImg11,
      vistamarImg12,
      vistamarImg13,
      vistamarImg14,
      vistamarImg15,
      vistamarImg16,
      vistamarImg17,
      vistamarImg18,
      vistamarImg19,
      vistamarImg20,
      vistamarImg21
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
      vistaParqueImg15,
      vistaParqueImg1,
      vistaParqueImg2,
      vistaParqueImg3,
      vistaParqueImg4,
      vistaParqueImg5,
      vistaParqueImg6,
      vistaParqueImg7,
      vistaParqueImg8,
      vistaParqueImg9,
      vistaParqueImg10,
      vistaParqueImg11,
      vistaParqueImg12,
      vistaParqueImg13,
      vistaParqueImg14,
      vistaParqueImg16,
      vistaParqueImg17,
      vistaParqueImg18,
      vistaParqueImg19,
      vistaParqueImg20,
      vistaParqueImg21,
      vistaParqueImg22,
      vistaParqueImg23,
      vistaParqueImg24,
      vistaParqueImg25
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
  },
  {
    id: 12,
    title: "Belvedere",
    location: "Eusébio",
    bedrooms: 2,
    bathrooms: 2,
    area: "48,77  a 102,34m²",
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