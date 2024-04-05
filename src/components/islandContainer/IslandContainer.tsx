import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { useCallback, useState } from 'react';
// import IslandModel from './IslandModel';
import { DirectionalLight, DoubleSide, Mesh, Object3D, TextureLoader } from 'three';
import { Model } from './Scene';
import gsap from 'gsap';
import WriteModel from './WriteModel';

const lightIntensity = 6.0;

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
const useGettingShadowRef = () => {
  const shadowLightRef = useCallback((node: DirectionalLight) => {
    if (node !== null) {
      const shadow = node.shadow;
      shadow.mapSize.width = 3000;
      shadow.mapSize.height = 3000;
      shadow.camera.near = 10;
      shadow.camera.far = 500;
      shadow.camera.left = -200;
      shadow.camera.right = 200;
      shadow.camera.top = 200;
      shadow.camera.bottom = -200;
      shadow.radius = 5;
    }
  }, []);

  return [shadowLightRef];
};

const useGettingBallRef = () => {
  const ballRef = useCallback((node: Mesh) => {
    if (node !== null) {
      gsap.fromTo(
        node.position,
        {
          x: -8,
          y: 0,
          z: 8,
        },
        {
          x: -10,
          y: 2,
          z: 8,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        },
      );

      gsap.fromTo(
        node.rotation,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: Math.PI * 2,
          y: Math.PI * 1,
          z: 0,
          duration: 20,
          repeat: -1,
          ease: 'none',
          yoyo: true,
        },
      );
    }
  }, []);

  return [ballRef];
};

const IslandContainer = () => {
  const [ballHover, setBallHover] = useState(false);
  const [ballRef] = useGettingBallRef();
  const [shadowLightRef] = useGettingShadowRef();
  const [shadowLightRef2] = useGettingShadowRef();
  const colorMap = useLoader(TextureLoader, '/models/beachball/textures/ball_texture.jpg');

  return (
    <div className="grow h-full flex items-center justify-center relative">
      <div className="absolute w-full h-full">
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
          <Model />
          {/* 섬 위에 띄운 공 */}
          <mesh
            position={[-8, 0, 8]}
            receiveShadow
            castShadow
            ref={ballRef}
            scale={ballHover ? 1.2 : 1}
            onPointerEnter={() => setBallHover(true)}
            onPointerOut={() => setBallHover(false)}
          >
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial map={colorMap} side={DoubleSide} />
          </mesh>
          <WriteModel />
        </Canvas>
      </div>
    </div>
  );
};

export default IslandContainer;
