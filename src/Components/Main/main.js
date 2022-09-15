import React from 'react';

import { useState } from 'react';
import Controls from '../Controls/controls';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');

  return (
    <main>
      <Controls head={head} setHead={setHead} middle={middle} setMiddle={setMiddle} />
    </main>
  );
}