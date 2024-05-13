import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { DoubleSide, Object3D } from 'three';
import { IslandModel } from './IslandModel';
import { TrophyModel } from './TrophyModel';
import { GunModel } from './GunModel';
import Visit from '../../assets/icons/icon_visit.svg?react';
import Project from '../../assets/icons/icon_project.svg?react';
import Trouble from '../../assets/icons/icon_trouble.svg?react';
import Activity from '../../assets/icons/icon_activity.svg?react';
import Prize from '../../assets/icons/icon_awards.svg?react';
import Write from '../../assets/icons/icon_write_main.svg?react';
import useIsland from '../../hooks/main/useIsland';
import LeftToggle from './LeftToggle';
import RightToggle from './RightToggle';

const IslandContainer = () => {
  const {
    // moldevId,
    lightIntensity,
    positions,
    colors,
    colorMap,
    projectHover,
    setProjectHover,
    prizeHover,
    setPrizeHover,
    activityHover,
    setActivityHover,
    troubleHover,
    setTroubleHover,
    ballRef,
    shadowLightRef,
    shadowLightRef2,
    onClickProject,
    onClickPrize,
    onClickTrouble,
    onClickActivity,
  } = useIsland();

  return (
    <div className="grow min-h-screen h-screen flex items-center justify-center relative">
      <Canvas shadows camera={{ fov: 75, near: 0.1, far: 500, position: [5, 15, 30] }}>
        <OrbitControls minDistance={15} maxDistance={45} />
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
        <directionalLight
          castShadow
          ref={shadowLightRef}
          target={new Object3D()}
          position={[0, 0, 10]} // 위치
          intensity={5} // 강도
          color={'#ffffff'} // 색상
        />
        <directionalLight
          castShadow
          ref={shadowLightRef2}
          target={new Object3D()}
          position={[20, 0, 10]} // 위치
          intensity={5} // 강도
          color={'#ffffff'} // 색상
        />
        <mesh position={[0, 0, 0]} receiveShadow castShadow>
          <sphereGeometry args={[60, 32, 32]} />
          <meshStandardMaterial color={'white'} side={DoubleSide} />
        </mesh>
        {/* 섬 모델 */}
        <IslandModel
          setHover={setProjectHover}
          isHover={projectHover}
          onClickProject={onClickProject}
        />
        <TrophyModel setHover={setPrizeHover} isHover={prizeHover} onClick={onClickPrize} />
        <GunModel setHover={setTroubleHover} isHover={troubleHover} onClick={onClickTrouble} />
        <mesh
          position={[-8, 0, 8]}
          receiveShadow
          castShadow
          ref={ballRef}
          scale={activityHover ? 1.2 : 1}
          onPointerEnter={() => setActivityHover(true)}
          onPointerOut={() => setActivityHover(false)}
          onClick={onClickActivity}
        >
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial map={colorMap} side={DoubleSide} />
        </mesh>
      </Canvas>
      <div className="absolute top-[30px] left-[24px]">
        <LeftToggle
          icon={<Visit />}
          text="28명 방문"
          isItemHover={false}
          onClick={() => {}}
          canClick={false}
        />
      </div>
      <div className="absolute bottom-[30px] left-[24px] flex flex-col items-start justify-center gap-y-16">
        <LeftToggle
          icon={<Project />}
          text="프로젝트"
          isItemHover={projectHover}
          onClick={() => {}}
          canClick={true}
        />
        <LeftToggle
          icon={<Trouble />}
          text="트러블슈팅"
          isItemHover={troubleHover}
          onClick={() => {}}
          canClick={true}
        />
        <LeftToggle
          icon={<Activity />}
          text="대외활동"
          isItemHover={activityHover}
          onClick={() => {}}
          canClick={true}
        />
        <LeftToggle
          icon={<Prize />}
          text="수상이력"
          isItemHover={prizeHover}
          onClick={() => {}}
          canClick={true}
        />
      </div>
      <div className="absolute bottom-[30px] right-[24px]">
        <RightToggle
          icon={<Write />}
          text="글쓰기"
          isItemHover={false}
          onClick={() => {}}
          canClick={true}
        />
      </div>
    </div>
  );
};

export default IslandContainer;
