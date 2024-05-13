import { ReactNode, useState } from 'react';

const RightToggle = ({
  icon,
  text,
  isItemHover,
  onClick,
  canClick,
}: {
  icon: ReactNode;
  text: string;
  isItemHover: boolean;
  onClick: () => void;
  canClick: boolean;
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`flex flex-nowrap items-center justify-start gap-x-10 pr-14 pl-11 py-9 rounded-full shadow-main/30 shadow-sm bg-main/20 ${canClick ? 'cursor-pointer' : 'cursor-default'} overflow-hidden h-[42px] ${isHover || isItemHover ? 'animate-grow' : 'w-[46px]'} transition-all duration-100 ease-in-out`}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="shrink-0 w-[24px] h-[24px]">{icon}</div>
      <div className={`shrink-0 text-16 font-medium text-main`}>{text}</div>
    </div>
  );
};

export default RightToggle;
