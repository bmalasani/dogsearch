import React from "react";

export type CardProps = {
  children?: any;
};

export default function Card(props: CardProps) {
  return (
    <div className="bg-gray-50 flex p-5 mt-5 rounded-md shadow-xl">
      {props.children}
    </div>
  );
}
