import React from 'react';
import Collection from '../../../collections';

const pages = [
  {
    name: 'Pexels',
    rating: '120+',
  },
  {
    name: 'Unsplash',
  },
  {
    name: 'FreePik',
  },
  {
    name: `HexaTown`,
  },
  {
    name: 'DigitalARTAtudios',
  },
  {
    name: `LogicFab`,
  },
];

const Pages = () => {
  return (
    <div>
      <Collection
        heading={'Pages you like'}
        data={pages}
        seeAll={true}
        isDropdown={true}
      />
    </div>
  );
};

export default Pages;
