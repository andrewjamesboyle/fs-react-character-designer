import React from 'react';

export default function Display({ headCount, middleCount, bottomCount, catchphrases }) {
  return (
    <>
      <div>{`You have changed the head ${headCount} times, the middle ${middleCount} times, and the bottom ${bottomCount} times.`}</div>
      <div>{'Your favorite catchphrases are: '} </div>
      <ul>
        {catchphrases.map((catchphrase) => (
          <li key={catchphrase}>{catchphrase}</li>
        ))}
      </ul>
    </>
  );
}