import { ArticleListItemType } from '../../data/type';
import useRouteNavigate from '../../hooks/common/useRouteNavigate';

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
  const { onClick } = useRouteNavigate(`/island/${moldevId}/article/${item.id}`);

  return (
    <div
      style={{ width: width, height: height }}
      className={`rounded-md flex flex-col items-start justify-center hover:border-white hover:border-4 shadow-md transition-all duration-100 ease-in-out cursor-pointer overflow-hidden`}
      onClick={onClick}
    >
      <div className="shrink w-full grow rounded-t-md overflow-hidden">
        <img className="shrink w-full h-full object-cover" src={item.img} alt={item.title} />
      </div>
      <div className="w-full flex flex-col items-start justify-between bg-white px-16 py-13">
        <div className="shrink-0 w-full font-bold text-16">{item.title}</div>
        <div className={`shrink-0 w-full grow text-14 line-clamp-1`}>{item.content}</div>
        <div className="shrink-0 w-full flex items-center justify-end text-12 text-gray-800">{`조회수 ${item.visit}회 | ${item.createdAt}`}</div>
      </div>
    </div>
  );
};

export default ListItemContainer;
