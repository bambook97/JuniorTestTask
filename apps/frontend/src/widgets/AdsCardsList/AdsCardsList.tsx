import React, { useState } from 'react';
import { Button } from '@mui/material';
import { AdsCardFooter, AdsCardPreview, AdsList } from '../../entities';
import useFetchAdsList from '../../shared/hooks/useFetchAdsList';
import FiltersDialog from '../../features/AdsFilter/AdsFilter';
import LikeButton from '../../features/AdsCard/LikeButton/LikeButton';
import style from './adsCardsList.module.scss';

interface AdsCardsListProps {
  isEnabled: boolean;
}
const AdsCardsList = ({ isEnabled }: AdsCardsListProps) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filtersParams, setFiltersParams] = useState('');

  const { data } = useFetchAdsList({
    searchValue: filtersParams,
    isEnabled,
  });
  const handleOpenFilters = () => setFiltersOpen(true);
  const handleCloseFilters = () => setFiltersOpen(false);

  const handleApplyFilters = (filters: string) => {
    setFiltersParams(filters);
  };

  return (
    <div>
      <div className={style.header}>
        <h1>List of ads</h1>
        <Button onClick={handleOpenFilters}>Open Filters</Button>
      </div>
      <AdsList
        adsData={data}
        renderAds={(card) => (
          <AdsCardPreview
            key={card.id}
            adsData={card}
            footerSlot={
              <AdsCardFooter
                adsData={card}
                buttonSlot={<LikeButton id={card.id} />}
              />
            }
          />
        )}
      />
      <FiltersDialog
        open={filtersOpen}
        onClose={handleCloseFilters}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default AdsCardsList;
