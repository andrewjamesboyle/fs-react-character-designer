import React from 'react';

export default function Controls({ head, setHead }) {
  return (
    <div>
      <div>
        <label>HEAD</label>
        <select value={head} onChange={(e) => setHead(e.target.value)} >
          <option value="duck">Duck</option>
          <option value="chicken">Chicken</option>
          <option value="flamingo">Flamingo</option>
        </select>
      </div>
    </div>
  );
}