import ArticleListDropDown from '../articleListContainer/ArticleListDropDown';
import ArticleListItemContainer from '../articleListContainer/ArticleListItemContainer';
import useSideArticleList from '../../hooks/sidebar/articleList/useSideArticleList';

const ArticleListContainer = ({
  memberName,
  islandName,
}: {
  memberName: string;
  islandName: string;
}) => {
  const { isOpen, setIsOpen, current, setCurrent, articleList, moldevId } = useSideArticleList();

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full flex flex-col items-start justify-center text-24 font-semibold pt-62">
        <div>{memberName}님의</div>
        <div>{islandName} 섬을 둘러보세요.</div>
      </div>
      <div className="w-full flex items-center justify-end relative">
        <ArticleListDropDown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
      <div className="w-full flex-col items-center justify-start">
        {articleList.map((item) => (
          <ArticleListItemContainer key={item.id} item={item} moldevId={moldevId || ''} />
        ))}
      </div>
    </div>
  );
};

export default ArticleListContainer;
