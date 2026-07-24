import { useState } from "react";
import "./App.css";
import DoubleNumber from "./components/DoubleNumber";
import SquareNumber from "./components/SquareNumber";
import DarkModeButton from "./atividade/DarkMode/DarkModeButton";
import SwitchThemeButton from "./atividade/SwitchThemeButton";

function App() {
  return (
    <>
      <h1> Hellow Word</h1>
      <SwitchThemeButton theme="light"> ☀️</SwitchThemeButton>
      <SwitchThemeButton theme="dark"> 🌙</SwitchThemeButton>
    </>
  );
}

export default App;
