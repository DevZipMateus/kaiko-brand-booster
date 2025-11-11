import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-kaiko.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="KAIKO BRINDES" className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation("inicio")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => handleNavigation("sobre")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavigation("produtos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Produtos
            </button>
            <Link
              to="/vitrine"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Vitrine
            </Link>
            <button
              onClick={() => handleNavigation("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
            <Button asChild variant="default" size="sm">
              <a
                href="https://wa.me/5569999993301"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => handleNavigation("inicio")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => handleNavigation("sobre")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavigation("produtos")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Produtos
            </button>
            <Link
              to="/vitrine"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Vitrine
            </Link>
            <button
              onClick={() => handleNavigation("contato")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
            <Button asChild variant="default" size="sm" className="w-full">
              <a
                href="https://wa.me/5569999993301"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
