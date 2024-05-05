import { useEffect, useState } from 'react';
import ArticleListDropDown from '../articleListContainer/ArticleListDropDown';
import { ArticleListItemType, OrderType } from '../../data/type';
import ArticleListItemContainer from '../articleListContainer/ArticleListItemContainer';
import { useParams } from 'react-router';

const ArticleListContainer = ({
  memberName,
  islandName,
}: {
  memberName: string;
  islandName: string;
}) => {
  const { moldevId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState<OrderType>('new');
  const [articleList, setArticleList] = useState<ArticleListItemType[]>([]);

  useEffect(() => {
    setArticleList([
      {
        id: 1,
        title: '제목1',
        content: '내용1',
        createdAt: '2021-09-01',
        visit: 100,
        category: 'activity',
        img: 'https://source.unsplash.com/random/200x200',
        userName: '김철수',
      },
      {
        id: 2,
        title: '제목2',
        content: '내용2',
        createdAt: '2021-09-02',
        visit: 200,
        category: 'project',
        img: 'https://source.unsplash.com/random/200x200',
        userName: '김철수',
      },
      {
        id: 3,
        title: '제목3',
        content: '내용3',
        createdAt: '2021-09-03',
        visit: 300,
        category: 'awards',
        img: 'https://source.unsplash.com/random/200x200',
        userName: '김철수',
      },
      {
        id: 4,
        title: '제목4',
        content: '내용4',
        createdAt: '2021-09-04',
        visit: 400,
        category: 'trouble',
        img: 'https://source.unsplash.com/random/200x200',
        userName: '김철수',
      },
    ]);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full flex flex-col items-start justify-center text-24 font-semibold pt-62">
        <div>{memberName}님의</div>
        <div>{islandName} 섬을 둘러보세요.</div>
      </div>
      <div className="w-full flex items-center justify-end relative">
        <ArticleListDropDown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
      <div className="w-full flex-col items-center justify-start">
        {articleList.map((item) => (
          <ArticleListItemContainer key={item.id} item={item} moldevId={moldevId || ''} />
        ))}
      </div>
    </div>
  );
};

export default ArticleListContainer;
