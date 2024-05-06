import { useEffect, useState } from 'react';
import { ArticleListItemType } from '../../data/type';
import { dummyArticle } from '../../data/dummy';

const useArticle = (articleId: number) => {
  const [article, setArticle] = useState<ArticleListItemType | null>(null);

  useEffect(() => {
    if (!articleId) return;

    // fetch article data
    console.log('articleID:', articleId);
    setArticle(dummyArticle);
  }, [articleId]);

  return article;
};

export default useArticle;
