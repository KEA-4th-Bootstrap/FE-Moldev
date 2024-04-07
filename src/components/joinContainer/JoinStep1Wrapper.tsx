import React, { useState } from 'react';
import FillButton from '../common/FillButton';

const JoinStep1Wrapper = ({ onClickNext }: { onClickNext: () => void }) => {
  const [email, setEmail] = useState('');
  const [authNumber, setAuthNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const checkIsAbleToAuth = () => {
    return email.length > 0;
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-start gap-y-32 py-32 px-8">
        <div className="w-full flex flex-col items-center justify-start gap-y-6">
          <div className="text-14 font-semibold pb-10 w-full flex items-center justify-start">
            이메일
          </div>
          <div className="w-full flex items-center justify-center">
            <input
              className="grow flex items-center justify-start p-8 outline-none border-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="flex items-center justify-center rounded-button bg-main py-8 px-14 text-14 text-white border-none outline-none active:border-none active:outline-none focus:border-none focus:outline-none hover:border-none hover:outline-none disabled:bg-gray-100 transition-all duration-200 ease-in-out"
              disabled={!checkIsAbleToAuth()}
            >
              인증번호 전송
            </button>
          </div>
          <div className="w-full h-px bg-gray-200" />
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-y-6">
          <div className="text-14 font-semibold pb-10 w-full flex items-center justify-start">
            인증번호
          </div>
          <div className="w-full flex items-center justify-center">
            <input
              className="grow flex items-center justify-start p-8 outline-none border-none"
              value={authNumber}
              onChange={(e) => setAuthNumber(e.target.value)}
            />
            <button className="flex items-center justify-center rounded-button bg-main py-8 px-14 text-14 text-white border-none outline-none active:border-none active:outline-none focus:border-none focus:outline-none hover:border-none hover:outline-none">
              인증번호 확인
            </button>
          </div>
          <div className="w-full h-px bg-gray-200" />
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-y-6">
          <div className="text-14 font-semibold pb-10 w-full flex items-center justify-start">
            비밀번호
          </div>
          <input
            className="w-full flex items-center justify-start p-8 outline-none border-none "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="w-full h-px bg-gray-200" />
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-y-6">
          <div className="text-14 font-semibold pb-10 w-full flex items-center justify-start">
            비밀번호 확인
          </div>
          <input
            className="w-full flex items-center justify-start p-8 outline-none border-none"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          <div className="w-full h-px bg-gray-200" />
        </div>
      </div>
      <FillButton text="다음" onClick={onClickNext} isAble={true} />
    </>
  );
};

export default JoinStep1Wrapper;
