import React from "react";
import Head from "./Head";
import { Helmet } from "react-helmet";

const Sobre = () => {
  return (
    <div>
      {/*<Head title='Sobre' description='Essa é a descrição da Sobre'/>*/}
      <Helmet>
              <title>Dogs | Sobre</title>
              <meta name="description" content="Essa é a descrição da Sobre" />
            </Helmet>
      <h1>Sobre</h1>
      <p>Esse é o Sobre</p>
    </div>
  );
};

export default Sobre;
