import React, { useState } from 'react';
import { Button } from '@mui/material';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import { Ads } from '../../types/types';
import Image from 'next/image';

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
    <div style={{ maxWidth: '600px', position: 'relative', height: '30%' }}>
      <Image
        style={{ objectFit: 'cover', width: '100%' }}
        src={images[activeStep].image}
        alt={`Slide ${activeStep} image`}
        width={600}
        height={600}
      />
      <Button
        size="small"
        onClick={handleBack}
        disabled={maxSteps === 1}
        style={{ position: 'absolute', left: 0, top: '50%', zIndex: 1 }}
      >
        <ArrowBackIosOutlined />
      </Button>
      <Button
        size="small"
        onClick={handleNext}
        disabled={maxSteps === 1}
        style={{ position: 'absolute', right: 0, top: '50%', zIndex: 1 }}
      >
        <ArrowForwardIosOutlined />
      </Button>
    </div>
  );
}

export default SimpleImageSlider;
