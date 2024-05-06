import Edit from '../../assets/icons/icon_edit.svg?react';
import useJoin from '../../hooks/join/useJoin';

const JoinStep3Wrapper = ({ hookReturn }: { hookReturn: ReturnType<typeof useJoin> }) => {
  const { form, inputRef, onUpload, onUploadImageButtonClick } = hookReturn;
  const { userName, profileImage } = form;

  return (
    <div className="w-full flex flex-col items-center justify-start gap-y-40 py-16 px-8">
      <div className="w-full flex flex-col items-start justify-center font-semibold text-20">
        <div>{userName}님,</div>
        <div>프로필 사진을 등록해보세요.</div>
      </div>
      <div className="flex items-center justify-center relative">
        <img
          className="w-[200px] h-[200px] object-cover rounded-full"
          src={profileImage as string}
          alt="empty"
        />
        <Edit
          className="absolute bottom-1 right-1 cursor-pointer"
          onClick={onUploadImageButtonClick}
        />
        <input ref={inputRef} className="hidden" type="file" accept="image/*" onChange={onUpload} />
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="text-18 font-medium hover:underline underline-offset-4 cursor-pointer">
          나중에 할래요
        </div>
        <button
          type="submit"
          className="flex items-center justify-center rounded-button bg-main py-8 px-20 font-semibold text-18 text-white border-none outline-none active:border-none active:outline-none focus:border-none focus:outline-none hover:border-none hover:outline-none"
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default JoinStep3Wrapper;
