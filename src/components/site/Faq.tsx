import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const perguntas = [
  {
    q: "Preciso já possuir o terreno para começar?",
    a: "Não. O financiamento cobre a aquisição do terreno e a construção em um único contrato. Se você ainda não tem terreno, ajudamos a encontrar o ideal.",
  },
  {
    q: "Posso utilizar meu FGTS?",
    a: "Sim. O saldo do FGTS pode ser usado como parte da entrada ou para amortizar parcelas, respeitando as regras do Banco.",
  },
  {
    q: "Quanto preciso dar de entrada?",
    a: "Depende do seu perfil e da modalidade. Em alguns casos, com o uso do FGTS e subsídios do Minha Casa Minha Vida, a entrada pode ser muito baixa ou até zero.",
  },
  {
    q: "Quanto tempo leva a construção?",
    a: "Em média, de 8 a 14 meses dependendo do tamanho do projeto. Você recebe cronograma e relatórios mensais de obra.",
  },
  {
    q: "Posso personalizar o projeto?",
    a: "Sim. Nossos arquitetos partem dos nossos modelos e personalizam ambientes, acabamentos e fachada conforme sua necessidade.",
  },
  {
    q: "Quando começo a pagar o financiamento?",
    a: "Você tem carência durante a obra. As parcelas integrais começam após a entrega das chaves.",
  },
  {
    q: "Qual banco realiza esse tipo de financiamento?",
    a: "Trabalhamos com o Banco, que oferece as melhores taxas e prazos para financiamento de terreno + construção.",
  },
  {
    q: "O financiamento cobre terreno e construção?",
    a: "Sim. Os dois valores são incluídos em um único contrato, simplificando a operação e reduzindo custos.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-border bg-card py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
            FAQ
          </span>
          <h2 className="text-balance text-3xl font-extrabold tracking-tighter md:text-4xl">
            Tire suas dúvidas
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {perguntas.map((p, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-bold">{p.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{p.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
