import Close from '../../assets/icons/icon_close.svg?react';
import { categoryEngToKor } from '../../data/type';
import MDEditor from '@uiw/react-md-editor';
import Pin from '../../assets/icons/icon_pin.svg?react';
import useArticle from '../../hooks/article/useArticle';

const ArticleContainer = ({
  articleId,
  isShow,
  onClose,
}: {
  articleId: number;
  isShow: boolean;
  onClose: () => void;
}) => {
  const article = useArticle(articleId);

  return (
    <div
      className={`w-4/5 h-[95%] flex flex-col items-center justify-start rounded-modal bg-white shadow-md relative ${isShow ? 'translate-y-0' : 'translate-y-[200%]'} transition-all duration-150`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {!article ? (
        <div>게시글 정보가 없습니다.</div>
      ) : (
        <>
          <div className="w-full flex flex-col items-start justify-start gap-y-16 p-24 border-b border-b-gray-50">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center justify-start gap-x-8">
                <Pin className="h-[16px] w-auto" />
                <div className="text-14 font-medium text-gray-700">
                  {categoryEngToKor[article.category]}
                </div>
              </div>
              <Close className="cursor-pointer" onClick={onClose} />
            </div>
            <div className="w-full items-center justify-start text-36 font-bold text-black">
              {article.title}
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center justify-start gap-x-6">
                <img src={article.img} alt="profile" className="w-[24px] h-[24px] rounded-full" />
                <div className="text-18 font-medium text-black">{article.userName}</div>
              </div>
              <div className="font-medium text-14 text-gray-700">{`${article.createdAt} | 조회수 ${article.visit}`}</div>
            </div>
          </div>
          <div
            data-color-mode="light"
            className="container w-full grow px-16 py-32 flex flex-col items-center justify-start overflow-y-hidden"
          >
            <div className="flex flex-col items-center justify-start w-full h-full overflow-y-scroll">
              <MDEditor.Markdown source={article.content} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleContainer;
