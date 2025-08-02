import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function MasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Más sobre Linda Moon
      </h1>

      <Card className="overflow-hidden py-2 mb-5">
        <CardContent className="p-0 ">
          <div className="relative h-[50rem] w-auto">
            <Image
              src="/monoLinda.jpg"
              alt="Linda Ricci"
              fill
              className="object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
