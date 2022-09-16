import React from 'react';
import { useState } from 'react';
import './catchphrase.css';

export default function Catchphrase({ setCatchphrases }) {
  const [currentCatchphrase, setCurrentCatchphrase] = useState('');

  const handleCatchphrase = () => {
    setCatchphrases((prevCatchphrases)=>[...prevCatchphrases, currentCatchphrase]);
    setCurrentCatchphrase('');
  };
    
  return (
    <div className="catchphrase">
      <label>ADD A CATCHPHRASE</label>
      <input type="text" value={currentCatchphrase} onChange={(e) => setCurrentCatchphrase(e.target.value)} ></input>
      <button onClick={handleCatchphrase}>ADD CATCHPHRASE</button>
    </div>
  );
}