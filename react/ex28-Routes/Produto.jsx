import React from "react";
import {
  useLocation,
  useParams,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";

const Produto = () => {
  const param = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  console.log(search.get("q"));
  return (
    <div>
      <h1>Produto:{param.id}</h1>
      <nav>
        <NavLink to={`/produto/${param.id}`}>Descrição</NavLink> {""}
        <NavLink to={`/produto/${param.id}/avaliacao`}>Avaliação</NavLink> {""}
        <NavLink to={`/produto/${param.id}/customizado`}>Customizado</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto;
