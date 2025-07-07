import Image from "next/image";

export function Footer(){
    return (
      <footer className="bg-[#545d5c] w-full h-80 bottom-0 p-8 text-white flex justify-between items-center">
        <div>
          <Image src="/logo.png" alt="DBNova Logo" width={200} height={100} />
          <br />
          <p>Ligue para gente ou agende uma reunião a qualquer momento.</p>
        </div>

        <div>
          <div>
            <p className="font-bold">SEDE ADMINISTRATIVA</p>
            <p>
              Rua Augusto Vasconcelos, 544 sala 430, Campo Grande
              <br />
              Rio de Janeiro/RJ - CEP 23.050-340
            </p>
          </div>
          <div>
            
              <br />
              <p className="font-bold">NOSSO EMAIL </p>
              <p>contato@dbnova.com.br</p>
            
          </div>
          <div>
            <br />
            <p className="font-bold">NOSSO TELEFONE</p>
            <p>(21) 4141-1210</p>
          </div>
        </div>
      </footer>
    );
}