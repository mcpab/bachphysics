
import React from 'react';
import PageList from '@/src/PageList';
import GridFullImageText from '@/src/GridFullImageText';


export default function Page() {
 
 return (
    <>
      <PageList dir='physics/classical-mechanics/' title='Classical Mechanics' LayoutComponent={GridFullImageText} />;
    </>
  );
}

