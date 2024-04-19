import { ReactNode } from 'react';

const BlurBackgroundContainer = ({
  isShow,
  onClick,
  children,
}: {
  isShow: boolean;
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <div
      className={`w-full min-h-screen h-full flex items-center justify-center fixed z-10 bg-white/10 backdrop-blur-sm ${isShow ? 'flex' : 'hidden'}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BlurBackgroundContainer;
