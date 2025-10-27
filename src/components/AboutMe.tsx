// src/components/AboutMe.tsx
import React from "react";

const AboutMe = () => {
  return (
    // Definimos a seção com um ID para possível linkagem futura (#sobre)
    // Usamos padding vertical (py-20) e cor de fundo (bg-background) consistentes
    <section id="sobre" className="py-20 bg-background">
      {/* Container para centralizar e limitar a largura */}
      <div className="container px-6 md:px-12">
        {/* Bloco de texto centralizado */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Título da Seção */}
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Minha História
          </h2>

          {/* Seu texto */}
          {/* Usamos text-lg para boa legibilidade e text-muted-foreground para a cor padrão de texto secundário */}
          <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
            Minha história no mercado vem de um propósito bem forte com Deus,
            aonde eu buscava servir, mas não sabia por onde começar. Até que
            comecei a servir pessoas como uma forma de apresentar meu trabalho
            e fazê-las se sentir únicas e exclusivas, que a experiência
            precisava deixar marcas de lembranças, e que meu nome fosse
            reconhecido pela experiência de transformar aquela experiência como
            se fosse minha.
          </p>
          {/* Opcional: Você pode adicionar um botão ou uma imagem aqui se desejar */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;