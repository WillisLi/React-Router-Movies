import React from 'react';

export default function MovieCard (props) {
  const { card } = props;
  return (
      <div>
          <p>{card.id}</p>
      </div>
  );
}
