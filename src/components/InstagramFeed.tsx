import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import insta1 from '@/assets/instagram/insta1.png';
import insta2 from '@/assets/instagram/insta2.png';
import insta3 from '@/assets/instagram/insta3.png';
import insta4 from '@/assets/instagram/insta4.png';
import insta5 from '@/assets/instagram/insta5.png';
import insta6 from '@/assets/instagram/insta6.png';

const InstagramFeed = () => {


  const featuredPosts = [
    {
      id: 1,
      image: insta1,
      alt: "inst1agram post",
    },
    {
      id: 2,
      image: insta2,
      alt: "Interior elegante",
    },
    {
      id: 3,
      image: insta3,
      alt: "Apartamento de luxo",
    },
    {
      id: 4,
      image: insta4,
      alt: "Sala de estar sofisticada",
    },
    {
      id: 5,
      image: insta5,
      alt: "Quarto moderno",
    },
    {
      id: 6,
      image: insta6,
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
              @Lilianacorretora
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
