import React, { useEffect, useState } from 'react';
import { SideType } from '../../data/type';
import SideButtonList from './SideButtonList';
import ArticleListContainer from './ArticleListContainer';
import RecommendUserContainer from './RecommendUserContainer';
import ChatbotContainer from './ChatbotContainer';
import SearchContainer from './SearchContainer';
import BlurBackgroundContainer from '../common/BlurBackgroundContainer';
import LoginContainer from '../loginContainer/LoginContainer';

const SideBar = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [clicked, setClicked] = useState<SideType>('list');
  const [isShow, setIsShow] = useState(false);
  const [childIsShow, setChildIsShow] = useState(false);
  const memberName = '두두';
  const islandNamd = '복복두더지';

  useEffect(() => {
    setIsLogin(true);
  }, []);

  useEffect(() => {
    console.log('isLogin:', isLogin);
    console.log('clicked:', clicked);
    if (!isLogin && clicked === 'login') {
      setIsShow(true);
    } else {
      setChildIsShow(false);
    }
  }, [isLogin, clicked]);

  useEffect(() => {
    if (isShow) {
      const timer = setTimeout(() => {
        setChildIsShow(true);
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setClicked('search');
    }
  }, [isShow]);

  useEffect(() => {
    if (!childIsShow) {
      const timer = setTimeout(() => {
        setIsShow(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [childIsShow]);

  return (
    <>
      <div className="flex w-1/3 h-full items-start justify-start shadow-right">
        <SideButtonList isLogin={isLogin} setClicked={setClicked} />
        <div className="grow h-full flex flex-col items-center justify-start py-16 px-24 sm:hidden md:hidden">
          {isLogin ? (
            <>
              {clicked === 'list' && (
                <ArticleListContainer memberName={memberName} islandName={islandNamd} />
              )}
              {clicked === 'search' && <SearchContainer />}
              {clicked === 'recommend' && <RecommendUserContainer memberName={memberName} />}
              {clicked === 'chatbot' && <ChatbotContainer memberName={memberName} />}
            </>
          ) : (
            <SearchContainer />
          )}
        </div>
      </div>
      <BlurBackgroundContainer isShow={isShow} onClick={() => setClicked('search')}>
        <LoginContainer isShow={childIsShow} setIsShow={setChildIsShow} />
      </BlurBackgroundContainer>
    </>
  );
};

export default SideBar;
