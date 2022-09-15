import React from 'react';

import { useState } from 'react';
import Controls from '../Controls/controls';

export default function Main() {
  const [head, setHead] = useState('');

  return (
    <main>
      <Controls head={head} setHead={setHead} />
    </main>
  );
}