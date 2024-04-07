import React from 'react';
import Selected from '../../assets/icons/icon_selected.svg?react';
import Unselected from '../../assets/icons/icon_unselected.svg?react';

const ChoiceContainer = ({
  text,
  isSelected,
  onClick,
  isBold,
}: {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  isBold: boolean;
}) => {
  return (
    <div className="w-full flex items-center justify-start gap-x-16">
      <div className="h-[30px] w-[30px]" onClick={onClick}>
        {isSelected ? (
          <Selected className="w-full h-full" />
        ) : (
          <Unselected className="w-full h-full" />
        )}
      </div>
      <div className={`grow text-20 ${isBold ? 'font-semibold' : 'font-normal'}`}>{text}</div>
    </div>
  );
};

export default ChoiceContainer;
