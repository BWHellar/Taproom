import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewBeerForm(props){
  let _names = null;
  let _brew = null;
  let _desc = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({names: _names.value, brew: _brew.value, desc: _desc.value, timeOpen: new Moment()});
    _names.value = '';
    _brew.value = '';
    _desc.value = '';
  }

  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  };
  return (
    <div>
      <style jsx>{`
          div {
            width: 800px;
            height: 400px;
            box-sizing: border-box;
            margin: auto auto;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 10px black;
            color: orange;
            margin-top: 200px;
          }
          label{
            display: inline-block;
            float: left;
            clear: left;
            width: 250px;
            text-align: right;
          }
          textarea {
            display: inline-block;
            float: left;
          }
          #desc {
            height: 200px;
            padding-top: 0;
            padding-left: 0;
            line-height: 1em;
          }
        `}</style>
        <h1>Input New Beer</h1>
      <form onSubmit={handleNewBeerFormSubmission}>
        <label>Beer:</label><input
          type='text'
          id='names'
          placeholder='Beer Name'
          ref={(input) => {_names = input;}}/>
        <label>Brewery:</label><input
          type='text'
          id='brew'
          placeholder='Brewery'
          ref={(input) => {_brew = input;}}/>
        <label>About</label><input
          id='desc'
          placeholder='Description'
          ref={(textarea) => {_desc = textarea;}}/>
        <button type='submit'>Enter!</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
