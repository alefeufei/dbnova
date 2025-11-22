"use client";

import React, { useRef, useState, useEffect } from "react";

export function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 1,
      url: "https://dbnova.com.br/wp-content/uploads/2020/09/bg-novo.jpg",
      alt: "Slide 1",
      title: "Soluções Inovadoras",
      text: "Oferecemos tecnologia de ponta para transformar seu negócio e impulsionar resultados."
    },
    {
      id: 2,
      url: "https://dbnova.com.br/wp-content/uploads/2021/12/model_5_.jpg",
      alt: "Slide 2",
      title: "Sistema Integrado",
      text: "Gestão completa e eficiente com nosso sistema único de execução orçamentária e controle financeiro."
    },
    {
      id: 3,
      url: "https://dbnova.com.br/wp-content/uploads/2021/12/model_5_.jpg",
      alt: "Slide 3",
      title: "Atendimento Personalizado",
      text: "Nossa equipe está pronta para atender suas necessidades com excelência e dedicação."
    },
  ];
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
          style={{ 
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0
          }}
        >
          <img 
            src={slide.url} 
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl">
                {slide.text}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      <button 
        onClick={prevSlide} 
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-colors z-10"
        aria-label="Slide anterior"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-colors z-10"
        aria-label="Próximo slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6 md:w-8' : 'bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}