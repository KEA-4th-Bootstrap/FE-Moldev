import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import IslandContainer from '../components/islandContainer/IslandContainer';

const MainPage = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <SideBar />
      <IslandContainer />
    </div>
  );
};

export default MainPage;
