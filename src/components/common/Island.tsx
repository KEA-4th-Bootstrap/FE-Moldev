import { OrbitControls, useGLTF } from '@react-three/drei';

const Island = () => {
  const { nodes } = useGLTF('/models/island/app_island.glb');
  console.log(nodes);

  return (
    <div className="grow h-full flex items-center justify-center">
      <OrbitControls />
      <ambientLight intensity={5} />
      <primitive object={nodes.pPlane5} />
      {/* nodes를 순회하며 각 객체를 생성합니다. */}
      {/* {Object.values(nodes).map(
        (node: any, idx) => (console.log(node), (<primitive key={idx} object={node} />)),
      )} */}
    </div>
  );
};

export default Island;
