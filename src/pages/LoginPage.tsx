import BlurBackgroundContainer from '../components/common/BlurBackgroundContainer';
import LoginContainer from '../components/loginContainer/LoginContainer';
import useBackground from '../hooks/common/useBackground';

const LoginPage = () => {
  const { isShow, childIsShow, setChildIsShow, onBackgroundClick } = useBackground('/');

  return (
    <BlurBackgroundContainer isShow={isShow} onClick={onBackgroundClick}>
      <LoginContainer isShow={childIsShow} setIsShow={setChildIsShow} />
    </BlurBackgroundContainer>
  );
};

export default LoginPage;
