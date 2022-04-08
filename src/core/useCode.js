import { useEffect, useState } from 'react';

const useCode = item => {
  const [code, setCode] = useState('');

  useEffect(() => {
    import(`!!raw-loader!lowPoly/${item}`).then(r => setCode(r.default));
  }, [item]);

  return code;
};

export default useCode;
