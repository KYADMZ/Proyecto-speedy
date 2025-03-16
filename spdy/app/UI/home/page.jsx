import Slider from "@/app/components/slider";


export default function home() {
    return (
        <div className="">
            
            {/*Martin and Karen container*/}
            <div className="bg-white/30 backdrop-blur-md text-center rounded-3xl mx-4 md:mx-auto border border-blue-950/3 shadow-lg">
                
                <Slider></Slider>
                
            </div>

            {/*Jesus sections*/}
            <section className="mt-5 py-12 bg-white/30 backdrop-blur-md text-center rounded-3xl mx-4 md:mx-auto max-w-5xl border border-blue-950/3 shadow-lg mb-7">
                <div className="max-w-5xl mx-auto grid gap-6 items-center">
                    <div className="text-center">
                        <h3 className="text-7xl text-black font-serif">About Us</h3>
                        <p className="mt-2 text-gray-800 max-w-md mx-auto mb-3">
                            Aqui va toda la info que pondre despues porque me da pereza.
                            Info.
                        </p>
                        <img src="speedyIcon.jpeg" alt="Logo" className="w-[270px] h-[200px] mx-auto block" />
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg group">
                        <img src="foodT.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                            <h3 className="text-xl font-bold">Título 1</h3>
                            <p className="text-sm mt-2">Esta es la información que aparece al pasar el cursor.</p>
                        </div>
                    </div>

                    <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg group">
                        <img src="foodT.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                            <h3 className="text-xl font-bold">Título 2</h3>
                            <p className="text-sm mt-2">Esta es la información que aparece al pasar el cursor.</p>
                        </div>
                    </div>

                    <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg group">
                        <img src="foodT.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                            <h3 className="text-xl font-bold">Título 3</h3>
                            <p className="text-sm mt-2">Esta es la información que aparece al pasar el cursor.</p>
                        </div>
                    </div>

                    <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg group">
                        <img src="foodT.jpg" alt="Imagen 2" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center text-white p-4 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                            <h3 className="text-xl font-bold">Título 4</h3>
                            <p className="text-sm mt-2">Esta es la información que aparece al pasar el cursor.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}