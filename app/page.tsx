"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const featuredProducts = [
  {
    id: 1,
    name: "Linda Berserker",
    image: "/berserk.png?height=300&width=400",
  },
  {
    id: 2,
    name: "Linda Batalla",
    image: "/batalla.png?height=300&width=400",
  },
  {
    id: 3,
    name: "Totebag B/N",
    image: "/Totebag2.jpg?height=300&width=400",
  },
];

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % featuredProducts.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-18 px-15 mx-0">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Lado izquierdo - Presentación */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold text-primary mb-6">
                ¡BIENVENIDOS A RICCI TOYS!
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  En RICCI TOYS creemos que la imaginación no tiene limites y
                  apoyamos sueños de plasmar ideas a objetos físicos que ahora
                  tu puedes disfrutar y adquirir.
                </p>
                <p>
                  Te presentamos la primera linea de productos "Linda Moon"; con
                  el personaje característico del artista Rodo Bom Lefemew quien
                  presenta dos toys de aspecto ¡MEDIEVAL!, bolsas, botones y
                  mucho mas!!!
                </p>
                <p>
                  Ven y conoce mas de los productos que ofrecemos. Esperamos que
                  todo sea de tu agrado!!
                </p>
                <p>@lefemew // @ang_raymundo</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lado derecho - Productos recientes */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">
            Productos Más Recientes
          </h2>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-80 w-full">
                <Image
                  src={
                    featuredProducts[currentImageIndex].image ||
                    "/placeholder.svg"
                  }
                  alt={featuredProducts[currentImageIndex].name}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <h3 className="text-xl font-semibold">
                    {featuredProducts[currentImageIndex].name}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indicadores del carrusel */}
          <div className="flex justify-center space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-primary" : "bg-slate-300"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
