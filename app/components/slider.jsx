"use client";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const images = [
  { src: "/food.jpg", description: "Gourmet Food Delivery" },
  { src: "/medical.jpg", description: "Medical Equipment" },
  { src: "/pharmacy.jpg", description: "Pharmacy Supplies" },
  { src: "/package.jpg", description: "Package Deliveries" },
  { src: "/documents.jpg", description: "Legal Documents Delivery" },
  { src: "/warehouse.jpeg", description: "Warehouse Deliveries" }
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Estado para el índice de la imagen con cursor encima
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
    <div className="relative w-full h-[100vh] mx-auto overflow-hidden">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((img, index) => (
      <div
        key={index}
        className="relative w-full h-full flex-shrink-0"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* Imagen del slider */}
        <img
          src={img.src}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover object-center"
        />

        {/* Capa de opacidad al pasar el mouse */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            hoveredIndex === index ? "opacity-40" : "opacity-0"
          }`}
        />

        {/* Texto centrado */}
        <div
          className={`absolute inset-0 flex items-center justify-center text-white text-lg sm:text-2xl font-bold transition-opacity duration-300 ${
            hoveredIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {img.description}
        </div>
      </div>
    ))}
  </div>

  {/* Botón Anterior */}
  <button
    onClick={() =>
      handleManualChange((currentIndex - 1 + images.length) % images.length)
    }
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-900 text-white p-3 rounded-full text-lg sm:text-xl"
  >
    &#10094;
  </button>

  {/* Botón Siguiente */}
  <button
    onClick={() => handleManualChange((currentIndex + 1) % images.length)}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-900 text-white p-3 rounded-full text-lg sm:text-xl"
  >
    &#10095;
  </button>

  {/* Indicadores de progreso */}
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
    {images.map((_, index) => (
      <button
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
          currentIndex === index ? "bg-black scale-110" : "bg-gray-300"
        }`}
        onClick={() => handleManualChange(index)}
      />
    ))}
  </div>
</div>

  );
}
