// src/components/ContactModal.tsx
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import MinhaFoto from "@/assets/IMGprofile.png";

// Interface para os critérios de busca recebidos
interface SearchCriteria {
  estado?: string;
  cidade?: string;
  bairro?: string;
}

// Interface para as props do componente
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchCriteria?: SearchCriteria; // Adiciona a prop opcional
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, searchCriteria }) => {
  const [contactPreference, setContactPreference] = useState<string>("whatsapp");

  // Função placeholder para o envio do formulário
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Combina dados do formulário com os critérios de busca
    const fullData = {
      ...data,
      preferenciaContato: contactPreference, // Adiciona a preferência selecionada
      interesseEstado: searchCriteria?.estado || "N/A",
      interesseCidade: searchCriteria?.cidade || "N/A",
      interesseBairro: searchCriteria?.bairro || "N/A",
    };

    console.log("Dados a serem enviados:", fullData);

    // ***************************************************************
    // AQUI ENTRA A LÓGICA DE ENVIO PARA O BACKEND OU SERVIÇO DE EMAIL
    // ***************************************************************
    // Exemplo usando console.log como placeholder:
    alert("Interesse registrado! Entraremos em contato em breve."); // Feedback para o usuário

    // try {
    //   // Exemplo: fetch('/api/send-email', { method: 'POST', body: JSON.stringify(fullData) });
    //   // Ou usar EmailJS, Formspree, etc.
    //   alert("Interesse registrado! Entraremos em contato em breve.");
    // } catch (error) {
    //   console.error("Erro ao enviar formulário:", error);
    //   alert("Ocorreu um erro ao enviar. Tente novamente.");
    // }

    onClose(); // Fecha o modal
  };

  // Gera uma descrição do interesse para exibir no modal
  const interestDescription = searchCriteria?.cidade
    ? `Interesse em imóveis em ${searchCriteria.bairro ? `${searchCriteria.bairro}, ` : ''}${searchCriteria.cidade}${searchCriteria.estado ? ` - ${searchCriteria.estado}` : ''}.`
    : 'Gostaria de mais informações.';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Ajuste o max-w se necessário */}
      <DialogContent className="sm:max-w-[800px] grid grid-cols-1 md:grid-cols-2 gap-8 p-0">
        {/* Lado Esquerdo */}
        <div className="p-8 flex flex-col justify-center bg-muted/30 rounded-l-lg">
          <DialogHeader className="mb-6 text-left">
            <DialogTitle className="text-3xl font-bold font-playfair text-primary mb-2">
              Fale Conosco
            </DialogTitle>
            <DialogDescription className="text-muted-foreground font-poppins">
              Preencha as informações ao lado e retornaremos o mais breve possível.
            </DialogDescription>
            {/* Mostra o interesse detectado */}
            {searchCriteria && (
                <p className='text-sm text-primary font-medium mt-2'>{interestDescription}</p>
            )}
          </DialogHeader>
           {/* Imagem (lembre-se de importar e usar sua imagem) */}
           <div className="relative mt-4">
             <img
                src={MinhaFoto} // <-- Garanta que esta variável é a mesma do import
                alt="Foto de liliana" // <-- Ajuste o alt text
                className="rounded-lg shadow-lg max-w-sm w-full h-auto object-contain mx-auto"
              />
             <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full -z-10 hidden md:block"></div>
           </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="p-8 flex flex-col">
          {/* Adiciona name aos inputs para FormData */}
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="nome" className="font-poppins">Nome</Label>
                <Input id="nome" name="nome" placeholder="Nome completo" required className="h-11" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="celular" className="font-poppins">Celular</Label>
                <Input id="celular" name="celular" placeholder="(DDD) 00000-0000" required className="h-11" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="font-poppins">Qual é o seu e-mail?</Label>
              <Input id="email" name="email" type="email" placeholder="seu.email@mail.com.br" required className="h-11" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="mensagem" className="font-poppins">Mensagem / Dúvida</Label>
              <Textarea
                 id="mensagem"
                 name="mensagem"
                 placeholder="Digite aqui sua dúvida ou o que você precisa..."
                 required
                 rows={3}
                 defaultValue={searchCriteria?.cidade ? '' : 'Gostaria de mais informações.'} // Preenche se não veio da busca
               />
            </div>
            <div className="space-y-2">
              <Label className="font-poppins">Como prefere que entremos em contato com você?</Label>
              <input type="hidden" name="preferenciaContato" value={contactPreference} />
              <ToggleGroup
                type="single"
                value={contactPreference}
                onValueChange={(value) => { if (value) setContactPreference(value); }}
                className="grid grid-cols-2 gap-2"
              >
                 <ToggleGroupItem value="whatsapp" aria-label="Contato via WhatsApp" className="h-11 border data-[state=on]:bg-primary/10 data-[state=on]:text-primary data-[state=on]:border-primary">
                      Via WhatsApp
                 </ToggleGroupItem>
                 <ToggleGroupItem value="ligacao" aria-label="Contato via Ligação" className="h-11 border data-[state=on]:bg-primary/10 data-[state=on]:text-primary data-[state=on]:border-primary">
                      Via Ligação
                 </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <DialogFooter className="mt-auto pt-4">
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat uppercase">
                Enviar Contato
              </Button>
            </DialogFooter>
          </form>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground md:hidden">
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;