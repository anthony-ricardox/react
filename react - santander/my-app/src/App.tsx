import "./App.css";
import List from "./components/List";

function App() {
  console.log(import.meta.env.VITE_RELEASE_DATE);

  return (
    <>
      <h1>Cardápio Starbucks</h1>;
      <List/>
    </>
  );
}

export default App;
