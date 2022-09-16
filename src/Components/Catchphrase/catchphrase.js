import React from 'react';
import { useState } from 'react';

export default function Catchphrase({ setCatchphrases }) {
  const [currentCatchphrase, setCurrentCatchphrase] = useState('');
    
  const handleCatchphrase = () => {
    setCatchphrases((prevCatchphrases)=>[...prevCatchphrases, currentCatchphrase]);
  };
    
  return (
    <div>
      <label>ADD A CATCHPHRASE</label>
      <input type="text" value={currentCatchphrase} onChange={(e) => setCurrentCatchphrase(e.target.value)} ></input>
      <button onClick={handleCatchphrase}>ADD CATCHPHRASE</button>
    </div>
  );
}