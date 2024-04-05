import React from 'react';

const StrokeButton = ({
  text,
  isAble,
  onClick,
}: {
  text: string;
  isAble: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="w-full bg-white border border-main text-main text-18 rounded-button py-16 px-32 outline-none hover:text-white hover:bg-dark-300 hover:border-dark-300 transition-colors active:outline-none focus:outline-none"
      disabled={!isAble}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default StrokeButton;
