import BlurBackgroundContainer from '../components/common/BlurBackgroundContainer';
import ListContainer from '../components/listPage/ListContainer';
import useCategoryList from '../hooks/list/useCategoryList';

const ListPage = () => {
  const { isShow, childIsShow, onBackgroundClick, category } = useCategoryList();

  return (
    <BlurBackgroundContainer isShow={isShow} onClick={onBackgroundClick}>
      <ListContainer
        isShow={childIsShow}
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
