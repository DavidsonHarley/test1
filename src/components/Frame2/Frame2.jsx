import React from 'react';
import cls from './Frame2.module.scss';

import vito from '../../shared/image/Vito 1.svg';
import growBlu from '../../shared/image/BLUE GLOW 1.svg';
import boxImg from '../../shared/image/box.svg';
import items from './items';

export default function Frame2() {
  return (
    <>
      <div className={cls.growBlu}>
        <img src={growBlu} alt="growBlu" />
      </div>
      <div className={cls.frame2}>
        <div className={cls.imgLeft}>
          <img className={cls.imgVito} src={vito} alt="vito" />
        </div>
        <div className={cls.contentRight}>
          <div className={cls.title}>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</div>
          <div className={cls.table}>
            <div className={cls.titleServer}>
              <div className={cls.nameServer}>Бесплатные сервера</div>
              <div className={cls.nameServer}>Подписочный сервер</div>
            </div>
            <div className={cls.tableItems}>
              {
                items && items.map((el) => (
                  <div key={el.id} className={cls.cardItems}>
                    <div className={cls.imgItems}>
                      <img src={el.img} alt="img" />
                      <div className={cls.titleItems}>{el.title}</div>
                    </div>

                    <div className={cls.server}>
                      {el.server}
                      <div className={cls.subscription}>{el.subscription}</div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className={cls.items}>
            <div className={cls.imgItems}>
              <img src={boxImg} alt="box" />
            </div>
            <div className={cls.container}>
              <div className={cls.price}>
                399 ₽
              </div>
              <div className={cls.button}>
                <button className={cls.button} type="submit">
                  ПРИОБРЕСТИ
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
}
