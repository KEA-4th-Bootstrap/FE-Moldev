import { Canvas } from '@react-three/fiber';
import { MainIslandModel } from './MainIslandModel';
import { OrbitControls } from '@react-three/drei';
import LineHeaderItem from '../mainPage/LineHeaderItem';
import UserItemContainer from '../mainPage/UserItemContainer';
import useMainPage from '../../hooks/main/useMainPage';
import ArticleItemContainer from '../mainPage/ArticleItemContainer';

const MainContainer = () => {
  const {
    articleList,
    userList,
    selected,
    onClickArticle,
    onClickIsland,
    lightIntensity,
    positions,
    colors,
  } = useMainPage();
  return (
    <div className="grow min-h-screen flex flex-col items-center justify-start bg-gradient object-cover text-black gap-y-50 py-60">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="w-[300px] h-[200px]">
          <Canvas shadows camera={{ fov: 75, near: 0.1, far: 500, position: [0, 2, 5] }}>
            <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
            <ambientLight position={[0, 0, 0]} intensity={2} color="#FFFFFF" />
            <directionalLight
              position={[positions[0][0], positions[0][1], positions[0][2]]}
              intensity={lightIntensity}
              color={colors[0]}
            />
            <directionalLight
              position={[positions[1][0], positions[1][1], positions[1][2]]}
              intensity={lightIntensity}
              color={colors[1]}
            />
            <directionalLight
              position={[positions[2][0], positions[2][1], positions[2][2]]}
              intensity={lightIntensity}
              color={colors[2]}
            />
            <directionalLight
              position={[positions[3][0], positions[3][1], positions[3][2]]}
              intensity={lightIntensity}
              color={colors[3]}
            />
            <directionalLight
              position={[positions[4][0], positions[4][1], positions[4][2]]}
              intensity={lightIntensity}
              color={colors[4]}
            />
            <directionalLight
              position={[positions[5][0], positions[5][1], positions[5][2]]}
              intensity={lightIntensity}
              color={colors[5]}
            />
            <directionalLight
              position={[positions[6][0], positions[6][1], positions[6][2]]}
              intensity={lightIntensity}
              color={colors[6]}
            />
            <directionalLight
              position={[positions[7][0], positions[7][1], positions[7][2]]}
              intensity={lightIntensity}
              color={colors[7]}
            />
            <MainIslandModel scale={0.16} />
          </Canvas>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-bold text-36">
          <div>개발자들을 위한 섬,</div>
          <div>몰데브에 오신 것을 환영합니다.</div>
        </div>
      </div>
      <div className="w-full grow flex flex-col items-start justify-start gap-y-20">
        <div className="w-full flex items-center justify-start px-16 border-b border-gray-100">
          <LineHeaderItem
            text="트렌딩 게시글"
            isClicked={selected === 'article'}
            onClick={onClickArticle}
          />
          <LineHeaderItem
            text="트렌딩 섬"
            isClicked={selected === 'island'}
            onClick={onClickIsland}
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-18 px-16">
          {selected === 'article'
            ? articleList.map((item, index) => <ArticleItemContainer key={index} item={item} />)
            : userList.map((item, index) => <UserItemContainer key={index} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
