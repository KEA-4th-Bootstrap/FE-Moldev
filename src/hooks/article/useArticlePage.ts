import { useParams } from 'react-router';
import useBackground from '../common/useBackground';
import { useEffect } from 'react';

const useArticlePage = () => {
  const { articleId } = useParams();
  const { isShow, childIsShow, setChildIsShow, onBackgroundClick } = useBackground(-1);

  useEffect(() => {
    console.log('articleId', articleId);
  }, [articleId]);

  return { isShow, childIsShow, setChildIsShow, onBackgroundClick, articleId };
};

export default useArticlePage;
