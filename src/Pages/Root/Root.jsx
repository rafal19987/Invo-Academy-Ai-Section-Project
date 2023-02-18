import React from 'react';
import Header from '../../components/Header/Header';
import TileList from '../../components/TileList/TileList';

const Root = () => {
  return (
    <div className="container">
      <Header />
      <TileList></TileList>
    </div>
  );
};

export default Root;
