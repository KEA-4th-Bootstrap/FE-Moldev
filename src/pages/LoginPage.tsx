import BlurBackgroundContainer from '../components/common/BlurBackgroundContainer';
import LoginContainer from '../components/loginContainer/LoginContainer';
import useBackground from '../hooks/common/useBackground';

const LoginPage = () => {
  const { isShow, childIsShow, setChildIsShow } = useBackground('/');

  return (
    <BlurBackgroundContainer isShow={isShow} onClick={() => setChildIsShow(false)}>
      <LoginContainer isShow={childIsShow} setIsShow={setChildIsShow} />
    </BlurBackgroundContainer>
  );
};

export default LoginPage;
