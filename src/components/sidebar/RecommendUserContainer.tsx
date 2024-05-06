import SearchUserResultContainer from '../searchContainer/SearchUserResultContainer';
import useRecommendUser from '../../hooks/sidebar/recommend/useRecommendUser';

const RecommendUserContainer = ({ memberName }: { memberName: string }) => {
  const { recommendList } = useRecommendUser();

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-y-30">
      <div className="w-full flex flex-col items-start justify-center text-24 font-semibold pt-62">
        <div>{memberName}님이</div>
        <div>가보면 좋을 섬을 찾아봤어요.</div>
      </div>
      <div className="w-full flex-col items-center justify-start">
        {recommendList.map((item, index) => (
          <SearchUserResultContainer key={index} item={item.user} percent={item.percentage} />
        ))}
      </div>
    </div>
  );
};

export default RecommendUserContainer;
