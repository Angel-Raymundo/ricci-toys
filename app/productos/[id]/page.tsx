"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Datos simulados del producto
const productData = {
  1: {
    name: "Totebag B/N",
    description:
      "Bolsa de tela 25x25cm \n Perfecto para cargar con tus pequeños elementos del día",
    price: "$50",
    images: ["/Totebag1.jpg", "/Totebag2.jpg"],
  },
  2: {
    name: "Pin Naim",
    description: "Pin metálico 5x5cm \n Un rostro bastante simple, tal como el",
    price: "$30",
    images: ["/pin1.jpg"],
  },
  3: {
    name: "Pin Peque-Linda",
    description: "5x5cm \n Porque a veces no estás a la altura",
    price: "$30",
    images: ["/pin2.jpg"],
  },
  4: {
    name: "Linda Batalla",
    description:
      "Juguete de colección\n18cm de altura \nDurante un enfrentamiento es posible perder alguna extremidad en la batalla\nEs gracioso ya que ella realmente no tiene extremidades\nLinda 1\nLos demás 0",
    price: "$2000",
    images: ["/batalla3.png", "/batalla2.png", "/batalla.png", "/Caja1.jpg"],
  },
  5: {
    name: "Linda Berserker",
    description:
      "Juguete de colección\n18cm de altura \nAl entrar en modo Berserker, las propiedades de Linda se ven multiplicadas X3\nMás golpes, más patadas y más hambre de destrucción",
    price: "$2500",
    images: ["/berserk1.png", "/berserk2.png", "/berserk.png", "/Caja2.jpg"],
  },
  6: {
    name: "Postal Manos Arriba",
    description: "Postal de 15x10cm \n Papel de 250gr",
    price: "$15",
    images: ["/postal.png"],
  },
};

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const productId = parseInt(params.id, 10);
  const product =
    productId in productData
      ? productData[productId as keyof typeof productData]
      : productData[1];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Lado izquierdo - Carrusel de imágenes */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 w-full">
                <Image
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${product.name} - Imagen ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />

                {/* Controles del carrusel */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Miniaturas */}
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                  index === currentImageIndex
                    ? "border-primary"
                    : "border-muted"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Miniatura ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Lado derecho - Información del producto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-4xl font-bold text-primary mb-6">
              {product.price}
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Descripción</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button size="lg" className="w-full">
              Agregar al Carrito
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full bg-transparent"
            >
              Comprar Ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
