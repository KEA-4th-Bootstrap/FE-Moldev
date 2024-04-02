import React from 'react';
import Pin from '../../assets/icons/icon_pin.svg?react';
import { ArticleListItemType } from '../../data/type';

const ArticleListItemContainer = ({ item }: { item: ArticleListItemType }) => {
  return (
    <div className="flex flex-col w-full items-start justify-center p-12 hover:bg-gray-100 rounded-lg">
      <div className="flex items-center justify-start gap-x-4">
        <Pin className="w-[13px] h-[13px]" />
        <div className="text-12 font-normal">{item.category}</div>
      </div>
      <div className="w-full flex items-center justify-center gap-x-10">
        <div className="grow h-full flex flex-col items-start justify-center text-gray-800">
          <div className="text-18 font-medium text-black">{item.title}</div>
          <div className="text-10 font-medium">{item.content}</div>
          <div className="text-12 font-normal">{`조회수 ${item.visit} | ${item.createdAt}`}</div>
        </div>
        <img className="w-[92px] h-[92px] rounded-xl" src={item.img} alt={item.title} />
      </div>
    </div>
  );
};

export default ArticleListItemContainer;
