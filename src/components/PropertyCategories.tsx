// src/components/PropertyCategories.tsx
import React from 'react'; // Importar React
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Importar o botão
import { cn } from "@/lib/utils"; // Importar cn para classes dinâmicas

// 1. Interface para as novas props (funções que vêm da página principal)
interface PropertyCategoriesProps {
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
}

// 2. Atualizamos o array de categorias com as descrições e os imóveis
//    Note que adicionei "idFilter" para facilitar o filtro no futuro
const categories = [
  {
    id: 1,
    title: "Vista Mar",
    idFilter: "Vista Mar",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    description: "Para quem sonha em acordar com o oceano. Imóveis com vistas deslumbrantes.",
    properties: ["Atlântico", "Vista Costeira", "Vista Mar"],
  },
  {
    id: 3, // Mudei o ID para 3 para ser consistente
    title: "Casas em Condomínio",
    idFilter: "Casas",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    description: "Segurança, privacidade e lazer completo para sua família em casas espaçosas.",
    properties: ["Mansões do lago (Casa)", "Madri Residence"],
  },
   {
    id: 6, // Mudei o ID para 6
    title: "Lazer Completo",
    idFilter: "Lazer",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    description: "Condomínios com infraestrutura completa: piscina, academia, áreas de festa e mais.",
    properties: ["Smart Pop Maraponga", "Mansões do lago (Casa)"],
  },
  {
    id: 2, // Mudei o ID para 2
    title: "Cobertura",
    idFilter: "Cobertura",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    description: "Exclusividade e espaço de sobra, com vistas panorâmicas da cidade.",
    properties: ["Smart Pop Maraponga"], 
  },
  {
    id: 4,
    title: "Beira Mar",
    idFilter: "Beira Mar",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop",
    description: "Sinta a brisa do mar todos os dias. Localização privilegiada pé na areia.",
    properties: ["Atlântico", "Vista Costeira", "Vista Mar"],
  },
  {
    id: 5,
    title: "Porteira Fechada",
    idFilter: "Porteira",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    description: "Mude-se imediatamente! Imóveis totalmente mobiliados e decorados.",
    properties: ["Smart Pop Maraponga"],
  },
];

// 3. O componente agora recebe as props da página principal
const PropertyCategories: React.FC<PropertyCategoriesProps> = ({ onCategorySelect, selectedCategory }) => {
  return (
    <section id="categorias" className="py-20 bg-background"> {/* ID alterado para não duplicar "imoveis" */}
      <div className="container px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-poppins text-sm uppercase tracking-widest text-accent mb-2">
            Imóveis
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Por categorias
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o tipo de imóvel ideal para você
          </p>
        </div>

        {/* 4. Botão para "Limpar Filtro" (Mostrar Todos) */}
        <div className="flex justify-center mb-8">
            <Button
              variant={!selectedCategory ? "default" : "outline"} // Destaca se "Todos" estiver selecionado
              onClick={() => onCategorySelect(null)} // Envia "null" para mostrar todos
              className="font-montserrat uppercase"
            >
              Mostrar Todas as Propriedades
            </Button>
        </div>

        {/* 5. Grid de Categorias (agora interativo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              // 6. Lógica de clique e estilo dinâmico
              onClick={() => onCategorySelect(category.idFilter)} // Envia o "idFilter" ao ser clicado
              className={cn(
                "relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer min-h-[16rem]", // min-h-64 (16rem)
                // Se esta categoria estiver selecionada, adiciona um anel de destaque
                selectedCategory === category.idFilter && "ring-4 ring-primary ring-offset-2"
              )}
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* 7. Conteúdo do Card com Título, Descrição e Imóveis */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <h3 className="font-playfair text-3xl font-bold mb-2">
                  {category.title}
                </h3>
                <p className="font-poppins text-sm text-white/90 mb-3">
                  {category.description}
                </p>
                {/* 8. Lista de imóveis (só aparece se houver algum) */}
                {category.properties.length > 0 && (
                  <div className="text-xs font-poppins text-white/80">
                    <span className="font-semibold uppercase">Inclui:</span>
                    <ul className="list-disc list-inside ml-1">
                      {category.properties.map((propName) => (
                        <li key={propName}>{propName}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;