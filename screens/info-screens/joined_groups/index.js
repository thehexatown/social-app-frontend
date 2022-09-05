import React, { useState } from 'react';
import Collection from '../../../components/collections';

const groups = [
  {
    name: 'LinkedIn Network',
    rating: '120+',
  },
  {
    name: 'Entrepreneurs Community',
  },
  {
    name: 'Hexon Society',
  },
  {
    name: `Professional HR's Hub`,
  },
];

const Groups = () => {
  return (
    <div>
      <Collection heading={'Groups'} data={groups} isDropdown={true} />
    </div>
  );
};

export default Groups;
