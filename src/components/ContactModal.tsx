// src/components/ContactModal.tsx
import React, { useState } from 'react'; // Removido useEffect se não for mais necessário aqui
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
import MinhaFoto from "@/assets/ImgProfile1.png";

// Interface SÓ para dados da busca
interface SearchCriteria {
  estado?: string;
  cidade?: string;
  bairro?: string;
}

// Interface para as props do componente (simplificada)
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Renomeado para ser específico da busca
  searchCriteria?: SearchCriteria;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, searchCriteria }) => {
  const [contactPreference, setContactPreference] = useState<string>("whatsapp");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Adiciona a preferência de contato aos dados do formulário
    formData.append('preferenciaContato', contactPreference);

    // Adiciona os critérios de busca (se existirem) aos dados do formulário
    if (searchCriteria) {
      formData.append('interesseTipo', "Busca Genérica");
      formData.append('interesseEstado', searchCriteria.estado || "N/A");
      formData.append('interesseCidade', searchCriteria.cidade || "N/A");
      formData.append('interesseBairro', searchCriteria.bairro || "N/A");
    } else {
      formData.append('interesseTipo', "Contato Genérico");
    }

    // Converte FormData para um objeto simples para logar (ou enviar como JSON)
    const dataToSend = Object.fromEntries(formData.entries());

    console.log("Dados a serem enviados:", dataToSend);

    // --- Implementação do Envio ---
    // Substitua o console.log pela lógica de envio (backend, Formspree, EmailJS etc.)
    // Exemplo:
    // try {
    //   const response = await fetch('URL_DO_SEU_BACKEND_OU_SERVICO', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(dataToSend),
    //   });
    //   if (!response.ok) throw new Error('Falha no envio');
    //   alert("Contato enviado com sucesso! Entraremos em contato em breve.");
    //   onClose(); // Fecha o modal após sucesso
    // } catch (error) {
    //   console.error("Erro ao enviar formulário:", error);
    //   alert("Ocorreu um erro ao enviar. Por favor, tente novamente.");
    // }
    // --- Fim da Implementação do Envio ---

    // Placeholder de sucesso (REMOVER APÓS IMPLEMENTAR ENVIO REAL)
    alert("Interesse registrado! Entraremos em contato em breve. (Simulação)");
    onClose(); // Fecha o modal
  };

  // Gera a descrição do interesse para exibir no modal (simplificada)
  let interestDescription = 'Gostaria de mais informações.';
  if (searchCriteria?.cidade) {
     interestDescription = `Interesse em imóveis em ${searchCriteria.bairro ? `${searchCriteria.bairro}, ` : ''}${searchCriteria.cidade}${searchCriteria.estado ? ` - ${searchCriteria.estado}` : ''}.`;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] grid grid-cols-1 md:grid-cols-2 gap-8 p-0 overflow-hidden"> {/* Adicionado overflow-hidden */}
        {/* Lado Esquerdo */}
        <div className="p-8 flex flex-col justify-center bg-muted/30 rounded-l-lg order-last md:order-first"> {/* Mudado a ordem em telas pequenas */}
          <DialogHeader className="mb-6 text-left">
            <DialogTitle className="text-3xl font-bold font-playfair text-primary mb-2">
              Fale Conosco {/* Título alterado */}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground font-poppins">
              Preencha as informações ao lado e retornaremos o mais breve possível.
            </DialogDescription>
            {/* Mostra o interesse da busca (se houver) */}
             {searchCriteria && (
                <p className='text-sm text-primary font-medium mt-2'>{interestDescription}</p>
             )}
          </DialogHeader>
           {/* Imagem Placeholder - Adicione sua imagem aqui se desejar */}

           <div className="relative mt-4 hidden md:block"> {/* Esconde imagem em telas pequenas */}
                <img
                  src={MinhaFoto} // <-- Usar a imagem importada
                  alt="Foto de Liliana" // <-- Altere o Alt Text
                  // 2. MUDANÇA: Ajustes na imagem
                  // max-w-sm limita o tamanho, rounded-lg adiciona bordas arredondadas
                  // object-contain garante que a imagem inteira apareça
                  className="rounded-lg shadow-lg max-w-sm w-full h-auto object-contain mx-auto"
                />
             <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full -z-10"></div>
           </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="p-8 flex flex-col order-first md:order-last"> {/* Mudado a ordem em telas pequenas */}
          {/* Adiciona name aos inputs para FormData */}
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-grow">
            {/* Campos Nome, Celular, Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="nome" className="font-poppins">Nome</Label>
                <Input id="nome" name="nome" placeholder="Nome completo" required className="h-11 border-primary/50 focus:border-primary focus:ring-primary/20" /> {/* Estilo sutil */}
              </div>
              <div className="space-y-1">
                <Label htmlFor="celular" className="font-poppins">Celular</Label>
                <Input id="celular" name="celular" placeholder="(DDD) 00000-0000" required className="h-11 border-primary/50 focus:border-primary focus:ring-primary/20" /> {/* Estilo sutil */}
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="font-poppins">Qual é o seu e-mail?</Label>
              <Input id="email" name="email" type="email" placeholder="seu.email@mail.com.br" required className="h-11 border-primary/50 focus:border-primary focus:ring-primary/20" /> {/* Estilo sutil */}
            </div>
            <div className="space-y-1">
              <Label htmlFor="mensagem" className="font-poppins">Mensagem / Dúvida</Label>
              {/* Pré-preenche a mensagem */}
              <Textarea
                 id="mensagem"
                 name="mensagem"
                 placeholder="Digite aqui sua dúvida ou o que você precisa..."
                 required
                 rows={3}
                 defaultValue={searchCriteria?.cidade ? interestDescription : 'Gostaria de mais informações.'}
                 className="border-primary/50 focus:border-primary focus:ring-primary/20" // Estilo sutil
               />
            </div>
            {/* Preferência de Contato */}
            <div className="space-y-2">
                 <Label className="font-poppins">Como prefere que entremos em contato?</Label>
                 <ToggleGroup
                   type="single"
                   value={contactPreference}
                   onValueChange={(value) => { if (value) setContactPreference(value); }}
                   className="grid grid-cols-2 gap-2"
                   // O valor será pego do estado, não precisa de 'name' aqui
                 >
                    <ToggleGroupItem value="whatsapp" aria-label="Contato via WhatsApp" className="h-11 border border-primary/50 data-[state=on]:bg-primary/10 data-[state=on]:text-primary data-[state=on]:border-primary">
                      Via WhatsApp
                    </ToggleGroupItem>
                    <ToggleGroupItem value="ligacao" aria-label="Contato via Ligação" className="h-11 border border-primary/50 data-[state=on]:bg-primary/10 data-[state=on]:text-primary data-[state=on]:border-primary">
                      Via Ligação
                    </ToggleGroupItem>
                 </ToggleGroup>
             </div>
            <DialogFooter className="mt-auto pt-4">
              {/* Botão de envio com a cor accent */}
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat uppercase">
                Enviar Contato
              </Button>
            </DialogFooter>
          </form>
           {/* Botão X padrão - Visível apenas se DialogClose não estiver presente ou escondido */}
           {/* O componente DialogContent já inclui um botão X por padrão */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;