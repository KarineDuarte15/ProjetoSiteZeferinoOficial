import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Apartamento Luxury Vista Mar",
    location: "Barra da Tijuca, Rio de Janeiro",
    price: "R$ 2.500.000",
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Cobertura Elegance",
    location: "Leblon, Rio de Janeiro",
    price: "R$ 4.200.000",
    bedrooms: 5,
    bathrooms: 4,
    area: 250,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "Residência Clássica",
    location: "Jardim Botânico, Rio de Janeiro",
    price: "R$ 3.800.000",
    bedrooms: 4,
    bathrooms: 4,
    area: 320,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    featured: false
  }
];

const FeaturedProperties = () => {
  return (
    <section id="imoveis" className="py-20 bg-background">
      <div className="container px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Imóveis em Destaque
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Seleção exclusiva de propriedades que combinam sofisticação, conforto e localização privilegiada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card 
              key={property.id} 
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {property.featured && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Destaque
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
                  {property.title}
                </h3>
                <p className="font-poppins text-muted-foreground mb-4">
                  {property.location}
                </p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4 text-accent" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4 text-accent" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4 text-accent" />
                    <span>{property.area}m²</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="font-playfair text-2xl font-bold text-primary">
                    {property.price}
                  </p>
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Ver Todos os Imóveis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
