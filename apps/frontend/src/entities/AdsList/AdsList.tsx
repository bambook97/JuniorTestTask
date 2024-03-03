import React, { ReactNode } from 'react';
import { Ads } from '../../shared/types/types';
import style from './AdsCardsList.module.scss';

interface AdsCardsListProps {
  adsData: Ads[];
  renderAds: (ads: Ads) => ReactNode;
}

const AdsList = ({ adsData, renderAds }: AdsCardsListProps) => (
  <div className={style.container}>{adsData?.map(renderAds)}</div>
);
export default AdsList;
