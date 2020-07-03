import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1> Directors Page</h1>
      {
        directors.map(director => {
          return (
            <div style={{ boxShadow: '1px 1px 3px black', borderRadius: '5px', margin: '10px', padding: '10px' }}>
              <h3>{director.name}</h3>
              <h5>Movies</h5>
              <ul>
                {director.movies.map(movie => <li>{movie} </li>)}
              </ul>
            </div>
          )
        })
      }
    </div>
  );
}

export default Directors
