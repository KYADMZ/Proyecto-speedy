import React from "react";

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo y texto */}
                <div className="text-left">
                    <h3 className="text-3xl font-semibold">Speedy</h3>
                    {/* Pie de página con derechos reservados */}
                    <div className="text-zinc-500 text-xs mt-2">
                        &copy; 2025 Speedy Co. All Rights Reserved.
                    </div>
                </div>

                {/* Enlaces de navegación y redes sociales */}
                <div className="flex flex-col items-center ml-4 m-4">
                    {/* Enlaces de navegación */}
                    <ul className="flex space-x-4 mb-2"> {/* Cambiado a mb-2 para reducir el margen entre los enlaces y los íconos */}
                        <li>
                            <a href="/about" className="text-zinc-400 hover:text-white">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/explore" className="text-zinc-400 hover:text-white">
                                Explore
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-zinc-400 hover:text-white">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
