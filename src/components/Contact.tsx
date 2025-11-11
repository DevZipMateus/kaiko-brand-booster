import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você e criar os melhores brindes para sua
            empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Informações de contato
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Telefone</p>
                      <a
                        href="tel:+5569999993301"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (69) 99999-3301
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-mail</p>
                      <a
                        href="mailto:kaikobonesvha@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        kaikobonesvha@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Endereço</p>
                      <p className="text-muted-foreground">
                        Avenida Presidente Tancredo Neves, 1465
                        <br />
                        CEP 76.981-137
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Horário de atendimento</p>
                      <p className="text-muted-foreground">
                        Segunda a sexta
                        <br />
                        7:30 às 11:30 e 13:30 às 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Redes sociais
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/kaikobones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/kaikobones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://tiktok.com/@kaikobonesvha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-xs font-bold"
                    aria-label="TikTok"
                  >
                    TT
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-primary rounded-lg p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Pronto para começar?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-md">
              Entre em contato agora e solicite um orçamento sem compromisso para seus
              brindes personalizados
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
            >
              <a
                href="https://wa.me/5569999993301"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
