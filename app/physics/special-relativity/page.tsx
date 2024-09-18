
import React from 'react';
import PageList from '@/src/PageList';
import GridFullImageText from '@/src/GridFullImageText';


export default function Page() {
 
 return (
    <>
      <PageList dir='physics/special-relativity/' title='Special Relativity' LayoutComponent={GridFullImageText} />;
    </>
  );
}

