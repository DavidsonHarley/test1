import React from 'react';
import cls from './Frame1.module.scss';

import imageLeft from '../../shared/image/MafiaCostume_2022 2.svg';
import imageRight from '../../shared/image/MafiaCostume_2022 3.svg';
import logo from '../../shared/image/logo.svg';
import boxes from '../../shared/image/boxes.svg';
import grow from '../../shared/image/glow 1.svg';
import growBlu from '../../shared/image/BLUE GLOW 1.svg';

export default function Frame1() {
  return (
    <div className={cls.frame1}>
      <div className={cls.grow}>
        <img className={cls.imgGrow} src={grow} alt="grow" />
      </div>
      <div className={cls.growBlu}>
        <img className={cls.growBlu} src={growBlu} alt="growBlu" />
      </div>
      <div className={cls.content}>
        <div className={cls.imageLeft}>
          <img src={imageLeft} alt="img" />
        </div>
        <div className={cls.contentCenter}>
          <div className={cls.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={cls.boxes}>
            <img src={boxes} alt="boxes" />
          </div>
          <div className={cls.heding}>
            <div className={cls.title}>
              КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ
            </div>
            <div className={cls.text}>
              Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!
            </div>
          </div>
        </div>
        <div className={cls.imgRight}>
          <img src={imageRight} alt="img" />
        </div>

      </div>

    </div>
  );
}
