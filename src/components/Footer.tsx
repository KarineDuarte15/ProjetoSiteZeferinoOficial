import { Key, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import logoHeader from "@/assets/logoheader.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
              src={logoHeader} 
              alt="Zeferino Logo" 
              className="w-16 h-16 logo-key" // Adicionamos a classe 'logo-key' para a animação
            />
              <h3 className="font-playfair text-3xl font-bold">Zeferino</h3>
            </div>
            <p className="font-poppins text-primary-foreground/80 mb-4">
              A chave para seu novo lar. Imóveis Exclusivos, com propósito e confiança.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat text-sm uppercase tracking-wide mb-4 text-accent">
              Links Rápidos
            </h4>
            <ul className="space-y-2 font-poppins">
              <li>
                <a href="#imoveis" className="hover:text-accent transition-colors">
                  Imóveis
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-accent transition-colors">
                  Sobre Liliana
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-accent transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat text-sm uppercase tracking-wide mb-4 text-accent">
              Contato
            </h4>
            <ul className="space-y-3 font-poppins">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span>(85) 99640-9590</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span>contato@zeferino.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span>Fortaleza, CE</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="text-center font-poppins text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Zeferino. Todos os direitos reservados.</p>
          <p className="text-sm text-primary-foreground/80"> {/* Aplica as mesmas classes */}
               Desenvolvido por{' '}
               <a
                   href="https://site-karine-duarte-developer.vercel.app/" // Coloque o link correto aqui
                   target="_blank"
                   rel="noopener noreferrer"
                   className="underline hover:text-white transition-colors" // Estilo do link
               >
                   Karine Duarte Desenvolvedora
               </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
