import { useEffect, useState } from 'react';
import { ArticleListItemType, SearchType, UserListType } from '../../../data/type';

const useSearch = () => {
  const [searchType, setSearchType] = useState<SearchType>('article');
  const [searchArticleResult, setSearchArticleResult] = useState<ArticleListItemType[]>([]);
  const [searchUserResult, setSearchUserResult] = useState<UserListType[]>([]);

  useEffect(() => {
    setSearchUserResult([
      {
        moldevId: '1',
        img: 'https://media.bunjang.co.kr/product/252438211_1_1707301834_w360.jpg',
        name: '김철수',
        introduce: '복복복복복복복두더지입니다어쩌구저쩌구저쩌구',
        visit: 100,
        updated: '2021-10-10',
      },
      {
        moldevId: '1',
        img: 'https://media.bunjang.co.kr/product/252438211_1_1707301834_w360.jpg',
        name: '김철수',
        introduce: '복복복복복복복두더지입니다어쩌구저쩌구저쩌구',
        visit: 100,
        updated: '2021-10-10',
      },
    ]);
    setSearchArticleResult([
      {
        moldevId: '1',
        id: 1,
        title: '제목',
        content: '내용',
        createdAt: '2021-10-10',
        visit: 100,
        category: 'activity',
        img: 'https://media.bunjang.co.kr/product/252438211_1_1707301834_w360.jpg',
        userName: '김철수',
      },
      {
        moldevId: '1',
        id: 2,
        title: '복복복복',
        content: '어느 날 복복두더지가 어쩌구저쩌구 어진식당 어쩌구 저쩌구 어쩌구 저쩌구 ',
        createdAt: '2021-10-10',
        visit: 100,
        category: 'activity',
        img: 'https://media.bunjang.co.kr/product/252438211_1_1707301834_w360.jpg',
        userName: '김철수',
      },
    ]);
  }, []);

  useEffect(() => {
    setSearchType('article');
  }, []);

  return { searchType, searchArticleResult, searchUserResult, setSearchType };
};

export default useSearch;
