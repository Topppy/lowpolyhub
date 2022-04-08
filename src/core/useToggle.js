import { useEffect, useState } from 'react';

const useCode = () => {
  const [code, setCode] = useState('');

  useEffect(() => {
    import(`!!raw-loader!/lowPoly/${item}`).then(r => setCode(r.default));
  }, [item]);
};

export default useCode;
