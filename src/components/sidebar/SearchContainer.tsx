import React, { useEffect, useState } from 'react';
import { ArticleListItemType, SearchType, UserListType } from '../../data/type';
import SearchInputBox from '../searchContainer/SearchInputBox';
import SearchUserResultContainer from '../searchContainer/SearchUserResultContainer';
import ArticleListItemContainer from '../articleListContainer/ArticleListItemContainer';

const SearchContainer = () => {
  const [searchType, setSearchType] = useState<SearchType>('article');
  const [searchArticleResult, setSearchArticleResult] = useState<ArticleListItemType[]>([]);
  const [searchUserResult, setSearchUserResult] = useState<UserListType[]>([]);

  useEffect(() => {
    setSearchUserResult([
      {
        img: 'https://media.bunjang.co.kr/product/252438211_1_1707301834_w360.jpg',
        name: '김철수',
        introduce: '복복복복복복복두더지입니다어쩌구저쩌구저쩌구',
        visit: 100,
        updated: '2021-10-10',
      },
      {
        img: 'https://media.bunjang.co.kr/product/252438211_1_1707301834_w360.jpg',
        name: '김철수',
        introduce: '복복복복복복복두더지입니다어쩌구저쩌구저쩌구',
        visit: 100,
        updated: '2021-10-10',
      },
    ]);
    setSearchArticleResult([
      {
        id: 1,
        title: '제목',
        content: '내용',
        createdAt: '2021-10-10',
        visit: 100,
        category: '대외활동',
        img: 'https://media.bunjang.co.kr/product/252438211_1_1707301834_w360.jpg',
      },
      {
        id: 1,
        title: '제목',
        content: '내용',
        createdAt: '2021-10-10',
        visit: 100,
        category: '대외활동',
        img: 'https://media.bunjang.co.kr/product/252438211_1_1707301834_w360.jpg',
      },
    ]);
  }, []);

  useEffect(() => {
    setSearchType('article');
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-y-24">
      <SearchInputBox searchType={searchType} setSearchType={setSearchType} />
      <div className="w-full flex flex-col items-center justify-start">
        {searchType === 'article' &&
          searchArticleResult.map((item, idx) => (
            <ArticleListItemContainer key={item.id + idx} item={item} />
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
