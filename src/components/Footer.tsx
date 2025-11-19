import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-kaiko.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo e Descrição */}
          <div className="space-y-3 md:space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="KAIKO BRINDES"
              className="h-12 md:h-16 w-auto"
            />
            <p className="text-muted-foreground text-sm">
              Bonés e brindes personalizados de alta qualidade para promover sua marca com estilo e profissionalismo.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+556993497888"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  (69) 99349-7888
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:kaikobonesvha@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  kaikobonesvha@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Av. Presidente Tancredo Neves, 1465
                  <br />
                  CEP 76.981-137
                </p>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Redes sociais</h3>
            <div className="flex gap-3">
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
            <p className="text-muted-foreground text-sm mt-4">
              Horário de atendimento:
              <br />
              Seg a Sex: 7:30-11:30 e 13:30-18:00
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 md:pt-8 text-center">
          <p className="text-muted-foreground text-xs md:text-sm">
            © {new Date().getFullYear()} KAIKO Brindes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
