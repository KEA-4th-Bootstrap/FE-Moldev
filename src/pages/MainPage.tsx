import SideBar from '../components/sidebar/SideBar';
import IslandContainer from '../components/islandContainer/IslandContainer';
import { Outlet } from 'react-router';

const MainPage = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <SideBar />
      <IslandContainer />
      <Outlet />
    </div>
  );
};

export default MainPage;
