import React from 'react';

import cls from './Main.module.scss';
import Frame1 from '../../components/Frame1/Frame1';
import Frame2 from '../../components/Frame2/Frame2';

export default function Main() {
  return (
    <div className={cls.main}>
      <Frame1 />
      <Frame2 />
    </div>
  );
}
