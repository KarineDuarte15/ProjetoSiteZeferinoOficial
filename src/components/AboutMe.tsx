import React from 'react';
// Importa a tua foto de perfil (ajusta o caminho se necessário)
import profileImage from '@/assets/IMGprofile.png'; 

/*
 * Componente: AboutMe
 *
 * Objetivo: Apresenta uma secção "Sobre Mim" com foto e texto descritivo.
 * Utiliza TailwindCSS para estilização e layout.
 */
const AboutMe = () => {
  return (
    // "container" centra o conteúdo e adiciona padding lateral
    // "py-16" ou "py-20" adiciona um bom espaçamento vertical
    <section id="sobre-mim" className="bg-background py-20">
      <div className="container mx-auto px-4">
        
        {/* Layout em Grid: 
            - "md:grid-cols-2" divide em 2 colunas em ecrãs médios/grandes
            - "gap-12" ou "gap-16" dá espaço entre a foto e o texto
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Coluna 1: Imagem */}
          <div className="flex justify-center">
            <img 
              src={profileImage} 
              alt="Liliana Zeferino" 
              // "rounded-lg" suaviza as bordas
              // "shadow-xl" adiciona uma sombra para destaque
              className="rounded-lg shadow-xl w-full max-w-md object-cover"
            />
          </div>

          {/* Coluna 2: Texto */}
          <div>
            {/* Título da Secção */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sou Liliana Zeferino
            </h2>

            {/* Parágrafos do Texto
                - "space-y-4" adiciona espaço automaticamente entre cada <p>
                - "text-lg" aumenta ligeiramente o tamanho da fonte para leitura
                - "text-muted-foreground" usa uma cor de texto mais suave
            */}
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Corretora de imóveis apaixonada por ajudar pessoas a encontrarem o lar ideal ou o investimento perfeito, com <strong className="text-primary/90">atendimento exclusivo</strong> e foco total na experiência de cada cliente.
              </p>
              
              <p>
                Acredito que comprar um imóvel é muito mais do que uma transação: <strong className="text-primary/90">é a realização de um projeto de vida</strong>. Por isso, meu trabalho vai além da venda. Envolve entender histórias, planejar possibilidades e conduzir cada etapa com transparência, leveza e segurança.
              </p>
              
              <p>
                Com mais de um ano de experiência, desenvolvi um <strong className="text-primary/90">método próprio de atendimento</strong>, baseado em escuta ativa e consultoria personalizada, onde cada cliente é tratado de forma única.
              </p>
              
              <p>
                Meu compromisso é oferecer imóveis selecionados com exclusividade, alinhados ao perfil, às metas e ao momento de vida de quem me procura.
              </p>
              
              <p>
                Mais do que entregar chaves, meu propósito é <strong className="text-primary/90">entregar conquistas</strong> e mostrar que investir em um imóvel pode ser um processo simples, humano e inspirador.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;