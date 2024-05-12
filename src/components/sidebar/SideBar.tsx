import SideButtonList from './SideButtonList';
import ArticleListContainer from './ArticleListContainer';
import RecommendUserContainer from './RecommendUserContainer';
import ChatbotContainer from './ChatbotContainer';
import SearchContainer from './SearchContainer';
import useSidebar from '../../hooks/sidebar/useSidebar';

const SideBar = () => {
  const { isLogin, clicked, setClicked, memberName, islandNamd } = useSidebar();

  return (
    <div className="flex w-1/3 shrink-0 h-screen fixed left-0 top-0 bottom-0 bg-white items-start justify-start shadow-right">
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
