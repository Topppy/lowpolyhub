import React, { useState } from 'react';
import s from './App.module.css';
import Stage from './components/Stage';
import Menu from './components/Menu';
import Code from './components/Code';
import Bar from './components/Bar';

function App() {
  const [item, setItem] = useState('CokeCola');
  return (
    <main className={s.app}>
      <Menu onClick={setItem} cur={item} />
      <Bar onClick={() => {}} />
      <Stage item={item} />
      <Code item={item} />
    </main>
  );
}

export default App;
