import React from "react";
import PropTypes from "prop-types";


function Beer(props){
  return (
  <div>
    <h3>{props.name}</h3>
    <h3>{props.brewer}</h3>
    <p>{props.description}</p>
    <p>{props.abv}</p>
    <p>{props.price}</p>
    <p>{props.remaining}</p>
    <hr/>
  </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string


};

export default Beer;
