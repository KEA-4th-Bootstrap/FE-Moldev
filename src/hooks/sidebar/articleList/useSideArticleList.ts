import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ArticleListItemType, OrderType } from '../../../data/type';

const useSideArticleList = () => {
  const { moldevId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState<OrderType>('new');
  const [articleList, setArticleList] = useState<ArticleListItemType[]>([]);

  useEffect(() => {
    setArticleList([
      {
        moldevId: '1',
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
        moldevId: '1',
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
        moldevId: '1',
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
        moldevId: '1',
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

  return { isOpen, setIsOpen, current, setCurrent, articleList, moldevId };
};

export default useSideArticleList;
