import React from 'react';
import PageList from '@/src/PageList';
import GridImageText from '@/src/GridImageText';


export default function Page() {
 
 return (
    <>
      <PageList dir='physics/special-relativity/dynamics' title='Special Relativity' LayoutComponent={GridImageText} />;
    </>
  );
}

