import { Skeleton } from '@mui/material';
import React from 'react';
import style from './adViewSkeleton.module.scss';

const AdViewSkeleton = () => (
  <div className={style.wrapper}>
    <Skeleton width="35vw" height="30vh" />
    <div style={{ width: '100%' }}>
      <div className={style.productInfo}>
        <Skeleton style={{ width: '300px', height: '30px' }} />
        <Skeleton width="24px" height="24px" />
      </div>
      <div className={style.productInfo}>
        <Skeleton width="30%" />
        <Skeleton width="10%" />
      </div>
      <Skeleton width="75%" />
    </div>
  </div>
);

export default AdViewSkeleton;
