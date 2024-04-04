import React from 'react';
import Logo from '../../assets/logo/logo_text.svg?react';
import Lottie from 'react-lottie-player';
import lottieJson from '../../assets/lottie/join_complete.json';

const JoinCompleteContainer = ({
  userName,
  islandName,
  setIsShow,
}: {
  userName: string;
  islandName: string;
  setIsShow: (item: boolean) => void;
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-32">
      <div className="w-full flex items-center justify-start">
        <Logo />
      </div>
      <div className="w-full flex flex-col items-start justify-start text-20 font-semibold">
        <div>{userName}님,</div>
        <div>{islandName} 섬에 오신 것을 환영합니다.</div>
      </div>
      <div className="w-full px-100 h-auto flex items-center justify-center">
        <Lottie className="w-full h-auto" loop animationData={lottieJson} play />
      </div>
      <div className="w-full flex items-center justify-end">
        <button
          onClick={() => setIsShow(false)}
          className="flex items-center justify-center rounded-button bg-main py-8 px-20 font-semibold text-18 text-white border-none outline-none active:border-none active:outline-none focus:border-none focus:outline-none hover:border-none hover:outline-none"
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default JoinCompleteContainer;
