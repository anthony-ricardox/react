import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Produtos from "./Component/Produtos/Produtos";
import Contato from "./Component/Contato/Contato";
import Produto from "./Component/Produto/Produto";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route index element={<Produtos />} />
            <Route path="produto/:id" element={<Produto/>} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
