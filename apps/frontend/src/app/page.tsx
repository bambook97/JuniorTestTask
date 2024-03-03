'use client';

import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import AddsCardsList from '../widgets/AdsCardsList/AddsCardsList';

const AdsPage = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleFetchAds = () => {
    setIsEnabled(true);
  };

  return (
    <Box
      gap="20px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <h1>And here it starts...</h1>
      <Button onClick={handleFetchAds} variant="outlined">
        Send an API request
      </Button>
      <AddsCardsList isEnabled={isEnabled} />
    </Box>
  );
};

export default AdsPage;
