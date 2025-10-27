// src/components/Hero.tsx
import React, { useState } from "react"; // Import useState
import HeroGif from "@/assets/hero-background.gif";
import logoCentral from "@/assets/hero-central.png";
import localidadesData from "@/data/localidades.json"; // Importe o JSON

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Componente interno do Formulário de Busca (ATUALIZADO com JSON local e seleção dependente)
const SearchForm = () => {
  // Estados para controlar as seleções e as opções disponíveis
  const [estadoSelecionado, setEstadoSelecionado] = useState<string | undefined>(undefined);
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string | undefined>(undefined);
  const [bairroSelecionado, setBairroSelecionado] = useState<string | undefined>(undefined);

  const [cidadesDisponiveis, setCidadesDisponiveis] = useState<{ nome: string; bairros: string[] }[]>([]);
  const [bairrosDisponiveis, setBairrosDisponiveis] = useState<string[]>([]);

  // Ordena os estados alfabeticamente para o primeiro Select
  const estadosOrdenados = [...localidadesData].sort((a, b) => a.nome.localeCompare(b.nome));

  // Função chamada quando um estado é selecionado
  const handleEstadoChange = (siglaEstado: string) => {
    setEstadoSelecionado(siglaEstado);
    const estado = localidadesData.find(e => e.sigla === siglaEstado);
    const cidades = estado ? estado.cidades.sort((a, b) => a.nome.localeCompare(b.nome)) : [];
    setCidadesDisponiveis(cidades);
    // Reseta cidade e bairro selecionados e disponíveis
    setCidadeSelecionada(undefined);
    setBairroSelecionado(undefined);
    setBairrosDisponiveis([]);
  };

  // Função chamada quando uma cidade é selecionada
  const handleCidadeChange = (nomeCidade: string) => {
    setCidadeSelecionada(nomeCidade);
    const cidade = cidadesDisponiveis.find(c => c.nome === nomeCidade);
    const bairros = cidade ? [...cidade.bairros].sort((a, b) => a.localeCompare(b)) : [];
    setBairrosDisponiveis(bairros);
    // Reseta bairro selecionado
    setBairroSelecionado(undefined);
  };

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-center font-playfair text-2xl font-bold text-primary">
        Encontre seu imóvel ideal
      </h3>

      {/* Grid para os selects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Select Estado */}
        <Select onValueChange={handleEstadoChange} value={estadoSelecionado}>
          <SelectTrigger className="h-12 text-base">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            {estadosOrdenados.map((estado) => (
              <SelectItem key={estado.sigla} value={estado.sigla}>
                {estado.nome}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Select Cidade (depende do estado) */}
        <Select
          onValueChange={handleCidadeChange}
          value={cidadeSelecionada}
          disabled={!estadoSelecionado || cidadesDisponiveis.length === 0} // Desabilitado se nenhum estado selecionado ou sem cidades
        >
          <SelectTrigger className="h-12 text-base">
            <SelectValue placeholder="Cidade" />
          </SelectTrigger>
          <SelectContent>
            {cidadesDisponiveis.map((cidade) => (
              <SelectItem key={cidade.nome} value={cidade.nome}>
                {cidade.nome}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Select Bairro (depende da cidade) */}
        <Select
          onValueChange={setBairroSelecionado} // Apenas atualiza o estado do bairro
          value={bairroSelecionado}
          disabled={!cidadeSelecionada || bairrosDisponiveis.length === 0} // Desabilitado se nenhuma cidade selecionada ou sem bairros
        >
          <SelectTrigger className="h-12 text-base">
            <SelectValue placeholder="Bairro" />
          </SelectTrigger>
          <SelectContent>
            {bairrosDisponiveis.map((bairro) => (
              <SelectItem key={bairro} value={bairro}>
                {bairro}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

         {/* Adicione o Select de Tipo de volta se precisar, ajustando o layout */}
         {/* Exemplo para layout 2x2 em telas pequenas e 4 colunas em médias:
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               ... (Estado, Cidade, Bairro) ...
             <Select> ... (Tipo) ... </Select>
            </div>
         */}

      </div>

      <Button size="lg" className="w-full text-base">
        BUSCAR
      </Button>
    </div>
  );
};


// Componente Hero Principal
const Hero = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center flex items-center justify-center pt-24 pb-12"
      style={{ backgroundImage: `url(${HeroGif})` }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        {/* Logo Central */}
        <img
          src={logoCentral}
          alt="Zeferino Logo Central"
          className="w-40 md:w-48 mx-auto mb-4"
        />

        {/* Textos */}
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
          Imóveis Exclusivos, com propósito e confiança.
        </h2>
        <p className="font-poppins text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Encontre seu imóvel dos sonhos, feito sob medida para você. Sua jornada para o lar perfeito começa aqui.
        </p>

        {/* Card de Busca */}
        <Card className="w-full max-w-3xl mx-auto text-left shadow-2xl">
          <CardContent className="p-6 md:p-8">
            {/* Abas de Filtro */}
            <Tabs defaultValue="comprar" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 h-auto bg-transparent gap-3">
                <TabsTrigger
                  value="comprar"
                  className="py-2.5 font-montserrat uppercase border-2 border-primary text-primary bg-white shadow-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
                >
                  COMPRAR
                </TabsTrigger>
                <TabsTrigger
                  value="repasse"
                  className="py-2.5 font-montserrat uppercase border-2 border-primary text-primary bg-white shadow-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
                >
                  Repasse
                </TabsTrigger>
                <TabsTrigger
                  value="lancamentos"
                  className="py-2.5 font-montserrat uppercase border-2 border-primary text-primary bg-white shadow-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
                >
                  LANÇAMENTOS
                </TabsTrigger>
              </TabsList>

              {/* Conteúdo das Abas (usando o mesmo formulário) */}
              <TabsContent value="comprar">
                <SearchForm />
              </TabsContent>
              <TabsContent value="repasse">
                <SearchForm />
              </TabsContent>
              <TabsContent value="lancamentos">
                <SearchForm />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Hero;