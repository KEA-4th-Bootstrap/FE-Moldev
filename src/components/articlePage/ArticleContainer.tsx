import { useEffect, useState } from 'react';
import Close from '../../assets/icons/icon_close.svg?react';
import { ArticleListItemType, categoryEngToKor } from '../../data/type';
import { dummyArticle } from '../../data/dummy';
import MDEditor from '@uiw/react-md-editor';

const ArticleContainer = ({ articleId, onClose }: { articleId: number; onClose: () => void }) => {
  const [article, setArticle] = useState<ArticleListItemType | null>(null);

  useEffect(() => {
    if (!articleId) return;

    // fetch article data
    console.log('articleID:', articleId);
    setArticle(dummyArticle);
  }, [articleId]);

  return (
    <div
      className="w-4/5 h-5/6 flex flex-col items-center justify-start rounded-modal bg-white shadow-md relative"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {!article ? (
        <div>게시글 정보가 없습니다.</div>
      ) : (
        <>
          <div className="w-full shrink-0 flex items-center justify-between px-16 py-13 border-b border-gray-200 bg-white rounded-t-modal">
            <div className="flex flex-col items-start justify-center gap-y-10">
              <div className="flex items-end justify-start gap-x-8">
                <div className="text-36 font-bold text-black">{article.title}</div>
                <div className="text-24 font-bold text-gray-700">
                  / {categoryEngToKor[article.category]}
                </div>
              </div>
              <div className="font-bold text-gray-700">{`${article.userName} / ${article.createdAt} / 조회수 ${article.visit}`}</div>
            </div>
            <div className="flex items-center justify-center gap-x-16">
              <Close onClick={onClose} className="cursor-pointer" />
            </div>
          </div>
          <div
            data-color-mode="light"
            className="container w-full grow px-16 py-32 flex flex-col items-center justify-start overflow-y-hidden"
          >
            <MDEditor.Markdown source={article.content} />
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleContainer;
