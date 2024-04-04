import React, { useState } from 'react';
import Logo from '../../assets/logo/logo_text.svg?react';
import JoinStep1Wrapper from './JoinStep1Wrapper';
import JoinStep2Wrapper from './JoinStep2Wrapper';
import JoinStep3Wrapper from './JoinStep3Wrapper';
import JoinCompleteContainer from './JoinCompleteContainer';

const JoinStepsContainer = ({
  isComplete,
  setIsComplete,
  setIsShow,
}: {
  isComplete: boolean;
  setIsComplete: (complete: boolean) => void;
  setIsShow: (item: boolean) => void;
}) => {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {isComplete ? (
        <JoinCompleteContainer
          userName="복복두더지"
          islandName="두더지도집이있나"
          setIsShow={setIsShow}
        />
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
          <div className="w-full flex flex-col justify-start items-center py-24">
            {step === 1 && <JoinStep1Wrapper onClickNext={() => setStep(2)} />}
            {step === 2 && <JoinStep2Wrapper onClickNext={() => setStep(3)} />}
            {step === 3 && (
              <JoinStep3Wrapper userName="복복두더지" onClickNext={() => setIsComplete(true)} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default JoinStepsContainer;
