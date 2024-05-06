import { OrbitControls, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { DoubleSide, Object3D } from 'three';
import { IslandModel } from './IslandModel';
import { TrophyModel } from './TrophyModel';
import { GunModel } from './GunModel';
import WriteModel from './WriteModel';
import { HouseModel } from './HouseModel';
import useIsland from '../../hooks/main/useIsland';

const IslandContainer = () => {
  const {
    moldevId,
    lightIntensity,
    positions,
    colors,
    colorMap,
    textMap,
    writeHover,
    setWriteHover,
    projectHover,
    setProjectHover,
    prizeHover,
    setPrizeHover,
    activityHover,
    setActivityHover,
    troubleHover,
    setTroubleHover,
    ballRef,
    prizeTextRef,
    troubleTextRef,
    projectTextRef,
    activityTextRef,
    shadowLightRef,
    shadowLightRef2,
    onClickProject,
    onClickPrize,
    onClickTrouble,
    onClickActivity,
    onClickWrite,
  } = useIsland();

  return (
    <div className="grow h-full flex items-center justify-center relative">
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
        <Text3D
          ref={projectTextRef}
          scale={0.7}
          position={[8, 4, 8]}
          font={'/text/pretendard_semibold.json'}
          visible={projectHover}
        >
          프로젝트
          <meshStandardMaterial map={textMap} side={DoubleSide} />
        </Text3D>
        {/* prize 모델 */}
        <TrophyModel setHover={setPrizeHover} isHover={prizeHover} onClick={onClickPrize} />
        <Text3D
          ref={prizeTextRef}
          scale={0.7}
          position={[-3, 4.5, 10]}
          font={'/text/pretendard_semibold.json'}
          visible={prizeHover}
        >
          수상이력
          <meshStandardMaterial map={textMap} side={DoubleSide} />
        </Text3D>
        {/* trouble shooting 모델 */}
        <GunModel setHover={setTroubleHover} isHover={troubleHover} onClick={onClickTrouble} />
        <Text3D
          ref={troubleTextRef}
          scale={0.7}
          position={[-12, 7.5, 0]}
          font={'/text/pretendard_semibold.json'}
          visible={troubleHover}
        >
          트러블슈팅
          <meshStandardMaterial map={textMap} side={DoubleSide} />
        </Text3D>
        {/* 섬 위에 띄운 공 : 대외활동 */}
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
        <Text3D
          ref={activityTextRef}
          scale={0.7}
          position={[-10, 6, 8]}
          font={'/text/pretendard_semibold.json'}
          visible={activityHover}
        >
          대외활동
          <meshStandardMaterial map={textMap} side={DoubleSide} />
        </Text3D>
      </Canvas>
      <div className="absolute bottom-16 right-8 w-[200px] h-[210px] cursor-pointer">
        <Canvas
          shadows
          camera={{
            fov: 75,
            near: 0.1,
            far: 100,
            position: [0, 0, 2],
          }}
          onPointerEnter={() => setWriteHover(true)}
          onPointerOut={() => setWriteHover(false)}
          onClick={onClickWrite}
        >
          <ambientLight intensity={5} color="#FFFFFF" />
          {moldevId !== undefined && moldevId === '1' ? (
            <WriteModel isHover={writeHover} />
          ) : (
            <HouseModel isHover={writeHover} />
          )}
        </Canvas>
      </div>
    </div>
  );
};

export default IslandContainer;
