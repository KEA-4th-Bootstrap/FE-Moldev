import SideBar from '../components/sidebar/SideBar';
import { Outlet } from 'react-router';
import IslandSpace from '../components/islandContainer/IslandSpace';

const MainPage = () => {
  return (
    <div className="flex w-full min-h-screen items-center justify-end">
      <SideBar />
      <IslandSpace />
      <Outlet />
    </div>
  );
};

export default MainPage;
