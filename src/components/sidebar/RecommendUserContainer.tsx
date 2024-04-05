import React, { useEffect, useState } from 'react';
import { RecommendUserType } from '../../data/type';
import SearchUserResultContainer from '../searchContainer/SearchUserResultContainer';

const RecommendUserContainer = ({ memberName }: { memberName: string }) => {
  const [recommendList, setRecommendList] = useState<RecommendUserType[]>([]);

  useEffect(() => {
    setRecommendList([
      {
        percentage: 90,
        user: {
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
          img: 'https://source.unsplash.com/random/200x200',
          name: '유저4',
          introduce: '복복복복복복복두더지입니다어쩌구저쩌구저쩌구',
          visit: 400,
          updated: '2021-09-04',
        },
      },
    ]);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-y-30">
      <div className="w-full flex flex-col items-start justify-center text-24 font-semibold pt-62">
        <div>{memberName}님이</div>
        <div>가보면 좋을 섬을 찾아봤어요.</div>
      </div>
      <div className="w-full flex-col items-center justify-start">
        {recommendList.map((item, index) => (
          <SearchUserResultContainer key={index} item={item.user} percent={item.percentage} />
        ))}
      </div>
    </div>
  );
};

export default RecommendUserContainer;
