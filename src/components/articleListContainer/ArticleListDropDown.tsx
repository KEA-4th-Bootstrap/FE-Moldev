import React from 'react';
import { OrderType } from '../../data/type';
import Down from '../../assets/icons/icon_arrow_down.svg?react';

const ArticleListDropDown = ({
  isOpen,
  setIsOpen,
  current,
  setCurrent,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  current: OrderType;
  setCurrent: (current: OrderType) => void;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="flex items-center justify-center pl-8 py-13 cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{current === 'new' ? '최신순' : '조회순'}</div>
        <Down
          className={`transition-all ease-in-out duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      <div
        className={`absolute right-0 -bottom-20 gap-y-12 flex flex-col items-center justify-center ${!isOpen && 'hidden'} px-30 py-12 rounded-lg shadow-lg bg-white`}
      >
        <div
          className={`${current === 'new' ? 'text-gray-800' : 'text-gray-300'} font-medium cursor-pointer`}
          onClick={() => {
            setCurrent('new');
            setIsOpen(false);
          }}
        >
          최신순
        </div>
        <div
          className={`${current === 'visit' ? 'text-gray-800' : 'text-gray-300'} font-medium cursor-pointer`}
          onClick={() => {
            setCurrent('visit');
            setIsOpen(false);
          }}
        >
          조회순
        </div>
      </div>
    </div>
  );
};

export default ArticleListDropDown;
