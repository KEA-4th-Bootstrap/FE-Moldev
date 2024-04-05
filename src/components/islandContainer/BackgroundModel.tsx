import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { AnimationMixer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const BackgroundModel = () => {
  const [hovered, setHover] = useState(false);
  const { scene, animations } = useLoader(GLTFLoader, '/models/background/scene.gltf');
  const animationMixer = useRef<AnimationMixer | null>(null);

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
        position={[0, 0, 0]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      />
    </>
  );
};

export default BackgroundModel;
