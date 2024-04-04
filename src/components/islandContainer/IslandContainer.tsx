import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import IslandModel from './IslandModel';
import { DirectionalLightHelper, DirectionalLight, DoubleSide, Object3D } from 'three';

const lightIntensity = 12.0;

const positions = [
  // points of cube, 8 points, length of each side is 10, center is (0, 0, 0)
  [5, 5, 5],
  [5, 5, -5],
  [5, -5, 5],
  [5, -5, -5],
  [-5, 5, 5],
  [-5, 5, -5],
  [-5, -5, 5],
  [-5, -5, -5],
];

const colors = [
  '#FF2450',
  '#008060',
  '#6A0DAD',
  '#FFD700',
  '#007FFF',
  '#FF9500',
  '#00A78B',
  '#FF5078',
];

const IslandContainer = () => {
  const shadowLightRef = useRef<DirectionalLight>(null);

  useEffect(() => {
    if (shadowLightRef.current) {
      // DirectionalLight 객체의 shadow 속성 설정
      const shadow = shadowLightRef.current.shadow;
      shadow.mapSize.width = 512; // 그림자 맵 해상도
      shadow.mapSize.height = 512;
      shadow.camera.near = 0.1; // 그림자 카메라의 near
      shadow.camera.far = 500; // 그림자 카메라의 far
      // 필요한 다른 그림자 설정...
      shadow.radius = 5; // 그림자의 부드러움 정도
    }
  }, [shadowLightRef]);

  // Refs for lights with TypeScript types
  const directionalLightRef = useRef<DirectionalLight | null>(null);
  const directionalLightRef2 = useRef<DirectionalLight | null>(null);
  const directionalLightRef3 = useRef<DirectionalLight | null>(null);
  const directionalLightRef4 = useRef<DirectionalLight | null>(null);
  const directionalLightRef5 = useRef<DirectionalLight | null>(null);
  const directionalLightRef6 = useRef<DirectionalLight | null>(null);
  const directionalLightRef7 = useRef<DirectionalLight | null>(null);
  const directionalLightRef8 = useRef<DirectionalLight | null>(null);

  useEffect(() => {
    // Check if the lights are loaded
    if (
      directionalLightRef.current &&
      directionalLightRef2.current &&
      directionalLightRef3.current &&
      directionalLightRef4.current &&
      directionalLightRef5.current &&
      directionalLightRef6.current &&
      directionalLightRef7.current &&
      directionalLightRef8.current
    ) {
      // Creating helpers for each light
      const directionalLightHelper = new DirectionalLightHelper(directionalLightRef.current, 5);
      const directionalLightHelper2 = new DirectionalLightHelper(directionalLightRef2.current, 5);
      const directionalLightHelper3 = new DirectionalLightHelper(directionalLightRef3.current, 5);
      const directionalLightHelper4 = new DirectionalLightHelper(directionalLightRef4.current, 5);
      const directionalLightHelper5 = new DirectionalLightHelper(directionalLightRef5.current, 5);
      const directionalLightHelper6 = new DirectionalLightHelper(directionalLightRef6.current, 5);
      const directionalLightHelper7 = new DirectionalLightHelper(directionalLightRef7.current, 5);
      const directionalLightHelper8 = new DirectionalLightHelper(directionalLightRef8.current, 5);

      // Adding helpers to the scene
      directionalLightRef.current.parent!.add(directionalLightHelper);
      directionalLightRef2.current.parent!.add(directionalLightHelper2);
      directionalLightRef3.current.parent!.add(directionalLightHelper3);
      directionalLightRef4.current.parent!.add(directionalLightHelper4);
      directionalLightRef5.current.parent!.add(directionalLightHelper5);
      directionalLightRef6.current.parent!.add(directionalLightHelper6);
      directionalLightRef7.current.parent!.add(directionalLightHelper7);
      directionalLightRef8.current.parent!.add(directionalLightHelper8);
    }
  }, [
    directionalLightRef,
    directionalLightRef2,
    directionalLightRef3,
    directionalLightRef4,
    directionalLightRef5,
    directionalLightRef6,
    directionalLightRef7,
    directionalLightRef8,
  ]);

  return (
    <div className="grow h-full flex items-center justify-center">
      <Canvas shadows camera={{ fov: 75, near: 0.1, far: 500, position: [5, 15, 30] }}>
        <OrbitControls minDistance={15} maxDistance={45} />
        <ambientLight position={[0, 0, 0]} intensity={2} color="#FFFFFF" />
        <directionalLight
          ref={directionalLightRef}
          position={[positions[0][0], positions[0][1], positions[0][2]]}
          intensity={lightIntensity}
          color={colors[0]}
        />
        <directionalLight
          ref={directionalLightRef2}
          position={[positions[1][0], positions[1][1], positions[1][2]]}
          intensity={lightIntensity}
          color={colors[1]}
        />
        <directionalLight
          ref={directionalLightRef3}
          position={[positions[2][0], positions[2][1], positions[2][2]]}
          intensity={lightIntensity}
          color={colors[2]}
        />
        <directionalLight
          ref={directionalLightRef4}
          position={[positions[3][0], positions[3][1], positions[3][2]]}
          intensity={lightIntensity}
          color={colors[3]}
        />
        <directionalLight
          ref={directionalLightRef5}
          position={[positions[4][0], positions[4][1], positions[4][2]]}
          intensity={lightIntensity}
          color={colors[4]}
        />
        <directionalLight
          ref={directionalLightRef6}
          position={[positions[5][0], positions[5][1], positions[5][2]]}
          intensity={lightIntensity}
          color={colors[5]}
        />
        <directionalLight
          ref={directionalLightRef7}
          position={[positions[6][0], positions[6][1], positions[6][2]]}
          intensity={lightIntensity}
          color={colors[6]}
        />
        <directionalLight
          castShadow
          shadow={shadowLightRef.current?.shadow}
          ref={directionalLightRef8}
          position={[positions[7][0], positions[7][1], positions[7][2]]}
          intensity={lightIntensity}
          color={colors[7]}
        />
        <directionalLight
          ref={shadowLightRef}
          target={new Object3D()}
          position={[0, 300, 0]} // 위치
          intensity={0.1} // 강도
          color={'#ffffff'} // 색상
        />
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[50, 32, 32]} />
          <meshStandardMaterial color={'white'} side={DoubleSide} />
        </mesh>
        <IslandModel />
      </Canvas>
    </div>
  );
};

export default IslandContainer;
