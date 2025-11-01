// src/components/Testimonials.tsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Usaremos Avatar para as fotos
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


// Interface para a estrutura de cada depoimento
interface Testimonial {
  id: number;
  name: string;
  text: string;
  imageUrl: string; // Caminho para a imagem do cliente
}

import cliente1Img from '@/assets/testimonials/cliente1.jpg';
import cliente2Img from '@/assets/testimonials/cliente2.jpg';
import cliente3Img from '@/assets/testimonials/cliente3.jpg';
import cliente4Img from '@/assets/testimonials/cliente4.jpg';
import cliente5Img from '@/assets/testimonials/cliente5.png';

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Diana e Diógenes",
    text: "Só tenho a agradecer por me ajudar a realizar meu sonho, minha casa, Você foi essencial nessa etapa da minha vida, Super atenciosa, me mostrou as melhores opções que se encaixava com a minha realidade, me explicou cada passo, foi comigo em todos os lugares precisos, e me auxíliou. Atendimento impecável, E hoje estou com a chave da minha casa, Que Deus te abençoe sempre.",
    imageUrl: cliente1Img, 
  },
  {
    id: 2,
    name: "Vitor e Carol",
    text: "Todo o processo está sendo muito tranquilo e sem burocracia. Profissionalismo e confiança do início ao fim, Preciso dizer muito obrigada por sempre me tratar tão bem e ser uma profissional e amiga, tá ajudando bastante.",
    imageUrl: cliente2Img, 
  },
  {
    id: 3,
    name: "Bianca Francklin",
    text: "Superou minhas expectativas! Atenção aos detalhes e um cuidado genuíno em encontrar o lugar perfeito para minha família.",
    imageUrl: cliente3Img,
  },
   { // Adicionando mais um para testar o carrossel
    id: 4,
    name: "Francisca Duarte",
    text: "Serviço diferenciado. Senti que minhas necessidades foram realmente compreendidas,Experiência incrível! Encontrei o imóvel dos meus sonhos com um atendimento exclusivo e atencioso, Recomendo fortemente, Muito feliz com a minha nova casa!",
    imageUrl: cliente5Img,
  },
     { // Adicionando mais um para testar o carrossel
    id: 5,
    name: "Lia",
    text: "Eu adorei o atendimento, me deixou segura e confiante atenção as minhas demandas foram essenciais, me mostrou algumas possibilidades de compra, tirou todas as minhas dúvidas e me orientou com muito cuidado em cada detalhe da escolha. Uma experiência leve e segura do início ao atual momento que só finaliza com minhas chaves na mão mas que tenho certeza que permanecerá assim",
    imageUrl: cliente4Img,
  },

  // Adicione mais depoimentos aqui...
];


const Testimonials = () => {
  // Não precisa de props por enquanto
  return (
    <section id="depoimentos" className="py-20 bg-muted/30"> {/* Fundo levemente diferente */}
      <div className="container px-6 md:px-12">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Depoimentos
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre a experiência Zeferino.
          </p>
        </div>

        {/* Carrossel de Depoimentos */}
        <Carousel
          opts={{
            align: "start",
            loop: true, // Habilita o loop infinito
          }}
          // Ajuste a largura máxima conforme necessário
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial) => (
              // Define quantos itens por slide (1 em todas as telas, ajuste se quiser)
              <CarouselItem key={testimonial.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  {/* Card para cada depoimento */}
                  <Card className="h-full border bg-card text-card-foreground shadow-lg flex flex-col items-center text-center p-6 md:p-8"> {/* Estilo do Card */}
                    <Avatar className="w-20 h-20 mb-4 border-2 border-primary/50"> {/* Tamanho da foto */}
                      <AvatarImage src={testimonial.imageUrl} alt={`Foto de ${testimonial.name}`} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback> {/* Inicial caso a imagem falhe */}
                    </Avatar>
                    <CardContent className="p-0 flex flex-col flex-grow items-center"> {/* Remove padding padrão e centraliza */}
                      <p className="font-poppins text-base text-muted-foreground mb-4 leading-relaxed flex-grow">
                        "{testimonial.text}"
                      </p>
                      <p className="font-montserrat text-sm font-semibold text-primary mt-auto"> {/* Nome do cliente no final */}
                        - {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Controles de Navegação (opcionalmente centralizados ou nas laterais) */}
           <CarouselPrevious className="absolute left-[-20px] sm:left-[-50px] top-1/2 -translate-y-1/2" />
           <CarouselNext className="absolute right-[-20px] sm:right-[-50px] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;