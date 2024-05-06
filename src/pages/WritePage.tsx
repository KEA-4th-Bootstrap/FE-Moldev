import BlurBackgroundContainer from '../components/common/BlurBackgroundContainer';
import WriteContainer from '../components/writePage/WriteContainer';
import useBackground from '../hooks/common/useBackground';

const WritePage = () => {
  const { isShow, childIsShow, onBackgroundClick } = useBackground(-1);

  return (
    <BlurBackgroundContainer isShow={isShow} onClick={() => {}}>
      <WriteContainer isShow={childIsShow} onClose={onBackgroundClick} />
    </BlurBackgroundContainer>
  );
};

export default WritePage;
