import FillButton from '../common/FillButton';
import useJoin from '../../hooks/join/useJoin';

const JoinStep2Wrapper = ({
  onClickNext,
  hookReturn,
}: {
  onClickNext: () => void;
  hookReturn: ReturnType<typeof useJoin>;
}) => {
  const { form, checkName, onChange, setCheckName, checkNameIsAbleToConfirm } = hookReturn;
  const { moldevId, userName, islandName } = form;

  return (
    <>
      <div className="w-full flex flex-col items-center justify-start gap-y-32 py-32 px-8">
        <div className="w-full flex flex-col items-center justify-start gap-y-6 relative">
          <div className="text-14 font-semibold pb-10 w-full flex items-center justify-start">
            몰디브 아이디
          </div>
          <div className="w-full flex items-center justify-center">
            <input
              className="grow flex items-center justify-start p-8 outline-none border-none"
              value={moldevId}
              onChange={onChange}
              name="moldevId"
            />
            <button
              type="button"
              className="flex items-center justify-center rounded-button bg-main py-8 px-14 text-14 text-white border-none outline-none active:border-none active:outline-none focus:border-none focus:outline-none hover:border-none hover:outline-none disabled:bg-gray-100 transition-all duration-200 ease-in-out"
              disabled={!checkNameIsAbleToConfirm()}
              onClick={() => setCheckName(true)}
            >
              중복 확인
            </button>
          </div>
          <div className="w-full h-px bg-gray-200" />
          <div
            className={`absolute -bottom-5 left-0 text-12 text-main ${checkName ? 'block' : 'hidden'}`}
          >
            몰디브 아이디 중복 확인이 완료되었습니다.
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-y-6">
          <div className="text-14 font-semibold pb-10 w-full flex items-center justify-start">
            유저명
          </div>
          <input
            className="w-full flex items-center justify-start p-8 outline-none border-none "
            value={userName}
            onChange={onChange}
            name="userName"
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
            onChange={onChange}
            name="islandName"
          />
          <div className="w-full h-px bg-gray-200" />
        </div>
      </div>
      <FillButton type="button" text="다음" onClick={onClickNext} isAble={true} />
    </>
  );
};

export default JoinStep2Wrapper;
