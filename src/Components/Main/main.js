import React from 'react';

import { useState } from 'react';
import Controls from '../Controls/controls';
import Character from '../Character/character';
import Display from '../Display/display';
import Catchphrase from '../Catchphrase/catchphrase';

export default function Main() {
  const [head, setHead] = useState('cartman');
  const [middle, setMiddle] = useState('pink');
  const [bottom, setBottom] = useState('human');

  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

  const [catchphrases, setCatchphrases] = useState([]);
  
  const handleIncrement = (bodyPart) => {
    if (bodyPart === 'head') {
      setHeadCount((prevState) => prevState + 1);
    } else if (bodyPart === 'middle') {
      setMiddleCount((prevState) => prevState + 1);
    } else if (bodyPart === 'bottom') {
      setBottomCount((prevState) => prevState + 1);
    }
  };


  
  return (
    <main>
      <Controls head={head} setHead={setHead} handleIncrement={handleIncrement} middle={middle} setMiddle={setMiddle} bottom={bottom} setBottom={setBottom} />
      <Character head={head} middle={middle} bottom={bottom} />
      <Catchphrase setCatchphrases={setCatchphrases} />
      <Display headCount={headCount} middleCount={middleCount} bottomCount={bottomCount} catchphrases={catchphrases} />
    </main>
  );
}