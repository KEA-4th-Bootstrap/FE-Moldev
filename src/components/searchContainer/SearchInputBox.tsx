import React, { useState } from 'react';
import { SearchType } from '../../data/type';
import Search from '../../assets/icons/icon_search_box.svg?react';
import Down from '../../assets/icons/icon_arrow_down.svg?react';

const SearchInputBox = ({
  searchType,
  setSearchType,
}: {
  searchType: SearchType;
  setSearchType: (type: SearchType) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex items-center justify-center gap-x-10 relative">
      <div className="grow flex items-center justify-center rounded-full px-8 py-6 border border-gray-800 gap-x-10">
        <Search />
        <input className="grow border-none outline-none" type="text" />
      </div>
      <div className="flex items-center justify-center">
        <div
          className="flex items-center justify-center pl-8 py-13 cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>{searchType === 'article' ? '게시글' : '유저명'}</div>
          <Down
            className={`transition-all ease-in-out duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </div>
        <div
          className={`absolute right-0 -bottom-20 gap-y-12 flex flex-col items-center justify-center ${!isOpen && 'hidden'} px-24 py-12 rounded-lg shadow-lg bg-white`}
        >
          <div
            className={`${searchType === 'article' ? 'text-gray-800' : 'text-gray-300'} font-medium cursor-pointer`}
            onClick={() => {
              setSearchType('article');
              setIsOpen(false);
            }}
          >
            게시글
          </div>
          <div
            className={`${searchType === 'user' ? 'text-gray-800' : 'text-gray-300'} font-medium cursor-pointer`}
            onClick={() => {
              setSearchType('user');
              setIsOpen(false);
            }}
          >
            유저명
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInputBox;
