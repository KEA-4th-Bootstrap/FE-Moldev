import { useNavigate } from 'react-router';

const useRouteNavigate = (url: string) => {
  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    navigate(url);
  };

  return { onClick };
};

export default useRouteNavigate;
