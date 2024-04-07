import React, { useState } from 'react';
import FillButton from '../common/FillButton';

const JoinStep2Wrapper = ({ onClickNext }: { onClickNext: () => void }) => {
  const [molDevId, setMolDevId] = useState('');
  const [userName, setUserName] = useState('');
  const [islandName, setIslandName] = useState('');

  return (
    <>
      <div className="w-full flex flex-col items-center justify-start gap-y-32 py-32 px-8">
        <div className="w-full flex flex-col items-center justify-start gap-y-6">
          <div className="text-14 font-semibold pb-10 w-full flex items-center justify-start">
            몰디브 아이디
          </div>
          <div className="w-full flex items-center justify-center">
            <input
              className="grow flex items-center justify-start p-8 outline-none border-none"
              value={molDevId}
              onChange={(e) => setMolDevId(e.target.value)}
            />
            <button
              className="flex items-center justify-center rounded-button bg-main py-8 px-14 text-14 text-white border-none outline-none active:border-none active:outline-none focus:border-none focus:outline-none hover:border-none hover:outline-none disabled:bg-gray-100 transition-all duration-200 ease-in-out"
              disabled={!(molDevId.length > 0)}
            >
              중복 확인
            </button>
          </div>
          <div className="w-full h-px bg-gray-200" />
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-y-6">
          <div className="text-14 font-semibold pb-10 w-full flex items-center justify-start">
            유저명
          </div>
          <input
            className="w-full flex items-center justify-start p-8 outline-none border-none "
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="w-full h-px bg-gray-200" />
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-y-6">
          <div className="text-14 font-semibold pb-10 w-full flex items-center justify-start">
            섬 이름
          </div>
          <input
            className="w-full flex items-center justify-start p-8 outline-none border-none"
            value={islandName}
            onChange={(e) => setIslandName(e.target.value)}
          />
          <div className="w-full h-px bg-gray-200" />
        </div>
      </div>
      <FillButton text="다음" onClick={onClickNext} isAble={true} />
    </>
  );
};

export default JoinStep2Wrapper;
