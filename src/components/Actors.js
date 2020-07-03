import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map(actor => {
          return (
            <div style={{ boxShadow: '1px 1px 3px black', borderRadius: '5px', margin: '10px', padding: '10px' }}>
              <h3>{actor.name}</h3>
              <h5>Movies</h5>
              <ul>
                {actor.movies.map(movie => <li>{movie} </li>)}
              </ul>
            </div>
          )
        })
      }
    </div>
  );
};

export default Actors;
