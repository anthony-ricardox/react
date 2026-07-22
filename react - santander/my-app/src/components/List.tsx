
import TopSale from "./TopSale";

const List = () => {
  const coffees = [
    "Iced Caramel Macchiato",
    " Caffé Mocha",
    "Starbucks Blond Vanilla Late",
    "Sparking Expresso",
    "Affogato",
  ];

  interface Cafe {
    id: number;
    name: string;
    description: string;
    preparationTimes: number;
  }

  const cafes: Cafe[] = [
    {
      id: 1,
      name: "Iced Caramel Macchiato",
      description: "Rico e com toque de baunilha",
      preparationTimes: 5,
    },
    {
      id: 2,
      name: "Caffé Mocha",
      description: "um classico Strbuckes",
      preparationTimes: 5,
    },
    {
      id: 3,
      name: "Starbucks Blond Vanilla Late",
      description: "Suave e aveludado",
      preparationTimes: 3,
    },
    {
      id: 4,
      name: "Sparking Expresso",
      description: "Um toque brilhante",
      preparationTimes: 2,
    },
    {
      id: 5,
      name: "Affogato",
      description: "o mais gostoso da terra",
      preparationTimes: 1,
    },
  ];

  const listItems = coffees.map((cafe) => <li key={cafe}> {cafe}</li>);
  const lista = cafes.map((cafee) => (
    <div key={cafee.id}>
      {" "}
      <h5> {cafee.name}</h5>
      <p style={{ fontSize: "10px", paddingBottom: "10px" }}>
        {cafee.description}{" "}
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {` ${cafee.preparationTimes}min `}
        </span>
      </p>
    </div>
  ));

  const topSale = cafes.filter((cafe) =>
    ["Sparking Expresso", "Caffé Mocha"].includes(cafe.name),
  );
  const topTime = cafes.filter((cafe) => cafe.preparationTimes >= 3);
  console.log("Top Vendas", topSale, "Time", topTime);
  return (
    <>
      <ul>
        <h4 style={{ textAlign: "left" }}>Mais vendidos</h4>
        {topSale.map((top) => (
          <TopSale key={top.id} name={top.name}  description={top.description}/>
        ))}
      </ul>
      <br />
      <ul style={{ textAlign: "left" }}>
        <h4>Cafés</h4>
        {listItems}
        <br />
        <h4>Descrição</h4>
        {lista}
      </ul>
      ;
    </>
  );
};

export default List;
