import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import useCode from '../core/useCode';

function Code({ item }) {
  // const [code, setCode ] = useState('')

  // useEffect(() => {
  //   import(`!!raw-loader!../lowPoly/${item}`).then(r => setCode(r.default));
  // }, [item])

  const code = useCode(item);

  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {code}
    </SyntaxHighlighter>
  );
}

export default React.memo(Code);
