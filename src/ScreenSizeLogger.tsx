'use client';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

const ScreenSizeLogger = () => {

  const isXs = useMediaQuery('(max-width:600px)');
  const isSm = useMediaQuery('(min-width:600px) and (max-width:960px)');
  const isMd = useMediaQuery('(min-width:960px) and (max-width:1280px)');
  const isLg = useMediaQuery('(min-width:1280px) and (max-width:1920px)');
  const isXl = useMediaQuery('(min-width:1920px)');

  useEffect(() => {
    if (isXs) {
      console.log('Screen size: Extra Small (xs)');
    } else if (isSm) {
      console.log('Screen size: Small (sm)');
    } else if (isMd) {
      console.log('Screen size: Medium (md)');
    } else if (isLg) {
      console.log('Screen size: Large (lg)');
    } else if (isXl) {
      console.log('Screen size: Extra Large (xl)');
    }
  }, [isXs, isSm, isMd, isLg, isXl]);

  return <></>;
};

export default ScreenSizeLogger;