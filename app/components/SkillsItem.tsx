'use client';

import Image from 'next/image';
import React from 'react';

interface SkillsItemProps {
  item: string;
}

const SkillsItem: React.FC<SkillsItemProps> = ({ item }) => {
  const imageSrc = `/images/skills/${item}.png`;

  return (
    <span className='skill-img'>
        <Image
          src={imageSrc}
          alt={item}
          width={20}
          height={20}
          priority  
        />
    </span>
  );
};

export default SkillsItem;
