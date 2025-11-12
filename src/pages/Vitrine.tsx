import Header from "@/components/Header";
import MonteSiteBadge from "@/components/MonteSiteBadge";
import { useEffect } from "react";

const Vitrine = () => {
  useEffect(() => {
    // Remove scroll da página
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      // Restaura scroll quando sair da página
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 w-full overflow-hidden" style={{ height: "calc(100vh - 80px - 63px)", marginTop: "80px" }}>
        <iframe
          src="https://kaikobones.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </main>
      <MonteSiteBadge />
    </div>
  );
};

export default Vitrine;
