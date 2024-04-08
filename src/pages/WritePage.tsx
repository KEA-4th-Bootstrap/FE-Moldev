import { useEffect, useState } from 'react';
import BlurBackgroundContainer from '../components/common/BlurBackgroundContainer';
import { useNavigate } from 'react-router';
// import WriteContainer from '../components/writePage/WriteContainer';
import WriteContainer from '../components/writePage/WriteContainer';

const WritePage = () => {
  const navigation = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [childIsShow, setChildIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    const timer = setTimeout(() => {
      setChildIsShow(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleBackgroundClick = () => {
    if (!childIsShow) return;

    setChildIsShow(false);

    const timer = setTimeout(() => {
      navigation('/');
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <BlurBackgroundContainer isShow={isShow} onClick={() => {}}>
      <WriteContainer onClose={handleBackgroundClick} />
    </BlurBackgroundContainer>
  );
};

export default WritePage;
