import { Globe } from "lucide-react";
import { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  hoverText: string;
  imageUrl: string;
}

const servicesList: Service[] = [
  {
    icon: <Globe size={48} className="text-green-600" />,
    title: "Administração Pública",
    description:
      "Competência, experiência e ferramentas de alto desempenho são os diferenciais que garantem o perfeito funcionamento de nossas soluções.",
    hoverText: "Veja Nossas Soluções",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80", // Imagem de exemplo
  },
  {
    icon: <Globe size={48} className="text-green-600" />,
    title: "Gestão Empresarial",
    description:
      "Otimize processos, reduza custos e impulsione o crescimento do seu negócio com nossas plataformas integradas e inteligentes.",
    hoverText: "Conheça as Plataformas",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", // Imagem de exemplo
  },
  {
    icon: <Globe size={48} className="text-green-600" />,
    title: "Inovação e Tecnologia",
    description:
      "Desenvolvemos soluções tecnológicas sob medida que transformam desafios em oportunidades e colocam sua empresa no futuro.",
    hoverText: "Explore a Inovação",
    imageUrl:
      "https://images.unsplash.com/photo-1605648916319-4a8423838a12?w=800&q=80", // Imagem de exemplo
  },
];

export function Cards() {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-xl hover:-translate-y-2"
            >
              {/* Conteúdo Visível Inicialmente */}
              <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Imagem e Texto do Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold tracking-wider p-4 border-2 border-white rounded-md">
                    {service.hoverText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
