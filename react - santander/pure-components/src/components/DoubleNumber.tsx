import React from "react";

interface Props {
  number: number;
}
const DoubleNumber = ({number}:Props) => {
  return <div>
    <p>Número: <b> {number}</b> - <b>Dobro do número:</b> {number * 2} </p>
  </div>;
};

export default DoubleNumber;
