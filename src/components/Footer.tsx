import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import logoHeader from "@/assets/hero-central.png";
// O 'Separator' não é mais necessário aqui
// import { Separator } from "@/components/ui/separator"; 

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container px-6 md:px-12">
        
        {/* --- DOCUMENTAÇÃO DA MUDANÇA ---
          Trocamos o layout de Grid + Separator por um único container Flex.
          - 'flex-col' empilha os itens no mobile.
          - 'md:flex-row' alinha os itens horizontalmente no desktop.
          - 'md:justify-between' distribui os itens (empurra o primeiro para a esquerda e o último para a direita).
          - 'md:items-start' alinha todos os blocos pelo topo.
        */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          
{/* === GRUPO 1: Marca & Contatos === */}
          {/* Este grupo é um flex para alinhar a logo ao lado dos contatos */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

            <div className="flex-shrink-0">
              <img 
                src={logoHeader} // <-- TROQUE AQUI pelo seu novo logo
                alt="Zeferino Logo" 
                className="w-20" // Ajuste o tamanho (w-40) conforme o seu novo logo
              />
            </div>

            {/* Contatos (Telefone & Email) 
              Este é o "pequeno espaçamento" (gap-4) que você pediu.
            */}
            <ul className="space-y-2 font-poppins text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>(85) 99640-9590</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                {/* Email atualizado com base na sua imagem */}
                <span>suporte@imoveiszeferino.com.br</span>
              </li>
            </ul>
          </div> {/* Fim do Grupo 1 */}

          {/* === GRUPO 2: Ícones Sociais === */}
          <div className="flex gap-4 justify-center"> {/* 'justify-center' para alinhar no mobile */}
            <a 
              href="https://www.instagram.com/lilianacorretora/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/lilianazeferinoimoveissemburocracia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div> {/* Fim do Grupo 2 */}

          {/* === GRUPO 3: Copyright === */}
          {/* 'text-center' no mobile, 'text-right' no desktop */}
          <div className="font-poppins text-sm text-primary-foreground/60 text-center md:text-right">
            {/* Ano 2025, como na sua imagem */}
            <p>&copy; 2025 Zeferino. Todos os direitos reservados.</p>
            <p className="text-sm text-primary-foreground/80">
                 Desenvolvido por{' '}
                 <a
                     href="https://site-karine-duarte-developer.vercel.app/" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="underline hover:text-white transition-colors"
                 >
                     Karine Duarte Desenvolvedora
                 </a>
            </p>
          </div> {/* Fim do Grupo 3 */}
      </div>
    </div>
    </footer>
  );
};

export default Footer;