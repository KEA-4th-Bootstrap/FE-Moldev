import { useEffect, useState } from 'react';
import { RecommendUserType } from '../../../data/type';

const useRecommendUser = () => {
  const [recommendList, setRecommendList] = useState<RecommendUserType[]>([]);

  useEffect(() => {
    setRecommendList([
      {
        percentage: 90,
        user: {
          moldevId: '1',
          img: 'https://source.unsplash.com/random/200x200',
          name: '유저1',
          introduce: '복복복복복복복두더지입니다어쩌구저쩌구저쩌구',
          visit: 100,
          updated: '2021-09-01',
        },
      },
      {
        percentage: 80,
        user: {
          moldevId: '1',
          img: 'https://source.unsplash.com/random/200x200',
          name: '유저2',
          introduce: '복복복복복복복두더지입니다어쩌구저쩌구저쩌구',
          visit: 200,
          updated: '2021-09-02',
        },
      },
      {
        percentage: 70,
        user: {
          moldevId: '1',
          img: 'https://source.unsplash.com/random/200x200',
          name: '유저3',
          introduce: '복복복복복복복두더지입니다어쩌구저쩌구저쩌구',
          visit: 300,
          updated: '2021-09-03',
        },
      },
      {
        percentage: 60,
        user: {
          moldevId: '1',
          img: 'https://source.unsplash.com/random/200x200',
          name: '유저4',
          introduce: '복복복복복복복두더지입니다어쩌구저쩌구저쩌구',
          visit: 400,
          updated: '2021-09-04',
        },
      },
    ]);
  }, []);

  return { recommendList };
};

export default useRecommendUser;
