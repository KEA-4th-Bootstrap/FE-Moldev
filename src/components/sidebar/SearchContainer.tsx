import SearchInputBox from '../searchContainer/SearchInputBox';
import SearchUserResultContainer from '../searchContainer/SearchUserResultContainer';
import ArticleListItemContainer from '../articleListContainer/ArticleListItemContainer';
import useSearch from '../../hooks/sidebar/search/useSearch';

const SearchContainer = () => {
  const { searchType, searchArticleResult, searchUserResult, setSearchType } = useSearch();

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-y-24">
      <SearchInputBox searchType={searchType} setSearchType={setSearchType} />
      <div className="w-full flex flex-col items-center justify-start">
        {searchType === 'article' &&
          searchArticleResult.map((item, idx) => (
            <ArticleListItemContainer key={item.id + idx} item={item} moldevId={item.moldevId} />
          ))}
        {searchType === 'user' &&
          searchUserResult.map((item, idx) => (
            <SearchUserResultContainer key={item.name + idx} item={item} />
          ))}
      </div>
    </div>
  );
};

export default SearchContainer;
