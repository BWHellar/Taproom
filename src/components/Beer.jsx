import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return (
    <div>
    <style jsx>{`
        div {
          background-color: red;
          text-align: center;
        }
      `}</style>
      <h3>{props.brew} - {props.names}</h3>
      <p><em>{props.desc}</em></p>
      <hr/>
    </div>
  );
}

Beer.propTypes = {
  names: PropTypes.string.isRequired,
  brew: PropTypes.string.isRequired,
  desc: PropTypes.string
};

export default Beer;
