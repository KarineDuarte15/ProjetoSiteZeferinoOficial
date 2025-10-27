// src/components/ContactModal.tsx
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose, // Para o botão X padrão
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Usaremos Textarea para a descrição
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"; 
import  Image  from "@/assets/IMGprofile.png";

// Interface para definir as props que o componente receberá
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // Estado para controlar a preferência de contato
  const [contactPreference, setContactPreference] = useState<string>("whatsapp"); // Valor inicial

  // Função placeholder para o envio do formulário
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Formulário enviado! (Implementar lógica de envio)");
    // Aqui você adicionaria a lógica para enviar os dados
    // para um backend, serviço de email, etc.
    onClose(); // Fecha o modal após o envio (simulação)
  };

  return (
    // Controla a abertura/fechamento do Dialog com base na prop 'isOpen'
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] grid grid-cols-1 md:grid-cols-2 gap-8 p-0">
        {/* Lado Esquerdo: Título, Descrição e Imagem */}
        <div className="p-8 flex flex-col justify-center bg-muted/30 rounded-l-lg">
          <DialogHeader className="mb-6 text-left">
            <DialogTitle className="text-3xl font-bold font-playfair text-primary mb-2">
              Ficou com alguma dúvida?
            </DialogTitle>
            <DialogDescription className="text-muted-foreground font-poppins">
              Preencha as informações ao lado que em breve entraremos em contato com você.
            </DialogDescription>
          </DialogHeader>
          {/* Imagem Placeholder - substitua pelo seu src/assets/sua-imagem.jpg */}
          <div className="relative mt-4">
            <img
              src={Image}
              alt="Consultoria"
              className="rounded-md w-full h-auto max-h-[250px] object-contain" 
            />
            {/* Elementos decorativos (opcional) */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="p-8 flex flex-col">
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-grow">
            {/* Campos do Formulário */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="nome" className="font-poppins">Nome</Label>
                <Input id="nome" placeholder="Nome completo" required className="h-11" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="celular" className="font-poppins">Celular</Label>
                <Input id="celular" placeholder="(DDD) 00000-0000" required className="h-11" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="font-poppins">Qual é o seu e-mail?</Label>
              <Input id="email" type="email" placeholder="seu.email@mail.com.br" required className="h-11" />
            </div>
            {/* Removi "Em qual cidade sua empresa está situada?" pois parece específico do exemplo */}
            <div className="space-y-1">
              <Label htmlFor="mensagem" className="font-poppins">Mensagem / Dúvida</Label>
              <Textarea id="mensagem" placeholder="Digite aqui sua dúvida ou o que você precisa..." required rows={3} />
            </div>

            {/* Preferência de Contato */}
            <div className="space-y-2">
              <Label className="font-poppins">Como prefere que entremos em contato com você?</Label>
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

            {/* Botão de Envio */}
            <DialogFooter className="mt-auto pt-4">
                {/* Botão para fechar (opcional, já tem o X) */}
                {/* <Button type="button" variant="outline" onClick={onClose}>Cancelar</Button> */}
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat uppercase">
                Agendar Consultoria
              </Button>
            </DialogFooter>
          </form>
           {/* Botão X padrão do Dialog */}
           <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground md:hidden">
             <span className="sr-only">Close</span>
           </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;