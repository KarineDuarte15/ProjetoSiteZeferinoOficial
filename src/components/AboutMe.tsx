// src/components/AboutMe.tsx
import React from "react";
import MinhaFoto from "@/assets/ImgProfile1.png"; // <-- IMPORT SUA FOTO AQUI

const AboutMe = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


          <div className="text-center md:text-left">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Minha História
            </h2>
            <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
              Minha história no mercado vem de um propósito bem forte com Deus,
              aonde eu buscava servir, mas não sabia por onde começar. Até que
              comecei a servir pessoas como uma forma de apresentar meu trabalho
              e fazê-las se sentir únicas e exclusivas, que a experiência
              precisava deixar marcas de lembranças, e que meu nome fosse
              reconhecido pela experiência de transformar aquela experiência como
              se fosse minha.
            </p>
          </div>

          {/* Coluna 2: Imagem */}
          <div className="flex justify-center items-center relative">
             {/* Elemento decorativo de fundo (opcional) */}
             <div className="absolute w-48 h-48 bg-secondary/20 rounded-full -bottom-8 -left-8 -z-10 opacity-50 hidden md:block"></div>
            <img
              src={MinhaFoto} // <-- Usar a imagem importada
              alt="Foto de Liliana" // <-- Altere o Alt Text
              // 2. MUDANÇA: Ajustes na imagem
              // max-w-sm limita o tamanho, rounded-lg adiciona bordas arredondadas
              // object-contain garante que a imagem inteira apareça
              className="rounded-lg shadow-lg max-w-sm w-full h-auto object-contain mx-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;