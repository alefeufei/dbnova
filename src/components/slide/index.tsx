"use client";

import styles from "./slide.module.css";
import React, { useRef, useState, useEffect } from "react";

export function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 1,
      url: "https://dbnova.com.br/wp-content/uploads/2020/09/bg-novo.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      url: "https://picsum.photos/id/1016/1200/650",
      alt: "Slide 2"
    },
    {
      id: 3,
      url: "https://picsum.photos/id/1018/1200/650",
      alt: "Slide 3"
    },
    {
      id: 4,
      url: "https://picsum.photos/id/1020/1200/650",
      alt: "Slide 4"
    }
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
    <div className={styles.slider}>
      <div 
        className={styles.slides}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <img src={slide.url} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className={`${styles.nav} ${styles.prev}`}>
        &#10094;
      </button>
      <button onClick={nextSlide} className={`${styles.nav} ${styles.next}`}>
        &#10095;
      </button>
    </div>
  );
}
