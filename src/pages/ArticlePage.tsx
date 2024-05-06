import BlurBackgroundContainer from '../components/common/BlurBackgroundContainer';
import ArticleContainer from '../components/articlePage/ArticleContainer';
import useArticlePage from '../hooks/article/useArticlePage';

const ArticlePage = () => {
  const { isShow, childIsShow, onBackgroundClick, articleId } = useArticlePage();

  return (
    <BlurBackgroundContainer isShow={isShow} onClick={onBackgroundClick}>
      <ArticleContainer
        articleId={Number(articleId)}
        isShow={childIsShow}
        onClose={onBackgroundClick}
      />
    </BlurBackgroundContainer>
  );
};

export default ArticlePage;
