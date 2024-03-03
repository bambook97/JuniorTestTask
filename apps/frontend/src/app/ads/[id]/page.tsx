'use client';

import React from 'react';
import useFetchAdData from '../../../shared/hooks/useFetchAdData';
import AdView from '../../../widgets/AdView/AdView';

export default function AdPage({ params }: { params: { id: string } }) {
  const { data } = useFetchAdData({ id: params.id });
  if (!data) return null;

  return (
    <div>
      <AdView data={data} />
    </div>
  );
}
