import { useEffect, useState } from 'react';
import BlurBackgroundContainer from '../components/common/BlurBackgroundContainer';
import LoginContainer from '../components/loginContainer/LoginContainer';
import { useNavigate } from 'react-router';

const LoginPage = () => {
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

  useEffect(() => {
    if (!childIsShow) {
      const timer = setTimeout(() => {
        navigation(-1);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [childIsShow, navigation]);
  return (
    <BlurBackgroundContainer isShow={isShow} onClick={() => setChildIsShow(false)}>
      <LoginContainer isShow={childIsShow} setIsShow={setChildIsShow} />
    </BlurBackgroundContainer>
  );
};

export default LoginPage;
