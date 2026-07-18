import React from "react";

const List = () => {
  const coffees = [
    "Iced Caramel Macchiato",
    " Caffé Mocha",
    "Starbucks Blond Vanilla Late",
    "Sparking Expresso",
    "Affogato",
  ];

  const listItems = coffees.map((cafe) => <li key={cafe}> {cafe}</li>);
  return <ul  style={{textAlign: 'left'}}>{listItems}</ul>;
};

export default List;
