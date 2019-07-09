import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  const beerInformation =
    <div >
    <style jsx>{`
        div {
          background-color: red;
          text-align: center;
        }
      `}</style>
      <h3>{props.brew} - {props.names}</h3>
      <h4>Beer tapped {props.formattedWaitTime} ago</h4>
      <hr/>
    </div>
    if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onBeerSelection(props.beerId);}}>
        {beerInformation}
      </div>
    );
  } else {
    return (
      <div>
        {beerInformation}
      </div>
    );
  }
}


Beer.propTypes = {
  names: PropTypes.string.isRequired,
  brew: PropTypes.string.isRequired,
  desc: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onBeerSelection: PropTypes.func,
  beerId: PropTypes.string.isRequired
};

export default Beer;
