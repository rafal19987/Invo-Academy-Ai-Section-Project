import React from 'react';
import TileItem from '../TileItem/TileItem';
import { BsGlobe } from 'react-icons/bs';

const TileList = () => {
  return (
    <ul className="tileList">
      {' '}
      <TileItem
        iconColor={'purple'}
        icon={<BsGlobe />}
        header={'Machine Learning'}
        content={'The ability of AI systems to learn from data and improve their performance'}
      />
      <TileItem
        iconColor={'violet'}
        icon={'Here icon'}
        header={'Computer Vision'}
        content={'The ability to process and analyze visual information, such as images and videos'}
      />
      <TileItem
        iconColor={'aqua'}
        icon={'Here icon'}
        header={'Natural Language'}
        content={'The ability of AI systems to understand, interpret, and generate human language'}
      />
      <TileItem
        iconColor={'yellow'}
        icon={'Here icon'}
        header={'Robotics'}
        content={
          'development of autonomous robots that can perform tasks without human intervention'
        }
      />
    </ul>
  );
};

export default TileList;
