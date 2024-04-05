import React, { useEffect, useState } from 'react';
import ChoiceContainer from '../loginContainer/ChoiceContainer';
import FillButton from '../common/FillButton';
import JoinStepsContainer from './JoinStepsContainer';

const JoinContainer = ({ setIsShow }: { setIsShow: (item: boolean) => void }) => {
  const [isTotalSelected, setIsTotalSelected] = useState(false);
  const [isServiceSelected, setIsServiceSelected] = useState(false);
  const [isPersonalSelected, setIsPersonalSelected] = useState(false);
  const [isThirdSelected, setIsThirdSelected] = useState(false);
  const [isMarketingSelected, setIsMarketingSelected] = useState(false);
  const [isStepType, setIsStepType] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isServiceSelected && isPersonalSelected && isThirdSelected && isMarketingSelected) {
      setIsTotalSelected(true);
    } else {
      setIsTotalSelected(false);
    }
  }, [isServiceSelected, isPersonalSelected, isThirdSelected, isMarketingSelected]);

  return (
    <>
      {isStepType ? (
        <JoinStepsContainer
          isComplete={isComplete}
          setIsComplete={setIsComplete}
          setIsShow={setIsShow}
        />
      ) : (
        <div className="w-full flex flex-col items-center justify-center gap-y-30">
          <div className="font-bold text-28">약관동의</div>
          <div className="font-medium text-20">몰디브 서비스 이용을 위해 약관에 동의해주세요.</div>
          <div className="w-full flex flex-col justify-start items-center gap-y-12">
            <ChoiceContainer
              text="전체 동의"
              isSelected={isTotalSelected}
              onClick={() => {
                if (isTotalSelected) {
                  setIsTotalSelected(false);
                  setIsServiceSelected(false);
                  setIsPersonalSelected(false);
                  setIsThirdSelected(false);
                  setIsMarketingSelected(false);
                } else {
                  setIsTotalSelected(true);
                  setIsServiceSelected(true);
                  setIsPersonalSelected(true);
                  setIsThirdSelected(true);
                  setIsMarketingSelected(true);
                }
              }}
              isBold={true}
            />
            <ChoiceContainer
              text="(필수) 서비스 이용약관 동의"
              isSelected={isServiceSelected}
              onClick={() => {
                setIsServiceSelected(!isServiceSelected);
              }}
              isBold={false}
            />
            <ChoiceContainer
              text="(필수) 개인정보 수집 및 이용 동의"
              isSelected={isPersonalSelected}
              onClick={() => {
                setIsPersonalSelected(!isPersonalSelected);
              }}
              isBold={false}
            />
            <ChoiceContainer
              text="(필수) 개인정보 제3자 제공 동의"
              isSelected={isThirdSelected}
              onClick={() => {
                setIsThirdSelected(!isThirdSelected);
              }}
              isBold={false}
            />
            <ChoiceContainer
              text="(선택) 마케팅 정보 수신 동의"
              isSelected={isMarketingSelected}
              onClick={() => {
                setIsMarketingSelected(!isMarketingSelected);
              }}
              isBold={false}
            />
          </div>
          <FillButton
            text="다음"
            onClick={() => {
              setIsStepType(true);
            }}
            isAble={isServiceSelected && isPersonalSelected && isThirdSelected}
          />
        </div>
      )}
    </>
  );
};

export default JoinContainer;
