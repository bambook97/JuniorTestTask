import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import Image from 'next/image';
import { Ads } from '../../types/types';

interface Props {
  images: Ads['images'];
}

function SimpleImageSlider({ images }: Props) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep + maxSteps - 1) % maxSteps
    );
  };

  return (
    <Box width="30vw" height="30%" position="relative">
      <Image
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        src={images[activeStep].image}
        alt={`Slide ${activeStep} image`}
        width={600}
        height={600}
      />
      <Button
        size="small"
        onClick={handleBack}
        disabled={maxSteps === 1}
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          zIndex: 1,
          transform: 'translateY(-50%)',
        }}
      >
        <ArrowBackIosOutlined />
      </Button>
      <Button
        size="small"
        onClick={handleNext}
        disabled={maxSteps === 1}
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          zIndex: 1,
          transform: 'translateY(-50%)',
        }}
      >
        <ArrowForwardIosOutlined />
      </Button>
    </Box>
  );
}

export default SimpleImageSlider;
