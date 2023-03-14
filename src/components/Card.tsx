import React from "react";

export type CardProps = {
  children?: any;
};

export default function Card(props: CardProps) {
  return (
    <div className="bg-gray-100 px-5 rounded-md overflow-hidden shadow-2xl">
      {props.children}
    </div>
  );
}
