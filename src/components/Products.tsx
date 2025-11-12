import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductCarousel from "@/components/ProductCarousel";
import {
  Package,
  Coffee,
  Gift,
  Briefcase,
  Utensils,
  Shirt,
  UserCircle,
  Pen,
} from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: UserCircle,
      name: "Bonés",
      description: "Bonés personalizados com bordado ou silk",
    },
    {
      icon: Shirt,
      name: "Chapéus",
      description: "Chapéus de diversos modelos e cores",
    },
    {
      icon: Package,
      name: "Sacochilás",
      description: "Mochilas e sacolas personalizadas",
    },
    {
      icon: Coffee,
      name: "Copos e canecas",
      description: "Copos térmicos e canecas personalizadas",
    },
    {
      icon: Gift,
      name: "Chaveiros",
      description: "Chaveiros personalizados diversos modelos",
    },
    {
      icon: Pen,
      name: "Canetas",
      description: "Canetas personalizadas para sua marca",
    },
    {
      icon: Briefcase,
      name: "Kits corporativos",
      description: "Kits completos para empresas",
    },
    {
      icon: Utensils,
      name: "Kit churrasco",
      description: "Conjuntos para churrasco personalizados",
    },
  ];

  return (
    <section id="produtos" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla variedade de brindes personalizados para atender às
            necessidades da sua empresa ou evento
          </p>
        </div>

        <div className="mb-12">
          <ProductCarousel />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-background border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Produtos de qualidade com preço acessível
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Nosso compromisso é satisfazer o cliente com um produto de qualidade, preço
            acessível e pequeno prazo de entrega
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90"
          >
            <a href="/vitrine">
              Ver vitrine online
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
