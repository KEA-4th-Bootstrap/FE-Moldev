import { useEffect, useState } from 'react';
import { SideType } from '../../data/type';

const useSidebar = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [clicked, setClicked] = useState<SideType>('list');
  const memberName = '두두';
  const islandNamd = '복복두더지';

  useEffect(() => {
    setIsLogin(true);
  }, []);

  return { isLogin, clicked, setClicked, memberName, islandNamd };
};

export default useSidebar;
