import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import BlurBackgroundContainer from '../components/common/BlurBackgroundContainer';
import ArticleContainer from '../components/articlePage/ArticleContainer';

const ArticlePage = () => {
  const { articleId } = useParams();
  const navigation = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [childIsShow, setChildIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    const timer = setTimeout(() => {
      setChildIsShow(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleBackgroundClick = () => {
    if (!childIsShow) return;

    setChildIsShow(false);

    const timer = setTimeout(() => {
      navigation('/');
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <BlurBackgroundContainer isShow={isShow} onClick={handleBackgroundClick}>
      <ArticleContainer articleId={Number(articleId)} onClose={handleBackgroundClick} />
    </BlurBackgroundContainer>
  );
};

export default ArticlePage;
