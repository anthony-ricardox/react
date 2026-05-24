import React from "react";
import { useLocation, useParams, NavLink , Outlet} from "react-router-dom";

const Produto = () => {
  const param = useParams();
  
  
  return (
    <div>
        
      <h1>Produto:{param.id}</h1>
      <nav>
        <NavLink to={`/produto/${param.id}`}>Descrição</NavLink> {""}
        <NavLink to={`/produto/${param.id}/avaliacao`}>Avaliação</NavLink> {""}
        <NavLink to={`/produto/${param.id}/customizado`}>Customizado</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Produto;
