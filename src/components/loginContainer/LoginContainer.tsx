import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo/logo_text.svg?react';
import FillButton from '../common/FillButton';
import StrokeButton from '../common/StrokdButton';
import JoinContainer from '../joinContainer/JoinContainer';

const LoginContainer = ({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: (item: boolean) => void;
}) => {
  const [type, setType] = useState<'login' | 'join' | 'password'>('login');

  useEffect(() => {
    if (isShow) {
      setType('login');
    }
  }, [isShow]);

  return (
    <div
      className={`w-1/3 min-w-[600px] flex flex-col items-center justify-center px-60 py-40 bg-white rounded-modal shadow-md gap-y-32 ${isShow ? 'translate-y-0' : 'translate-y-[200%]'} transition-all`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {type === 'login' ? (
        <>
          <Logo className="h-full w-auto" />
          <div className="w-full flex flex-col items-center justify-center gap-y-16">
            <div className="w-full flex flex-col items-start justify-center gap-y-8">
              <div className="font-semibold text-14">로그인</div>
              <input
                className="w-full border-none outline-none py-14 px-16 rounded-modal bg-sub-50"
                type="text"
                placeholder="이메일 또는 블로그 아이디를 입력해주세요."
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-y-8">
              <div className="font-semibold text-14">비밀번호</div>
              <input
                className="w-full border-none outline-none py-14 px-16 rounded-modal bg-sub-50"
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-y-10">
            <FillButton text="로그인" isAble={true} onClick={() => {}} />
            <StrokeButton
              text="회원가입"
              isAble={true}
              onClick={() => {
                setType('join');
              }}
            />
            <div className="py-10 hover:underline underline-offset-4 cursor-pointer">
              비밀번호 찾기
            </div>
          </div>
        </>
      ) : type === 'join' ? (
        <JoinContainer setIsShow={setIsShow} />
      ) : (
        <div>비밀번호 찾기</div>
      )}
    </div>
  );
};

export default LoginContainer;
