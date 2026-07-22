import React from "react";

interface Props {
  number: number;
}
const SquareNumber = ({number}:Props) => {
  return <div>
    <p>Número: <b> {number}</b> - <b>Quadrado do número:</b> {Math.pow(number, 2)} </p>
  </div>;
};

export default SquareNumber;
