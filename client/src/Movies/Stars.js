import React from 'react';

function Stars (props) {

    return (
        <>
    {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      </>
    );
}

export default Stars;