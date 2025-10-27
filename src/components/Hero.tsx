import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import HeroGif from "@/assets/hero-background.gif";
import logoCentral from "@/assets/hero-central.png";


const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HeroGif} 
          alt="Luxurious home interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 transform px-0 text-center">
        {/* Logo Central */}
        <img 
          src={logoCentral} 
          alt="Zeferino Logo Central"
          className="w-100 md:w-108 mx-auto mb-4"
        />
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-playfair text-2xl md:text-4xl font-bold text-white mb-2">
            A chave para seu novo lar está aqui, imóveis exclusivos, com propósito e confiança
          </p>


          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="default" size="sm" className="font-montserrat uppercase">
                Comprar
              </Button>
              <Button variant="outline" size="sm" className="font-montserrat uppercase">
                Repasse
              </Button>
              <Button variant="outline" size="sm" className="font-montserrat uppercase">
                Lançamentos
              </Button>
            </div>

            <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
              Encontre seu imóvel ideal
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rio">Rio de Janeiro</SelectItem>
                  <SelectItem value="sp">São Paulo</SelectItem>
                  <SelectItem value="bh">Belo Horizonte</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Bairro" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leblon">Leblon</SelectItem>
                  <SelectItem value="ipanema">Ipanema</SelectItem>
                  <SelectItem value="barra">Barra da Tijuca</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="cobertura">Cobertura</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button size="lg" className="w-full font-montserrat uppercase">
              Buscar
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;