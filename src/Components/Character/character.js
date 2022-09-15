import React from 'react';

export default function Character({ head }) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/${head}.png`} />
    </div>
  );
}