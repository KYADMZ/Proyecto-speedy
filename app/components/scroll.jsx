"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//"npm install aos" para que funcione esta cosa
 
export default function ScrollEffect({ children, animation = "fade-up" }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en ms
      once: false, // Se repite cada vez que entra en la pantalla
      mirror: true, // Repite animación al hacer scroll hacia arriba
    });
  }, []);

  return (
    <div data-aos={animation} className="w-full">
      {children}
    </div>
  );
}
