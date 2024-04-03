import { useLoader } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const OceanModel = () => {
  const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(hovered);
  }, [hovered]);

  const gltf = useLoader(GLTFLoader, '/models/ocean/scene.gltf');

  return (
    <>
      <primitive
        object={gltf.scene}
        position={[0.3, 0, -0.8]}
        scale={55.0}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      />
    </>
  );
};

export default OceanModel;
