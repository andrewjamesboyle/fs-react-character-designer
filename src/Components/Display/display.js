import React from 'react';
import './display.css';

export default function Display({ headCount, middleCount, bottomCount, catchphrases }) {
  return (
    <>
      <div className="display">
        <div>{`You have changed the head ${headCount} times, the middle ${middleCount} times, and the bottom ${bottomCount} times.`}
          <div>{'Your favorite catchphrases are: '} </div>
          <ul>
            {catchphrases.map((catchphrase) => (
              <li key={catchphrase}>{catchphrase}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}