import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.module.css";
import Head from "./Head";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      {/* <Head title='Home' description='Essa é a descrição da Home'/> */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" content="Essa é a descrição da Home" />
      </Helmet>
      <h1>Home </h1>
      <p>Essa é a Home</p>
      <NavLink to="produto/notebook">Notebook</NavLink> {""}
      <NavLink to="produto/smartphone">Smartphone</NavLink>
    </div>
  );
};

export default Home;
