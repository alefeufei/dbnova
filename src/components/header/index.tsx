"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-md p-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="DBNova Logo" width={150} height={50} priority />
        </Link>
        <ul className="hidden lg:flex space-x-6 font-bold">
          <li>
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/solucoes" className="hover:text-green-600 transition-colors">Soluções</Link>
          </li>
          <li>
            <Link href="/quemsomos" className="hover:text-green-600 transition-colors">Quem Somos</Link>
          </li>
          <li>
            <Link href="/novidades" className="hover:text-green-600 transition-colors">Novidades</Link>
          </li>
          <li>
            <Link href="/trabalheconosco" className="hover:text-green-600 transition-colors">Trabalhe Conosco</Link>
          </li>
          <li>
            <Link href="/suporte" className="hover:text-green-600 transition-colors">Suporte</Link>
          </li>
          <li>
            <Link href="/contato" className="hover:text-green-600 transition-colors">Contato</Link>
          </li>
        </ul>
        <button
          type="button"
          aria-label="Abrir menu"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)}></div>
          <aside className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <Image src="/logo.png" alt="DBNova Logo" width={130} height={44} priority />
              <button
                type="button"
                aria-label="Fechar menu"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                onClick={() => setOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col space-y-4 font-bold">
              <li>
                <Link href="/" className="hover:text-green-600 transition-colors" onClick={() => setOpen(false)}>Home</Link>
              </li>
              <li>
                <Link href="/solucoes" className="hover:text-green-600 transition-colors" onClick={() => setOpen(false)}>Soluções</Link>
              </li>
              <li>
                <Link href="/quemsomos" className="hover:text-green-600 transition-colors" onClick={() => setOpen(false)}>Quem Somos</Link>
              </li>
              <li>
                <Link href="/novidades" className="hover:text-green-600 transition-colors" onClick={() => setOpen(false)}>Novidades</Link>
              </li>
              <li>
                <Link href="/trabalheconosco" className="hover:text-green-600 transition-colors" onClick={() => setOpen(false)}>Trabalhe Conosco</Link>
              </li>
              <li>
                <Link href="/suporte" className="hover:text-green-600 transition-colors" onClick={() => setOpen(false)}>Suporte</Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-green-600 transition-colors" onClick={() => setOpen(false)}>Contato</Link>
              </li>
            </ul>
          </aside>
        </div>
      )}
    </header>
  );
}
