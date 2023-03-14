import React from "react";

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

function DogRow({
  name = "test",
  life_span = "test",
  reference_image_id = "pk1AAdloG",
}: Dog) {
  return (
    <div className="max-w-sm py-4 px-4 flex bg-white shadow-lg rounded-lg my-3">
      <div className="flex justify-start">
        <img
          className="w-24 h-24 object-cover rounded-full border-2 border-indigo-500"
          src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`}
        />
      </div>
      <div className="flex flex-col pl-5 justify-center">
        <div className="flex">
          <h4 className="text-gray-700 font-bold font-sans w-28">Name:</h4>
          <span>{name}</span>
        </div>
        <div className="flex">
          <h4 className="text-gray-700 font-bold font-sans w-28">Life Span:</h4>
          <span>{life_span}</span>
        </div>
      </div>
    </div>
  );
}

export default DogRow;
