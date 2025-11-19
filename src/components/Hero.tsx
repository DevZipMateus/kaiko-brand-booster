import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-kaiko.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img
            src={logo}
            alt="KAIKO BRINDES"
            className="w-48 sm:w-64 md:w-80 mb-6 md:mb-8 animate-fade-in"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 md:mb-8 max-w-2xl px-4">
            Bonés e brindes personalizados de alta qualidade para promover sua marca com
            estilo e profissionalismo
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-accent font-bebas mb-6 md:mb-10 px-4 tracking-wider" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8), 2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
            Ideal para divulgar sua empresa!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4">
            <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
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
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
            >
              <a href="#produtos">Ver produtos</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <a href="/vitrine">Acessar vitrine</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
