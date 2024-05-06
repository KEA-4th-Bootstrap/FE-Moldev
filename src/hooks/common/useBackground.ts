import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const useBackground = (url: string | -1) => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [childIsShow, setChildIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    const timer = setTimeout(() => {
      setChildIsShow(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!childIsShow) {
      const timer = setTimeout(() => {
        url === -1 ? navigate(-1) : navigate(url);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [childIsShow, navigate, url]);

  const onBackgroundClick = () => {
    setChildIsShow(false);
  };

  return { isShow, childIsShow, setChildIsShow, onBackgroundClick };
};

export default useBackground;
