import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const useBackground = (url: string) => {
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
        navigate(url);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [childIsShow, navigate, url]);

  return { isShow, childIsShow, setChildIsShow };
};

export default useBackground;
