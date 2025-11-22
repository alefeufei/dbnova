import { Cards } from "@/components/cards";
import { Slide } from "@/components/slide";
import { Cardverde } from "@/components/cardverde";

export default function Home() {
  return (
<div>
  <Slide />
  <Cardverde />
  <p className="text-center text-[40px] font-bold text-[#000000] mt-10">Oferecemos uma ampla variedade<br/>
de projetos e objetivos</p>
  <Cards />
</div>
  );
}
