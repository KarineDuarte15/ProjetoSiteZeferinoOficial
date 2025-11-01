// src/components/Events.tsx

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react"; 


const eventsData = [
  {
    id: 1,
    title: "Feirão Casa Nova Zeferino",
    location: "Centro de Convenções",
    description: "O maior feirão de imóveis do ano! Condições imperdíveis e lançamentos exclusivos. Venha realizar seu sonho.",
    date: "em breve ",
    // Substitua esta URL por uma imagem importada
    image: "https://p2.trrsf.com/image/fget/cf/1548/0/images.terra.com/2022/09/29/425196786-casa-nova-dicas.jpg", 
    alt: "Pessoas em um feirão de imóveis",
  },
  {
    id: 2,
    title: "Workshop: Invista Certo",
    location: "Online (Via Zoom)",
    description: "Aprenda com especialistas como investir em imóveis com segurança e rentabilidade. Vagas limitadas.",
    date: "em breve",
    // Substitua esta URL por uma imagem importada
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&h=600&fit=crop",
    alt: "Pessoa apresentando em um workshop",
  },
  {
    id: 3,
    title: "Lançamento 'Vista Mar'",
    location: "Stand de Vendas (Praia do Futuro)",
    description: "Venha conhecer o decorado do nosso mais novo empreendimento. Um coquetel especial espera por você.",
    date: "em breve",
     // Substitua esta URL por uma imagem importada
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
    alt: "Prédio residencial de luxo",
  },
];

const Events = () => {
  return (
    // Usamos id="eventos" para que o link do seu Navbar funcione
    <section id="eventos" className="py-20 bg-muted/30"> {/* Fundo levemente diferente, como em Depoimentos */}
      <div className="container px-6 md:px-12">
        
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Eventos
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Participe de nossos lançamentos, feirões e workshops.
          </p>
        </div>

        {/* Grid de Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <Card 
              key={event.id} 
              className="overflow-hidden border bg-card text-card-foreground shadow-lg group flex flex-col h-full transition-all duration-300 hover:shadow-xl"
            >
              {/* Imagem do Evento */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={event.image}
                  alt={event.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badge com a Data */}
                <Badge className="absolute top-3 right-3 z-10 bg-accent text-accent-foreground shadow-lg font-poppins">
                  {event.date}
                </Badge>
              </div>

              {/* Conteúdo do Card */}
              <CardContent className="p-6 flex flex-col flex-grow">
                {/* Localização */}
                <p className="font-poppins text-sm text-muted-foreground mb-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent" /> 
                  {event.location}
                </p>
                
                {/* Título */}
                <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
                  {event.title}
                </h3>
                
                {/* Descrição */}
                <p className="font-poppins text-base text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {event.description}
                </p>
                
                {/* Botão */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-auto self-start" // Alinha o botão na base
                  asChild
                >
                  {/* Você pode direcionar isso para um modal ou WhatsApp */}
                  <a href={`whatsapp://send?text=Tenho%20interesse%20no%20evento%20${event.title}`} target="_blank" rel="noopener noreferrer">
                    Saiba Mais
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;