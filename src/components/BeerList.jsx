import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';


function BeerList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.beerList).map(function(beerId){
        var beer = props.beerList[beerId];
        return <Beer names= {beer.names}
          brew={beer.brew}
          desc={beer.desc}
          formattedWaitTime={beer.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={beerId}
          onBeerSelection={props.onBeerSelection}
          beerId={beerId}/>;
      })}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onBeerSelection: PropTypes.func
};

export default BeerList;
