import React from 'react';
import s from './Menu.module.css';
import list from '../core/lowPoly';

function Menu({ cur, onClick }) {
  return (
    <aside className={s.menu}>
      {list.map(item => (
        <div
          key={item}
          onClick={() => onClick(item)}
          className={cur === item ? s.active : s.item}
        >
          {item}
        </div>
      ))}
    </aside>
  );
}

export default React.memo(Menu);
