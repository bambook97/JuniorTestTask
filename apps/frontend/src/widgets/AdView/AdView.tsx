import React from 'react';
import { Ads } from '../../shared/types/types';
import Carousel from '../../shared/ui/Carousel/Carousel';
import LikeButton from '../../features/AdsCard/LikeButton/LikeButton';
import style from './adView.module.scss';

interface AdViewProps {
  data: Ads;
}
const AdView = ({ data }: AdViewProps) => (
  <div className={style.wrapper}>
    <Carousel images={data.images} />
    <div className={style.textBlock}>
      <div className={style.productInfo}>
        <h3>{data.title}</h3>
        <LikeButton id={data.id} />
      </div>
      <div className={style.productInfo}>
        <h3>
          {data.city_name},{data.district_name}
        </h3>
        <h3>{data.price}</h3>
      </div>
      <h3 className={style.description}>{data.description}</h3>
    </div>
  </div>
);

export default AdView;
