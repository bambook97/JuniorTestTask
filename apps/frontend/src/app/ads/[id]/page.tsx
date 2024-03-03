'use client';

import React from 'react';
import AdDetailsSkeleton from '../../../widgets/AdView/skeleton/AdDetailsSkeleton';
import useFetchAdData from '../../../shared/hooks/useFetchAdData';
import AdDetails from '../../../widgets/AdView/AdDetails';

export default function AdPage({ params }: { params: { id: string } }) {
  // Работал в основном с PageRouter и получал данные через getServerSideProps, почитал в доке как фетчить данные в SSR с AppRouer,
  // но получал ошибку подключения к api, сделал обычным клиентским компонентом

  const { data } = useFetchAdData({ id: params.id });

  if (!data) return <AdDetailsSkeleton />;

  return <AdDetails data={data} />;
}
