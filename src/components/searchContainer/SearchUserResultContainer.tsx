import React from 'react';
import { UserListType } from '../../data/type';

const SearchUserResultContainer = ({ item, percent }: { item: UserListType; percent?: number }) => {
  return (
    <div className="w-full flex flex-col gap-y-8 items-start justify-center p-12 hover:bg-gray-100 rounded-lg">
      {percent && <div className="text-12 font-medium text-gray-800">{percent}% 일치</div>}
      <div className="w-full flex items-center justify-between">
        <div className="grow flex items-center justify-center gap-x-10">
          <img className="shrink-0 rounded-full w-[50px] h-[50px]" src={item.img} />
          <div className="grow text-black flex flex-col items-start justify-center">
            <div className="text-16 font-semibold">{item.name}</div>
            <div className="text-13 font-medium w-40 truncate">{item.introduce}</div>
          </div>
        </div>
        <div className="shrink-0 flex flex-col gap-y-5 justify-center items-end text-12 text-gray-800">
          <div>방문수 {item.visit}</div>
          <div>마지막 수정일 {item.updated}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchUserResultContainer;
