import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

import produto1 from "@/assets/produtos/produto-1.jpg";
import produto2 from "@/assets/produtos/produto-2.jpg";
import produto3 from "@/assets/produtos/produto-3.jpg";
import produto4 from "@/assets/produtos/produto-4.jpg";
import produto5 from "@/assets/produtos/produto-5.jpg";
import produto6 from "@/assets/produtos/produto-6.jpg";
import produto7 from "@/assets/produtos/produto-7.jpg";
import produto8 from "@/assets/produtos/produto-8.jpg";
import produto9 from "@/assets/produtos/produto-9.jpg";
import produto10 from "@/assets/produtos/produto-10.jpg";
import produto11 from "@/assets/produtos/produto-11.jpg";
import produto12 from "@/assets/produtos/produto-12.jpg";
import produto13 from "@/assets/produtos/produto-13.jpg";
import produto14 from "@/assets/produtos/produto-14.jpg";
import produto15 from "@/assets/produtos/produto-15.jpg";
import produto16 from "@/assets/produtos/produto-16.jpg";
import produto17 from "@/assets/produtos/produto-17.jpg";
import produto18 from "@/assets/produtos/produto-18.jpg";
import produto19 from "@/assets/produtos/produto-19.jpg";

const ProductCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    produto1,
    produto2,
    produto3,
    produto4,
    produto5,
    produto6,
    produto7,
    produto8,
    produto9,
    produto10,
    produto11,
    produto12,
    produto13,
    produto14,
    produto15,
    produto16,
    produto17,
    produto18,
    produto19,
  ];

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <CardContent 
                    className="p-0 aspect-square overflow-hidden"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Produto ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Produto ampliado"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCarousel;