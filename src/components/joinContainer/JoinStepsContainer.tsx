import Logo from '../../assets/logo/logo_text.svg?react';
import JoinStep1Wrapper from './JoinStep1Wrapper';
import JoinStep2Wrapper from './JoinStep2Wrapper';
import JoinStep3Wrapper from './JoinStep3Wrapper';
import JoinCompleteContainer from './JoinCompleteContainer';
import useSteps from '../../hooks/join/useSteps';
import useJoin from '../../hooks/join/useJoin';

const JoinStepsContainer = ({
  setIsShow,
  isMarketingSelected,
}: {
  setIsShow: (item: boolean) => void;
  isMarketingSelected: boolean;
}) => {
  const { step, next } = useSteps();
  const hookReturn = useJoin(isMarketingSelected);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {hookReturn.isComplete ? (
        <JoinCompleteContainer userName="부트스트랩" islandName="몰디브" setIsShow={setIsShow} />
      ) : (
        <>
          <div className="w-full flex items-center justify-between">
            <Logo className="h-full w-auto" />
            <div className="flex items-center justify-end gap-x-10">
              <div
                className={`rounded-full flex items-center justify-center px-10 py-5 text-14 font-bold ${step === 1 ? 'bg-main' : 'bg-sub-100'}`}
              >
                1
              </div>
              <div
                className={`rounded-full flex items-center justify-center px-10 py-5 text-14 font-bold ${step === 2 ? 'bg-main' : 'bg-sub-100'}`}
              >
                2
              </div>
              <div
                className={`rounded-full flex items-center justify-center px-10 py-5 text-14 font-bold ${step === 3 ? 'bg-main' : 'bg-sub-100'}`}
              >
                3
              </div>
            </div>
          </div>
          <form
            onSubmit={hookReturn.onSubmit}
            className="w-full flex flex-col justify-start items-center py-24"
          >
            {step === 1 && <JoinStep1Wrapper onClickNext={next} hookReturn={hookReturn} />}
            {step === 2 && <JoinStep2Wrapper onClickNext={next} hookReturn={hookReturn} />}
            {step === 3 && <JoinStep3Wrapper hookReturn={hookReturn} />}
          </form>
        </>
      )}
    </div>
  );
};

export default JoinStepsContainer;
