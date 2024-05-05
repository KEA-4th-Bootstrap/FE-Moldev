import { useNavigate } from 'react-router';
import { ArticleListItemType } from '../../data/type';

const ListItemContainer = ({
  item,
  moldevId,
  width,
  height,
}: {
  item: ArticleListItemType;
  moldevId: string;
  width: number;
  height: number;
}) => {
  const navigation = useNavigate();

  return (
    <div
      style={{ width: width, height: height }}
      className={`rounded-md flex flex-col items-start justify-center hover:border-white hover:border-4`}
      onClick={(e) => {
        e.stopPropagation();
        navigation(`/island/${moldevId}/article/${item.id}`);
      }}
    >
      <img className="w-full h-2/3 object-cover rounded-t-md" src={item.img} alt={item.title} />
      <div className="w-full h-1/3 flex flex-col items-start justify-center bg-white/50 rounded-b-md px-16 py-13">
        <div className="font-bold text-16">{item.title}</div>
        <div className="text-14 line-clamp-2">{item.content}</div>
        <div className="w-full flex items-center justify-end text-12 text-gray-800">{`조회수 ${item.visit}회 | ${item.createdAt}`}</div>
      </div>
    </div>
  );
};

export default ListItemContainer;
