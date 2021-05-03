import React from 'react';

function Test({ imageUrl }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${imageUrl}`}
        alt=""
        srcset=""
      />
    </div>
  );
}

export default Test;
