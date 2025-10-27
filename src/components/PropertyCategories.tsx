import { Card } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    title: "Vista Mar",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Cobertura",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Casas em Condomínio",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Beira Mar",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Porteira Fechada",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Lazer Completo",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
  },
];

const PropertyCategories = () => {
  return (
    <section className="py-5 bg-background">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-64"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-playfair text-3xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
