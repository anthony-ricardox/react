import React, { type PropsWithChildren } from "react";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: PropsWithChildren<Props>) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
