import React from 'react';
import './Smurf.css';

const Smurf = props => {
  return (
    <div className='flip-container' ontouchstart="this.classList.toggle('hover');">
      <div className='flipper'>
        <div className='front smurf-card'>
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
        </div>
        <div className='back smurf-card'>
          <img src={`${props.image}`} />
          <button className='remove-button' onClick={() => props.removeSmurf(props.id)}>
            Remove From Village
          </button>
        </div>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
  image: '',
};

export default Smurf;

