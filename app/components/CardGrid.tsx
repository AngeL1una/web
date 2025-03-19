'use client';

import React from 'react';
import Image from 'next/image';

const CardGrid: React.FC = () => {
  const cardData = [
    {
      imgSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Angelica Ramos",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio nesciunt quas non animi."
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "patricia",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio nesciunt quas non animi."
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ricardo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio nesciunt quas non animi."
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-semibold text-violet-900 text-center mt-28">Reseñas</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 sm:ml-[100px] sm:mr-[100px] mr-0 ml-0">
        {cardData.map((card, index) => (
          <div key={index} className="flex flex-row-reverse items-stretch gap-4 p-4 border rounded-lg shadow-md bg-white">
            <Image
              src={card.imgSrc}
              alt={card.title}
              width={80}
              height={80}
              className="aspect-square w-20 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900">{card.title}</h3>
              <p className="mt-0.5 text-gray-700">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CardGrid;