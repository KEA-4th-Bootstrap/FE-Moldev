import { useEffect, useState } from 'react';
import BlurBackgroundContainer from '../components/common/BlurBackgroundContainer';
import { useNavigate, useParams } from 'react-router';
import ListContainer from '../components/listPage/ListContainer';

const ListPage = () => {
  const { moldevId, category } = useParams();
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
      navigation(`/island/${moldevId}`);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <BlurBackgroundContainer isShow={isShow} onClick={handleBackgroundClick}>
      <ListContainer
        category={
          category === 'activity'
            ? 'activity'
            : category === 'project'
              ? 'project'
              : category === 'awards'
                ? 'awards'
                : category === 'trouble'
                  ? 'trouble'
                  : 'activity'
        }
      />
    </BlurBackgroundContainer>
  );
};

export default ListPage;
