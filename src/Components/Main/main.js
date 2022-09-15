import React from 'react';

import { useState } from 'react';
import Controls from '../Controls/controls';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');

  return (
    <main>
      <Controls head={head} setHead={setHead} middle={middle} setMiddle={setMiddle} bottom={bottom} setBottom={setBottom} />
    </main>
  );
}