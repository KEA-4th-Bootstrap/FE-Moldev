import BlurBackgroundContainer from '../components/common/BlurBackgroundContainer';
import LoginContainer from '../components/loginContainer/LoginContainer';
import useLoginPage from '../hooks/login/useLoginPage';

const LoginPage = () => {
  const { isShow, childIsShow, setChildIsShow } = useLoginPage();

  return (
    <BlurBackgroundContainer isShow={isShow} onClick={() => setChildIsShow(false)}>
      <LoginContainer isShow={childIsShow} setIsShow={setChildIsShow} />
    </BlurBackgroundContainer>
  );
};

export default LoginPage;
