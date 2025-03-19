import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4 text-2xl font-bold">
        <Link href="/">
          <img src="https://img.freepik.com/vector-gratis/plantilla-logotipo-tienda-papeleria_23-2149852417.jpg?semt=ais_hybrid" alt="Logo" className="h-20" />
        </Link>
        <span className="text-black">Lunitas</span>
      </div>
      <div className="space-x-6">
        <Link href="https://github.com/AngeL1una" className="text-black">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;