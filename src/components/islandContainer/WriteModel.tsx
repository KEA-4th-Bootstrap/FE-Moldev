import useWriteModel from '../../hooks/main/useWriteModel';

const WriteModel = ({ isHover }: { isHover: boolean }) => {
  const { scene, writeRef } = useWriteModel();

  return (
    <primitive
      ref={writeRef}
      object={scene}
      scale={isHover ? 18 : 17}
      position={[0, 13, -10]}
      rotation={[Math.PI * 2, (-Math.PI / 4) * 3, Math.PI * 2]}
      castShadow
    />
  );
};

export default WriteModel;
