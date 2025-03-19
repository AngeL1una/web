'use client';
import React, { useState } from 'react';


const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  // Función para manejar el cambio en la selección de calificación
  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  // Función para manejar el cambio en el comentario
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  return (
    <section className="p-8 bg-gray-50 rounded-lg shadow-md max-w-2xl mx-auto mt-40">
      <h2 className="text-3xl font-bold text-center text-violet-900 mb-6">
        ¡Queremos saber tu opinión!
      </h2>
      <form>
        {/* Pregunta sobre la satisfacción */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">¿Qué tan satisfecho estás con nuestros productos?</h3>
          <div className="flex justify-center space-x-4 mt-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => handleRatingChange(value)}
                type="button"
                className={`p-2 rounded-full text-white ${
                  rating === value
                    ? 'bg-violet-500'
                    : 'bg-violet-300 hover:bg-violet-400'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {/* Comentarios */}
        <div className="mb-6">
          <label htmlFor="comment" className="block text-lg font-semibold text-gray-700">
            ¿Tienes algún comentario adicional?
          </label>
          <input
            id="comment"
            type="text"
            value={comment}
            onChange={handleCommentChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Escribe tu comentario aquí"
          />
        </div>

        {/* Botón de envío */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-violet-500 text-white text-lg rounded-lg shadow-lg hover:bg-violet-600 transition"
          >
            Enviar Opinión
          </button>
        </div>
      </form>
    </section>
  );
};

export default FeedbackForm;
