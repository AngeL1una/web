import React from 'react';

const ContentSection: React.FC = () => {
  return (
    <section className="p-8">
        <h1 className="text-6xl font-semibold text-violet-900 text-center mb-28">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:ml-[100px] sm:mr-[100px] mr-0 ml-0">
        {/* Lista */}
        <div className="flex flex-col">
          <h3 className="text-4xl font-semibold text-violet-800 mb-20">Categorías Populares</h3>
          <ul className="list-disc pl-8 text-gray-700 mb-6">
            <li>Cuadernos y Libretas</li>
            <li>Escritura: Bolígrafo, Lápices, Marcadores</li>
            <li>Material de oficina</li>
            <li>Artículos escolares</li>
          </ul>
        </div>

        {/* Tabla */}
        <div className="flex flex-col">
          <h3 className="text-4xl font-semibold text-violet-800 mb-20">Precios y Productos</h3>
          <table className="min-w-full table-auto text-gray-700">
            <thead className="bg-violet-200">
              <tr>
                <th className="px-4 py-2 text-left">Producto</th>
                <th className="px-4 py-2 text-left">Precio</th>
                <th className="px-4 py-2 text-left">Disponibilidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t px-4 py-2">Cuaderno A5</td>
                <td className="border-t px-4 py-2">$50</td>
                <td className="border-t px-4 py-2">En stock</td>
              </tr>
              <tr>
                <td className="border-t px-4 py-2">Set de lápices</td>
                <td className="border-t px-4 py-2">$20</td>
                <td className="border-t px-4 py-2">En stock</td>
              </tr>
              <tr>
                <td className="border-t px-4 py-2">Marcador de colores</td>
                <td className="border-t px-4 py-2">$100</td>
                <td className="border-t px-4 py-2">Agotado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
