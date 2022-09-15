import React from 'react';

export default function Controls({ head, setHead, middle, setMiddle }) {
  return (
    <div>
      <div>
        <label>HEAD</label>
        <select value={head} onChange={(e) => setHead(e.target.value)} >
          <option value="duck">Duck</option>
          <option value="chicken">Chicken</option>
          <option value="flamingo">Flamingo</option>
        </select>
        <label>MIDDLE</label>
        <select value={middle} onChange={(e) => setMiddle(e.target.value)} >
          <option value="pink">Pink</option>
          <option value="black">Gothic</option>
          <option value="tux">Formal</option>
        </select>
      </div>
    </div>
  );
}