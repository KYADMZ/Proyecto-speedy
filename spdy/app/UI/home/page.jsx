import Slider from "@/app/components/slider";

export default function home() {
    return (
        <div>

            {/* Martin and Karen container */}
            <div className="bg-white/50 backdrop-blur-lg text-center rounded-3xl mx-4 md:mx-auto shadow-xl mb-10">
                <Slider />
            </div>

            {/* Divisor azul elegante */}
            <div className="my-8 mx-auto h-[3px] w-full max-w-5xl bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 rounded-full"></div>

            {/* Jesus sections */}
            <section className="py-12 bg-white backdrop-blur-lg text-center rounded-3xl mx-4 md:mx-auto max-w-5xl border border-blue-700/50 shadow-2xl mb-10">
    <div className="max-w-5xl mx-auto grid gap-6 items-center">
        <div className="text-center">
            <h3 className="text-6xl text-black font-serif font-bold">About Us</h3>
            <p className="mt-4 text-gray-800 max-w-md mx-auto mb-5 text-lg">
                At <span className="text-[#0077af] font-semibold">Speedy Couriers LLC</span>, we specialize in <span className="font-semibold">reliable and efficient</span> delivery services for all your needs. Whether it’s food, medical equipment, pharmaceuticals,
                warehouse goods, packages, or documents, we ensure <span className="font-semibold">fast and secure</span> shipping.  
                Our mission is to connect businesses and individuals with seamless logistics solutions, backed by a dedicated team and cutting-edge technology.  
                We value speed, safety, and customer satisfaction in every delivery.  
                Looking for a trusted shipping partner? Or a dynamic career in logistics? <span className="font-semibold">Join us</span> and be part of a company that keeps the world moving.
            </p>

            <img src="speedyIcon.jpeg" alt="Logo" className="w-[270px] h-[200px] mx-auto block shadow-lg rounded-full border-4 border-blue-500" />
        </div>
    </div>
</section>


            {/* Divisor azul elegante */}
            <div className="my-8 mx-auto h-[3px] w-full max-w-5xl bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 rounded-full"></div>

            {/* Sección de tarjetas */}
            <section className="mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
                        <img src="foodT.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-80 transition-opacity duration-500">
                            <h3 className="text-2xl font-bold text-shadow">Título 1</h3>
                            <p className="text-sm mt-2 text-shadow">Descubre más sobre nuestro proyecto al pasar el cursor.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
                        <img src="foodT.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-80 transition-opacity duration-500">                            <h3 className="text-2xl font-bold text-shadow">Título 2</h3>
                            <p className="text-sm mt-2 text-shadow">Sigue explorando nuestra maravillosa aventura.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
                        <img src="foodT.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-80 transition-opacity duration-500">                            <h3 className="text-2xl font-bold text-shadow">Título 3</h3>
                            <p className="text-sm mt-2 text-shadow">Nos encanta sorprenderte, sigue explorando.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
                        <img src="foodT.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-80 transition-opacity duration-500">                            <h3 className="text-2xl font-bold text-shadow">Título 4</h3>
                            <p className="text-sm mt-2 text-shadow">Explora más, el futuro es brillante.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
