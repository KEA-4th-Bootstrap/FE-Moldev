import Logo from '../../assets/logo/logo_text.svg?react';
import FillButton from '../common/FillButton';
import StrokeButton from '../common/StrokdButton';
import JoinContainer from '../joinContainer/JoinContainer';
import useLogin from '../../hooks/login/useLogin';

const LoginContainer = ({
  isShow,
  setIsShow,
}: {
  isShow: boolean;
  setIsShow: (item: boolean) => void;
}) => {
  const { type, setType, form, onChange, onSubmit } = useLogin(isShow);
  const { email, password } = form;

  return (
    <div
      className={`w-1/3 min-w-[600px] flex flex-col items-center justify-center px-60 py-40 bg-white rounded-modal shadow-md gap-y-32 ${isShow ? 'translate-y-0' : 'translate-y-[200%]'} transition-all`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {type === 'login' ? (
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col items-center justify-center gap-y-32"
        >
          <Logo className="h-full w-auto" />
          <div className="w-full flex flex-col items-center justify-center gap-y-16">
            <div className="w-full flex flex-col items-start justify-center gap-y-8">
              <div className="font-semibold text-14">로그인</div>
              <input
                className="w-full border-none outline-none py-14 px-16 rounded-modal bg-sub-50"
                type="text"
                placeholder="이메일 또는 블로그 아이디를 입력해주세요."
                onChange={onChange}
                value={email}
                name="email"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-y-8">
              <div className="font-semibold text-14">비밀번호</div>
              <input
                className="w-full border-none outline-none py-14 px-16 rounded-modal bg-sub-50"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={onChange}
                value={password}
                name="password"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-y-10">
            <FillButton type="submit" text="로그인" isAble={true} />
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
        </form>
      ) : type === 'join' ? (
        <JoinContainer setIsShow={setIsShow} />
      ) : (
        <div>비밀번호 찾기</div>
      )}
    </div>
  );
};

export default LoginContainer;
