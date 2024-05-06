import { useParams } from 'react-router';
import useBackground from '../common/useBackground';

const useCategoryList = () => {
  const { moldevId, category } = useParams();
  const { isShow, childIsShow, onBackgroundClick } = useBackground(`/island/${moldevId}`);

  return { isShow, childIsShow, onBackgroundClick, category };
};

export default useCategoryList;
