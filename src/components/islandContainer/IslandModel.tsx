import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimationMixer, Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const IslandModel = () => {
  const [hovered, setHover] = useState(false);
  const { scene, animations } = useLoader(GLTFLoader, '/models/island2/scene.gltf');
  const animationMixer = useRef<AnimationMixer | null>(null);

  useLayoutEffect(() => {
    console.log(scene);
    if (!scene) return;

    scene.castShadow = true;
    scene.receiveShadow = true;

    scene.traverse((child) => {
      if (!(child instanceof Mesh)) return;
      // 모든 메쉬가 그림자를 받도록 설정
      child.receiveShadow = true;
      child.castShadow = true;
    });
    console.log(scene);
  }, [scene]);

  useEffect(() => {
    if (animations && animations.length > 0) {
      animationMixer.current = new AnimationMixer(scene);
      const animationAction = animationMixer.current.clipAction(animations[0]);

      // 애니메이션 속도를 0.5로 설정하여 느리게 재생합니다.
      animationAction.setEffectiveTimeScale(0.3);

      animationAction.reset().play();
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (animationMixer.current) {
      animationMixer.current.update(delta);
    }
  });

  useEffect(() => {
    console.log(hovered);
  }, [hovered]);

  return (
    <>
      <primitive
        object={scene}
        scale={0.2}
        position={[0, 0, 0]}
        castShadow
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      />
    </>
  );
};

export default IslandModel;
