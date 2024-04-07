import { useEffect, useState } from 'react';
import { SideType } from '../../data/type';
import SideButtonList from './SideButtonList';
import ArticleListContainer from './ArticleListContainer';
import RecommendUserContainer from './RecommendUserContainer';
import ChatbotContainer from './ChatbotContainer';
import SearchContainer from './SearchContainer';

const SideBar = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [clicked, setClicked] = useState<SideType>('list');
  const memberName = '두두';
  const islandNamd = '복복두더지';

  useEffect(() => {
    setIsLogin(false);
  }, []);

  return (
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
  );
};

export default SideBar;
