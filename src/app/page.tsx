import { Cards } from "@/components/cards";
import { Slide } from "@/components/slide";

export default function Home() {
  return (
    <div>
<Slide />
      {/* Container para os cartões */}
      <div className="flex flex-wrap justify-center gap-5 p-4">
        {/* Cartão 1: Gestão */}
        <div className="relative w-[350px] h-[130px] rounded-xl overflow-hidden shadow-2xl flex-shrink-0">
          {/* Fundo com Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50]"></div>

          {/* Círculo Decorativo no Fundo */}
          <div className="absolute -top-1/4 -right-1/4 w-32 h-32 bg-white/10 rounded-full"></div>

          {/* Conteúdo do Cartão */}
          <div className="relative h-full flex items-center justify-between p-6">
            {/* Texto Principal */}
            <div className="text-white">
              <h2 className="text-xl font-bold leading-tight">
                Sistemas de Gestão
                <br />e Administração
              </h2>
            </div>

            {/* Ícone */}
            <div className="relative w-16 h-16 flex items-center justify-center ml-4 flex-shrink-0">
              {/* Círculo de fundo para o ícone */}
              <div className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-sm"></div>
              {/* Ícone SVG (Monitores e Dispositivos) */}
              <svg
                className="relative w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 21v-4a2 2 0 012-2h1a2 2 0 012 2v4h-5zM16 11V9a2 2 0 012-2h1a2 2 0 012 2v2"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Cartão 2: Desenvolvimento */}
        <div className="relative w-[350px] h-[130px] rounded-xl overflow-hidden shadow-2xl flex-shrink-0">
          {/* Fundo com Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50]"></div>

          {/* Círculo Decorativo no Fundo */}
          <div className="absolute -top-1/4 -right-1/4 w-32 h-32 bg-white/10 rounded-full"></div>

          {/* Conteúdo do Cartão */}
          <div className="relative h-full flex items-center justify-between p-6">
            {/* Texto Principal */}
            <div className="text-white">
              <h2 className="text-xl font-bold leading-tight">
                Desenvolvimento
                <br />
                Web & Mobile
              </h2>
            </div>

            {/* Ícone */}
            <div className="relative w-16 h-16 flex items-center justify-center ml-4 flex-shrink-0">
              {/* Círculo de fundo para o ícone */}
              <div className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-sm"></div>
              {/* Ícone SVG (Código) */}
              <svg
                className="relative w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 12"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Cartão 3: Suporte */}
        <div className="relative w-[350px] h-[130px] rounded-xl overflow-hidden shadow-2xl flex-shrink-0">
          {/* Fundo com Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50]"></div>

          {/* Círculo Decorativo no Fundo */}
          <div className="absolute -top-1/4 -right-1/4 w-32 h-32 bg-white/10 rounded-full"></div>

          {/* Conteúdo do Cartão */}
          <div className="relative h-full flex items-center justify-between p-6">
            {/* Texto Principal */}
            <div className="text-white">
              <h2 className="text-xl font-bold leading-tight">
                Consultoria em TI
                <br />& Suporte
              </h2>
            </div>

            {/* Ícone */}
            <div className="relative w-16 h-16 flex items-center justify-center ml-4 flex-shrink-0">
              {/* Círculo de fundo para o ícone */}
              <div className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-sm"></div>
              {/* Ícone SVG (Suporte) */}
              <svg
                className="relative w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Cards />;
    </div>
  );
}