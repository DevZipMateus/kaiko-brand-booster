import { Target, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sobre nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A KAIKO Brindes está no mercado há mais de 10 anos, investindo sempre em
            novas ideias para que nossos produtos façam a diferença na hora de promover
            seu negócio ou evento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">Visão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ser referência nacional em bonés e brindes personalizados, reconhecida
                pela criatividade, qualidade e atendimento que transformam ideias em
                identidade.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Oferecer produtos personalizados que representem pessoas e marcas com
                autenticidade, estilo e excelência — unindo design, inovação e cuidado
                em cada detalhe.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-xl text-primary">Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Qualidade em cada criação</li>
                <li>• Criatividade e inovação</li>
                <li>• Comprometimento com prazos</li>
                <li>• Atendimento humano</li>
                <li>• Paixão pelo que fazemos</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary rounded-lg p-8 md:p-12 text-center">
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
            Com uma equipe especializada na fabricação de produtos promocionais em alta
            qualidade, nossa missão é fazer com que sua mensagem chegue de forma
            diferenciada ao público. Pensamos em cada detalhe para que sua promoção
            não seja algo comum no mercado, causando impacto rapidamente e trazendo o
            retorno do seu investimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
