import React from 'react';
import './character.css';

export default function Character({ head, middle, bottom }) {
  return (
    <>
      <div className="character">  
        <div>
          <img src={`${process.env.PUBLIC_URL}/${head}.png`} />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/${middle}.png`} />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/${bottom}.png`} />
        </div>
      </div>
    </>
  );
}