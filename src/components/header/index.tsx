import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-md p-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="DBNova Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        <ul className="flex space-x-6 font-bold">
          <li>
            <Link
              href="/"
              className="hover:text-green-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/solucoes"
              className="hover:text-green-600 transition-colors"
            >
              Soluções
            </Link>
          </li>
          <li>
            <Link
              href="/quemsomos"
              className="hover:text-green-600 transition-colors"
            >
              Quem Somos
            </Link>
          </li>
          <li>
            <Link
              href="/novidades"
              className="hover:text-green-600 transition-colors"
            >
              Novidades
            </Link>
          </li>
          <li>
            <Link
              href="/trabalheconosco"
              className="hover:text-green-600 transition-colors"
            >
              Trabalhe Conosco
            </Link>
          </li>
          <li>
            <Link
              href="/suporte"
              className="hover:text-green-600 transition-colors"
            >
              Suporte
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className="hover:text-green-600 transition-colors"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
