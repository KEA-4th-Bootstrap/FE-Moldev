import { useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const BeachModel = () => {
  const { nodes } = useLoader(GLTFLoader, '/models/beach/scene.gltf');

  useEffect(() => {
    console.log(nodes);
  }, [nodes]);

  return <>{nodes && <primitive object={nodes.Sketchfab_Scene} scale={3.0} />}</>;
};

export default BeachModel;
