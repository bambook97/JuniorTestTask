import React from 'react';
import Image from 'next/image';
import { Ads } from '../../shared/types/types';
import Carousel from '../../shared/ui/Carousel/Carousel';

interface Props {
  data: Ads;
}
const AdView = ({ data }: Props) => {
  console.log(data);
  return (
    <div>
      <Carousel images={data.images} />
    </div>
  );
};

export default AdView;
