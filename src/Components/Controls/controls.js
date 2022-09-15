import React from 'react';

export default function Controls({ head, setHead, middle, setMiddle, bottom, setBottom }) {
  return (
    <div>
      <div>
        <label>HEAD</label>
        <select value={head} onChange={(e) => setHead(e.target.value)} >
          <option value="cartman">Cartman</option>
          <option value="kyle">Kyle</option>
          <option value="stan">Stan</option>
        </select>
        <label>MIDDLE</label>
        <select value={middle} onChange={(e) => setMiddle(e.target.value)} >
          <option value="pink">Pink</option>
          <option value="gothic">Gothic</option>
          <option value="classic">Classic</option>
        </select>
        <label>BOTTOM</label>
        <select value={bottom} onChange={(e) => setBottom(e.target.value)} >
          <option value="chicken">Chicken</option>
          <option value="cow">Cow</option>
          <option value="human">Human</option>
        </select>
      </div>
    </div>
  );
}