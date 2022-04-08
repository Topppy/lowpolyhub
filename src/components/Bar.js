import React from 'react';
import s from './Bar.module.css';

function Bar({ onClick }) {
  return <div className={s.bar} onClick={onClick} />;
}

export default React.memo(Bar);
