import { useLoader } from '@react-three/fiber';
import React, { useLayoutEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const WriteModel = () => {
  const { scene } = useLoader(GLTFLoader, '/models/write/scene.gltf');

  useLayoutEffect(() => {
    if (!scene) return;
    scene.castShadow = true;
    scene.receiveShadow = true;

    scene.traverse((child) => {
      // 모든 메쉬가 그림자를 받도록 설정
      child.receiveShadow = true;
      child.castShadow = true;
    });
  }, [scene]);

  return (
    <>
      <primitive
        object={scene}
        scale={10}
        position={[18, 10, 20]}
        rotation={[Math.PI / 5, Math.PI / 8, -Math.PI / 6]}
        castShadow
      />
    </>
  );
};

export default WriteModel;
