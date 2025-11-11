import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-kaiko.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-secondary to-background"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img
            src={logo}
            alt="KAIKO BRINDES"
            className="w-64 md:w-80 mb-8 animate-fade-in"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            KAIKO BRINDES
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-2xl">
            Bonés e brindes personalizados de alta qualidade para promover sua marca com
            estilo e profissionalismo
          </h2>
          <p className="text-lg md:text-xl text-accent font-semibold mb-10">
            Ideal para divulgar sua empresa!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="default">
              <a
                href="https://wa.me/5569999993301"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="#produtos">Ver produtos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
