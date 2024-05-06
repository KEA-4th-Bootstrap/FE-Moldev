import { useParams } from 'react-router';
import useBackground from '../common/useBackground';

const useCategoryList = () => {
  const { moldevId, category } = useParams();
  const { isShow, childIsShow, setChildIsShow } = useBackground(`/island/${moldevId}`);

  return { isShow, childIsShow, setChildIsShow, category };
};

export default useCategoryList;
