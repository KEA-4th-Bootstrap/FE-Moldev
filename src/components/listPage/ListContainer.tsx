import { CategoryType, categoryEngToKor } from '../../data/type';
import ListWrapper from './ListWrapper';

const ListContainer = ({ category }: { category: CategoryType }) => {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center justify-center py-70">
      <div
        className="shrink-0 pb-24 px-[150px] flex flex-col items-center justify-center border-b-2 border-white"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text-white font-bold text-36">{categoryEngToKor[category]}</div>
      </div>
      <ListWrapper category={category} />
    </div>
  );
};

export default ListContainer;
