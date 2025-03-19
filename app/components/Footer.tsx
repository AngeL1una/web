const Footer: React.FC = () => {
    return (
      <footer className="text-black text-center p-6 mt-10 shadow-lg">
        <div className="container mx-auto">
          <p className="text-lg">&copy; {new Date().getFullYear()} Lunitas. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="">Términos y Condiciones</a>
            <a href="#" className="">Política de Privacidad</a>
            <a href="https://github.com/AngeL1una" className="text-red-700">Desarrollado por MoonDev</a>
            <a href="/contacto" className="">Contacto</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  