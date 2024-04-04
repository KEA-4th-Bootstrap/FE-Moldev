import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { AnimationMixer, Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const IslandModel = () => {
  const { scene, animations } = useLoader(GLTFLoader, '/models/island2/scene.gltf');
  const animationMixer = useRef<AnimationMixer | null>(null);

  useLayoutEffect(() => {
    if (!scene) return;
    console.log('씬입니다');
    console.log(scene);

    scene.castShadow = true;
    scene.receiveShadow = true;

    scene.traverse((child) => {
      if (!(child instanceof Mesh)) return;
      // 모든 메쉬가 그림자를 받도록 설정
      child.receiveShadow = true;
      child.castShadow = true;
    });
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

  // const onModelClick = (e: any) => {
  //   const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  //   const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

  //   const raycaster = new Raycaster();
  //   const mouseVector = new Vector2(mouseX, mouseY);
  //   console.log(mouseVector);

  //   const intersects = raycaster.intersectObject(scene, true);
  //   if (intersects.length > 0) {
  //     console.log('오브젝트 1개 이상 클릭됨');
  //     console.log(intersects);

  //     // arr의 마지막 오브젝트 이름 출력
  //     console.log(intersects[intersects.length - 1].object.name);
  //   }
  // };

  return (
    <>
      <primitive
        object={scene}
        scale={0.2}
        position={[0, 0, 0]}
        castShadow
        // onClick={onModelClick}
      />
    </>
  );
};

export default IslandModel;
