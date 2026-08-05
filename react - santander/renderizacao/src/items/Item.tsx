import React from "react";

interface Props {
  name: string;
}

const Item: React.FC<Props> = ({ name }) => {
  return <div className="item">
      {name}
    </div>;
};

export default Item;
