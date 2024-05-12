import { useEffect, useState } from 'react';
import useIsland from './useIsland';
import { ArticleListItemType, UserListItemType } from '../../data/type';
import { dummyProject, userListItemDummy } from '../../data/dummy';

const useMainPage = () => {
  const [selected, setSelected] = useState<'article' | 'island'>('article');
  const { lightIntensity, positions, colors } = useIsland();
  const [articleList, setArticleList] = useState<ArticleListItemType[]>([]);
  const [userList, setUserList] = useState<UserListItemType[]>([]);

  useEffect(() => {
    setArticleList(dummyProject);
    setUserList(userListItemDummy);
  }, []);

  const onClickArticle = () => {
    setSelected('article');
  };

  const onClickIsland = () => {
    setSelected('island');
  };

  return {
    articleList,
    userList,
    selected,
    onClickArticle,
    onClickIsland,
    lightIntensity,
    positions,
    colors,
  };
};

export default useMainPage;
