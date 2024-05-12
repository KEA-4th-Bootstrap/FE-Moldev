import { useParams } from 'react-router';
import IslandContainer from './IslandContainer';
import MainContainer from './MainContainer';

const IslandSpace = () => {
  const { moldevId } = useParams();

  return (
    <div className="w-2/3 min-h-screen">{moldevId ? <IslandContainer /> : <MainContainer />}</div>
  );
};

export default IslandSpace;
