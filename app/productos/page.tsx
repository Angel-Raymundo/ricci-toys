import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Totebag B/N",
    image: "/Totebag2.jpg?height=250&width=250",
    price: "$50",
  },
  {
    id: 2,
    name: "Pin Naim",
    image: "/pin1.jpg?height=250&width=250",
    price: "$30",
  },
  {
    id: 3,
    name: "Pin Peque-Linda",
    image: "/pin2.jpg?height=250&width=250",
    price: "$30",
  },
  {
    id: 4,
    name: "Linda Batalla",
    image: "/batalla2.png?height=250&width=250",
    price: "$2000",
  },
  {
    id: 5,
    name: "Linda Berserker",
    image: "/berserk2.png?height=250&width=250",
    price: "$2500",
  },
  {
    id: 6,
    name: "Postal Manos Arriba",
    image: "/postal.png?height=250&width=250",
    price: "$15",
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Nuestros Productos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/productos/${product.id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="relative h-64 w-full mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-primary text-center mt-2">
                  {product.price}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
