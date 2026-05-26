import React from "react";
import styles from "./Produtos.module.css";
import Head from "./Head";

const Produtos = () => {
  return (
    <div className={styles.produtos}>
      <Head title='Ranek | Produto' />
      <h1>Produtos</h1>
    </div>
  );
};

export default Produtos;
