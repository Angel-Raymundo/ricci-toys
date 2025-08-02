"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path
      ? "text-primary font-semibold"
      : "text-muted-foreground hover:text-primary";
  };

  return (
    <nav className="border-b bg-[#8a1e41] backdrop-blur supports-[backdrop-filter]:bg-[#8a1e41]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" width={60} height={60} alt="Hola" />
            <span className="text-3xl font-bold text-white">RicciToys</span>
          </Link>

          {/* Botón hamburguesa para móviles */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menú para desktop (oculto en móviles) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors text-white text-xl ${isActive(
                "/"
              )}`}
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className={`transition-colors  text-white text-xl ${isActive(
                "/productos"
              )}`}
            >
              Productos
            </Link>
            <Link
              href="/mas"
              className={`transition-colors text-white text-xl ${isActive(
                "/mas"
              )}`}
            >
              Más
            </Link>
          </div>
        </div>

        {/* Menú móvil (solo visible cuando isOpen es true) */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link
              href="/"
              className={`block transition-colors text-white text-xl ${isActive(
                "/"
              )}`}
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className={`block transition-colors text-white text-xl ${isActive(
                "/productos"
              )}`}
              onClick={() => setIsOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/mas"
              className={`block transition-colors text-white text-xl ${isActive(
                "/mas"
              )}`}
              onClick={() => setIsOpen(false)}
            >
              Más
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
