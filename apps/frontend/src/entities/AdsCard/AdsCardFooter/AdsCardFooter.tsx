import React, { ReactNode } from 'react';
import { Ads } from '../../../shared/types/types';
import style from './adsCardFooter.module.scss';

interface AdsCardFooterProps {
  adsData: Ads;
  buttonSlot: ReactNode;
}

const AdsCardFooter = ({ adsData, buttonSlot }: AdsCardFooterProps) => (
  <div className={style.container}>
    <div className={style.infoWrapper}>
      <p className={style.title}>{adsData.title}</p>
      {buttonSlot}
    </div>
    <div className={style.infoWrapper}>
      <p className={style.city}>{adsData.city_name}</p>
      <p className={style.price}>{adsData.price}</p>
    </div>
  </div>
);
export default AdsCardFooter;
