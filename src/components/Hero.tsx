// src/components/Hero.tsx
import React, { useState } from "react";
import HeroGif from "@/assets/hero-background.gif";
import logoCentral from "@/assets/hero-central.png";
import localidadesData from "@/data/localidades.json";

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

// Interface para definir a estrutura dos dados da busca
interface SearchCriteria {
  estado?: string;
  cidade?: string;
  bairro?: string;
}

// Interface para as props do SearchForm
interface SearchFormProps {
  // Função que será chamada ao submeter a busca
  onSubmit: (criteria: SearchCriteria) => void;
}


// Componente SearchForm agora recebe a prop onSubmit
const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => { // Recebe onSubmit
  const [estadoSelecionado, setEstadoSelecionado] = useState<string | undefined>(undefined);
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string | undefined>(undefined);
  const [bairroSelecionado, setBairroSelecionado] = useState<string | undefined>(undefined);
  const [cidadesDisponiveis, setCidadesDisponiveis] = useState<{ nome: string; bairros: string[] }[]>([]);
  const [bairrosDisponiveis, setBairrosDisponiveis] = useState<string[]>([]);

  const estadosOrdenados = [...localidadesData].sort((a, b) => a.nome.localeCompare(b.nome));

  const handleEstadoChange = (siglaEstado: string) => {
    setEstadoSelecionado(siglaEstado);
    const estado = localidadesData.find(e => e.sigla === siglaEstado);
    const cidades = estado ? estado.cidades.sort((a, b) => a.nome.localeCompare(b.nome)) : [];
    setCidadesDisponiveis(cidades);
    setCidadeSelecionada(undefined);
    setBairroSelecionado(undefined);
    setBairrosDisponiveis([]);
  };

  const handleCidadeChange = (nomeCidade: string) => {
    setCidadeSelecionada(nomeCidade);
    const cidade = cidadesDisponiveis.find(c => c.nome === nomeCidade);
    const bairros = cidade ? [...cidade.bairros].sort((a, b) => a.localeCompare(b)) : [];
    setBairrosDisponiveis(bairros);
    setBairroSelecionado(undefined);
  };

  // Função para lidar com o clique no botão BUSCAR
  const handleSearchSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Previne recarregamento da página se estiver dentro de um <form>

    // Encontra o nome completo do estado selecionado para passar ao modal
     const estadoNome = estadosOrdenados.find(e => e.sigla === estadoSelecionado)?.nome;

    // Chama a função onSubmit passada pelo Index.tsx com os dados
    onSubmit({
      estado: estadoNome, // Passa o nome completo do estado
      cidade: cidadeSelecionada,
      bairro: bairroSelecionado,
    });
  };

  return (
    // Envolvemos em um <form> para semântica, mas prevenimos o submit padrão
    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
      <h3 className="text-center font-playfair text-2xl font-bold text-primary">
        Encontre seu imóvel ideal
      </h3>
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

        {/* Select Cidade */}
        <Select
          onValueChange={handleCidadeChange}
          value={cidadeSelecionada}
          disabled={!estadoSelecionado || cidadesDisponiveis.length === 0}
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

        {/* Select Bairro */}
        <Select
          onValueChange={setBairroSelecionado}
          value={bairroSelecionado}
          disabled={!cidadeSelecionada || bairrosDisponiveis.length === 0}
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
      </div>

      {/* Botão BUSCAR agora chama handleSearchSubmit */}
      <Button size="lg" className="w-full text-base" onClick={handleSearchSubmit}>
        BUSCAR
      </Button>
    </form>
  );
};

// Interface para as props do Hero
interface HeroProps {
  onSearchSubmit: (criteria: SearchCriteria) => void;
}

// Componente Hero Principal - agora recebe onSearchSubmit e passa para SearchForm
const Hero: React.FC<HeroProps> = ({ onSearchSubmit }) => { // Recebe onSearchSubmit
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
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
          Imóveis exclusivos, com propósito e confiança.
        </h1>
        <p className="font-poppins text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Encontre o lar dos seus sonhos aqui, imóveis selecionados para você, feitos sob medida, sua jornada começa aqui.
        </p>

        {/* Card de Busca */}
        <Card className="w-full max-w-3xl mx-auto text-left shadow-2xl">
          <CardContent className="p-6 md:p-8">
            {/* Abas de Filtro */}
            <Tabs defaultValue="comprar" className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6 h-auto bg-transparent gap-3">
                 {/* TabsTriggers (sem alterações) */}
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

              {/* Conteúdo das Abas - passa a prop onSubmit para SearchForm */}
              <TabsContent value="comprar">
                <SearchForm onSubmit={onSearchSubmit} />
              </TabsContent>
              <TabsContent value="repasse">
                <SearchForm onSubmit={onSearchSubmit} />
              </TabsContent>
              <TabsContent value="lancamentos">
                <SearchForm onSubmit={onSearchSubmit} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Hero;