import React from "react";
import Card from "./Card";

export type Dog = {
  name: string;
  life_span: string;
  temperament: string;
  reference_image_id?: string;
  height: any;
  weight: any;
  breed_group: string;
  breed_for?: string;
};

function DogRow({ name, life_span, reference_image_id, temperament }: Dog) {
  return (
    <Card>
      <div id="dog-card" className="flex justify-start">
        <img
          alt={name}
          className="w-28 h-28 object-fill rounded-full"
          src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`}
        />
      </div>
      <div id="name" className="flex flex-col pl-5 justify-start">
        <div className="flex mb-1">
          <h4 className="text-gray-700 font-bold font-sans w-32">Name:</h4>
          <span>{name}</span>
        </div>
        <div id="life_span" className="flex mb-1">
          <h4 className="text-gray-700 font-bold font-sans w-32">Life Span:</h4>
          <span>{life_span}</span>
        </div>
        <div id="temperament" className="flex mb-1">
          <h4 className="text-gray-700 font-bold font-sans w-32">
            Temperament:
          </h4>
          <span className="whitespace-pre-wrap">{temperament}</span>
        </div>
      </div>
    </Card>
  );
}

export default DogRow;
