import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import MonteSiteBadge from "@/components/MonteSiteBadge";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <WhatsAppButton />
      <MonteSiteBadge />
    </div>
  );
};

export default Index;
