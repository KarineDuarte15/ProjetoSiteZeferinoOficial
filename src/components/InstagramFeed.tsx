import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import insta1 from '@/assets/instagram/insta1.jpg';
import insta2 from '@/assets/instagram/insta2.jpg';
import insta3 from '@/assets/instagram/insta3.jpg';
import insta4 from '@/assets/instagram/insta4.jpg';
import insta5 from '@/assets/instagram/insta5.jpg';
import insta6 from '@/assets/instagram/insta6.jpg';

const InstagramFeed = () => {
  // Posts em destaque - podem ser substituídos por dados reais da API do Instagram


  const featuredPosts = [
    {
      id: 1,
      image: "https://www.instagram.com/p/DC4A13ZuIk9/",
      alt: "inst1agram post",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop",
      alt: "Interior elegante",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop",
      alt: "Apartamento de luxo",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
      alt: "Sala de estar sofisticada",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=400&fit=crop",
      alt: "Quarto moderno",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop",
      alt: "Cozinha contemporânea",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Siga-nos no Instagram
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Acompanhe nossos imóveis em destaque, dicas e novidades
          </p>
          <Button 
            asChild
            size="lg"
            className="gap-2"
          >
            <a 
              href="https://instagram.com/zeferino" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
              @zeferino
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/lilianacorretora/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
