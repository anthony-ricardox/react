import React from "react";
import PropTypes from 'prop-types'

const Botao = (props) => {
  return <button style={{width:`${props.width}px`, height: `${props.width/3}px`}}> {props.children}</button>;
};


Botao.propTypes = {
    width: PropTypes.number.isRequired
}


export default Botao;
