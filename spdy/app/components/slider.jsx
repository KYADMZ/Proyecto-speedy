"use client";
import { useState, useEffect, useRef } from "react";

const images = [
  "/imagen.jpg",
  "/imagen2.jpg",
  "/imagen3.jpg",
  "/imagen4.jpg"
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleManualChange = (index) => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    setCurrentIndex(index);
    setIsPaused(true);

    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  return (
    <div className="relative w-full h-[800px] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-[800px] flex-shrink-0"
          />
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        onClick={() => handleManualChange((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10094;
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={() => handleManualChange((currentIndex + 1) % images.length)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10095;
      </button>

      {/* Indicadores de progreso */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => handleManualChange(index)}
          />
        ))}
      </div>
    </div>
  );
}
