import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8 mt-36 items-center sm:ml-[100px] sm:mr-[100px] mr-0 ml-0">

            {/* Contenedor de texto */}
            <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-violet-900">
                    Bienvenido a Lunitas
                </h1>
                <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    Ofrecemos lo mejor en papelería, desde cuadernos hasta lápices, pasando por papel y otros productos.
                </p>

                {/* Cita */}
                <blockquote className="border-l-4 pl-4 text-gray-700 italic mt-6 text-sm sm:text-base md:text-lg">
                    &quot;La calidad es nuestra prioridad, siempre buscamos ofrecer lo mejor a nuestros clientes.&quot;
                </blockquote>

                {/* Botón */}
                <Link href="https://github.com/AngeL1una">
                    <button className="mt-6 px-6 py-3 bg-violet-400 text-white text-lg rounded-lg shadow-lg hover:bg-violet-700 transition">
                        Conócenos
                    </button>
                </Link>
            </div>

            {/* Contenedor de imagen */}
            <div className="flex justify-center mt-6 md:mt-0">
                <Image
                    src="https://png.pngtree.com/png-clipart/20220124/original/pngtree-stationery-border-png-image_7197120.png"
                    alt="Imagen representativa"
                    width={500} // Ajusta el ancho según sea necesario
                    height={300} // Ajusta la altura según sea necesario
                    className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
                />
            </div>
        </section>
    );
};

export default Hero;