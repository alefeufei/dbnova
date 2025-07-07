import Image from "next/image";
import { Slide } from '../../components/slide';

export function Header() {
  return (
    <header className="bg-white shadow-md p-6">
      <nav className="flex justify-between items-center">
        <div>
          <Image src="/logo.png" alt="DBNova Logo" width={150} height={50} />
          
        </div>
        <ul className="flex space-x-6 font-bold">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/solucoes">Soluções</a>
          </li>
          <li>
            <a href="/quemsomos">Quem Somos</a>
          </li>
          <li>
            <a href="/novidades">Novidades</a>
          </li>
          <li>
            <a href="/trabalheconosco">Trabalhe Conosco</a>
          </li>
          <li>
            <a href="/suporte">Suporte</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </nav>
      {/* <Slide/> */}
    </header>
  );
}
