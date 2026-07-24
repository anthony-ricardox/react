import React, { type PropsWithChildren } from "react";
import Button from "./Button";

interface Props {
  theme: "dark" | "light";
}

const SwitchThemeButton = ({ theme, children }: PropsWithChildren<Props>) => {
  const handleClick = () => {
    const shouldChangeTheme = confirm(`Quer adicionar o  theme ${theme}?`);
    if (!shouldChangeTheme) {
      return;
    }
    document.body.classList.add(`${theme}-theme`);
    const themeToremove = theme === "light" ? "dark" : "light";
    document.body.classList.remove(`${themeToremove}-theme`);
  };

  return (
    <Button onClick={handleClick}>
      {children}
    </Button>
  );
};

export default SwitchThemeButton;
