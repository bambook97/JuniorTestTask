import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Ads } from '../../../shared/types/types';
import style from './adsPreviewCard.module.scss';

interface AdsPreviewCardProps {
  adsData: Ads;
  footerSlot: ReactNode;
}
const AdsPreviewCard = ({ adsData, footerSlot }: AdsPreviewCardProps) => (
  <Link href={`/ads/${adsData.id}`} className={style.container}>
    <Image
      width={250}
      height={250}
      className={style.thumbnail}
      src={adsData.images[0].thumbnail}
      alt="thumbnail"
      loading="lazy"
    />
    {footerSlot}
  </Link>
);

export default AdsPreviewCard;
