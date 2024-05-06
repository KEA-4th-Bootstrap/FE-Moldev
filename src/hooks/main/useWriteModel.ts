import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { useCallback, useEffect, useLayoutEffect } from 'react';
import { Mesh, Vector3 } from 'three';
import gsap from 'gsap';

const useWriteModel = () => {
  const { scene } = useLoader(GLTFLoader, '/models/write/scene.gltf');
  const { camera } = useThree();
  const writeRef = useCallback((node: Mesh) => {
    if (node !== null) {
      gsap.fromTo(
        node.position,
        {
          x: 0,
          y: 13,
          z: -10,
        },
        {
          x: 0,
          y: 14,
          z: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        },
      );

      gsap.fromTo(
        node.rotation,
        {
          x: Math.PI * 2,
          y: (-Math.PI / 4) * 3,
          z: Math.PI * 2,
        },
        {
          x: Math.PI * 2,
          y: (-Math.PI / 4) * 12,
          z: Math.PI * 2,
          duration: 20,
          delay: 1,
          repeat: -1,
          ease: 'none',
          yoyo: true,
        },
      );
    }
  }, []);

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

  useEffect(() => {
    console.log('scene position : ', scene.position);
    console.log('scene rotation : ', scene.rotation);
    console.log('scene scale : ', scene.scale);
  }, [scene.position, scene.rotation, scene.scale]);

  useEffect(() => {
    if (!camera) return;
    camera.lookAt(new Vector3(0, 0, 0));
  }, [camera]);

  return { scene, writeRef };
};

export default useWriteModel;