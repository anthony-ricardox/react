import React from "react";
import { useNavigate } from "react-router-dom";
import Head from "./Head";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log("Faz o login");
    navigate("/sobre");
  }

  return (
    <>
      {/*<Head title='Login' description='Essa é a descrição da Login'/> */}
      <Helmet>
        <title>Dogs | Login</title>
        <meta name="description" content="Essa é a descrição da Login" />
      </Helmet>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default Login;
