import { ReactNode, useState } from 'react';

const LeftToggle = ({
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
      className={`flex flex-nowrap items-center justify-start gap-x-10 pl-11 pr-14 py-9 rounded-full bg-dark-300/70 ${canClick ? 'cursor-pointer' : 'cursor-default'} overflow-hidden h-[42px] ${isHover || isItemHover ? 'animate-grow' : 'w-[46px]'} transition-all duration-100 ease-in-out`}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="shrink-0 w-[24px] h-[24px]">{icon}</div>
      <div className={`shrink-0 text-16 font-medium text-white`}>{text}</div>
    </div>
  );
};

export default LeftToggle;
