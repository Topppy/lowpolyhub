import React, { useEffect, useState } from 'react';
import s from './Stage.module.css';
import { codeHelper } from '../core/utils';

function Stage({ item }) {
  const [code, setCode] = useState('');

  useEffect(() => {
    import(`!!raw-loader!../lowPoly/${item}`).then(r => setCode(r.default));
  }, [item]);

  return (
    <section className={s.stage}>
      渲染
      <iframe srcDoc={codeHelper(code)} />
    </section>
  );
}

export default React.memo(Stage);
