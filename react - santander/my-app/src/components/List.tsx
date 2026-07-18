import React from "react";

const List = () => {
  const coffees = [
    "Iced Caramel Macchiato",
    " Caffé Mocha",
    "Starbucks Blond Vanilla Late",
    "Sparking Expresso",
    "Affogato",
  ];

  interface Cafe {
    name: string;
    description: string;
    preparationTimes: number;
  }

  const cafes: Cafe[] = [
    {
      name: "Iced Caramel Macchiato",
      description: "Rico e com toque de baunilha",
      preparationTimes: 5,
    },
    {
      name: "Caffé Mocha",
      description: "um classico Strbuckes",
      preparationTimes: 5,
    },
    {
      name: "Starbucks Blond Vanilla Late",
      description: "Suave e aveludado",
      preparationTimes: 3,
    },
    {
      name: "Sparking Expresso",
      description: "Um toque brilhante",
      preparationTimes: 2,
    },
    {
      name: "Affogato",
      description: "o mais gostoso da terra",
      preparationTimes: 1,
    },
  ];

  const listItems = coffees.map((cafe) => <li key={cafe}> {cafe}</li>);
  const lista = cafes.map((cafee) => (
    <div key={cafee.name}>
      {" "}
      <h5> {cafee.name}</h5>
      <p style={{ fontSize: "10px", paddingBottom: '10px' }}>
        {cafee.description}{" "}
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {` ${cafee.preparationTimes}min `}
        </span>
      </p>
    </div>
  ));

  const topSale = cafes.filter(
    (cafe) => ['Sparking Expresso', 'Caffé Mocha'].includes(cafe.name)
  );
  const topTime = cafes.filter((cafe) => cafe.preparationTimes >= 3)
  console.log('Top Vendas', topSale, 'Time' ,topTime);
  return (
    <>
      <ul>
          <h4 style={{textAlign: "left"}}>Mais vendidos</h4>
          {topSale.map((top) => <li style={{textAlign: "left" , fontSize: "12px"}} key={top.name} > {top.name}</li>)}
      </ul>
      <br />

      <ul style={{ textAlign: "left" }}>
        <h4>Cafés</h4>
        {listItems}
        <br />
        <h4>Descrição</h4>
        {lista}
        </ul>;
        
    </>
  );
};

export default List;
