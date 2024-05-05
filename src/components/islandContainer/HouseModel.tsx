/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: naira001 (https://sketchfab.com/naira001)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/house-2d79152d61ba4af39819243408571e56
Title: house
*/

import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback } from 'react';
import { Mesh } from 'three';

const useGettingHouseRef = () => {
  const houseRef = useCallback((node: Mesh) => {
    if (node !== null) {
      gsap.to(node.position, {
        y: -0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
      gsap.to(node.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return [houseRef];
};

export function HouseModel(props: JSX.IntrinsicElements['group'] & { isHover: boolean }) {
  const { nodes, materials } = useGLTF('/models/house/scene.gltf');
  const [houseRef] = useGettingHouseRef();
  return (
    <group
      {...props}
      dispose={null}
      scale={props.isHover ? 1.2 : 1}
      position={[0, -1.3, -1]}
      ref={houseRef as any}
    >
      <group scale={0.01}>
        <mesh
          geometry={(nodes.houseceiling101_housewire_000197088_0 as Mesh).geometry}
          material={materials.housewire_000197088}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox002_housewire_125105084_0 as Mesh).geometry}
          material={materials.housewire_125105084}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseRectangle002_housewire_228184154_0 as Mesh).geometry}
          material={materials.housewire_228184154}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseceiling102_housewire_000197088_0 as Mesh).geometry}
          material={materials.housewire_000197088}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseceiling103_housewire_000197088_0 as Mesh).geometry}
          material={materials.housewire_000197088}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseceiling104_housewire_000197088_0 as Mesh).geometry}
          material={materials.housewire_000197088}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseCylinder001_housewire_228214154_0 as Mesh).geometry}
          material={materials.housewire_228214154}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseRectangle003_housewire_228214155_0 as Mesh).geometry}
          material={materials.housewire_228214155}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseRectangle004_housewire_228214155_0 as Mesh).geometry}
          material={materials.housewire_228214155}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.housewindow01Red_housewire_228214156_0 as Mesh).geometry}
          material={materials.housewire_228214156}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseRectangle005_housewire_228184154_0 as Mesh).geometry}
          material={materials.housewire_228184154}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox006_housewire_228214155_0 as Mesh).geometry}
          material={materials.housewire_228214155}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox007_housewire_228214155_0 as Mesh).geometry}
          material={materials.housewire_228214155}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.housewindow02Red_housewire_228214156_0 as Mesh).geometry}
          material={materials.housewire_228214156}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseceiling201_housewire_000197088_0 as Mesh).geometry}
          material={materials.housewire_000197088}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseceiling202_housewire_000197088_0 as Mesh).geometry}
          material={materials.housewire_000197088}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseceiling203_housewire_000197088_0 as Mesh).geometry}
          material={materials.housewire_000197088}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseceiling204_housewire_000197088_0 as Mesh).geometry}
          material={materials.housewire_000197088}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseceiling205_housewire_000197088_0 as Mesh).geometry}
          material={materials.housewire_000197088}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.housewindow01G_housewire_228214157_0 as Mesh).geometry}
          material={materials.housewire_228214157}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseroof_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox008_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseroof001_housewire_228214159_0 as Mesh).geometry}
          material={materials.housewire_228214159}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseroof002_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox009_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.housewindow02G_housewire_228214157_0 as Mesh).geometry}
          material={materials.housewire_228214157}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox010_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox011_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox012_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox013_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox014_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox015_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox016_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox017_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseRectangle006_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseRectangle007_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseRectangle008_housewire_228214158_0 as Mesh).geometry}
          material={materials.housewire_228214158}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox019_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox027_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox035_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseDonut001_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseCylinder002_housewire_228214161_0 as Mesh).geometry}
          material={materials.housewire_228214161}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseDonut004_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseBox041_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseDonut005_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseDonut006_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseBox042_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox043_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox044_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox045_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox046_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox047_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox054_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox055_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox056_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox057_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox058_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox059_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox060_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox061_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox062_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox063_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox064_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox065_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseCylinder003_housewire_228214161_0 as Mesh).geometry}
          material={materials.housewire_228214161}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseCylinder004_housewire_228214161_0 as Mesh).geometry}
          material={materials.housewire_228214161}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseCylinder005_housewire_228214161_0 as Mesh).geometry}
          material={materials.housewire_228214161}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseBox066_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseBox067_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseBox068_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseBox069_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseBox070_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseBox071_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseBox072_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseBox073_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseBox074_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseBox075_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.566, -3.761, -0.058]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={(nodes.houseCylinder006_housewire_228214163_0 as Mesh).geometry}
          material={materials.housewire_228214163}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseCylinder007_housewire_228214163_0 as Mesh).geometry}
          material={materials.housewire_228214163}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseCylinder008_housewire_228214163_0 as Mesh).geometry}
          material={materials.housewire_228214163}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseCylinder009_housewire_228214163_0 as Mesh).geometry}
          material={materials.housewire_228214163}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.houseTube001_housewire_228214164_0 as Mesh).geometry}
          material={materials.housewire_228214164}
          position={[0, -3.761, 0]}
        />
        <mesh
          geometry={(nodes.Box075_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Box074_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Box073_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Box072_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Box071_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Box070_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Box069_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Box068_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Box067_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Box066_housewire_228214162_0 as Mesh).geometry}
          material={materials.housewire_228214162}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Donut006_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Donut005_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Box041_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Donut004_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.Donut001_housewire_228214160_0 as Mesh).geometry}
          material={materials.housewire_228214160}
          position={[0.06, -3.761, -0.743]}
        />
        <mesh
          geometry={(nodes.grass_variant_3_grass1_0 as Mesh).geometry}
          material={materials.grass1}
          position={[19.301, 1.409, -72.694]}
          rotation={[0, -1.332, 0]}
          scale={0.398}
        />
        <mesh
          geometry={(nodes.grass_variant_4_grass1_0 as Mesh).geometry}
          material={materials.grass1}
          position={[-78.621, 1.409, 52.687]}
          rotation={[0, -0.279, 0]}
          scale={0.398}
        />
        <mesh
          geometry={(nodes.grass_varien_4_grass4_0 as Mesh).geometry}
          material={materials.grass4}
          position={[46.529, -2.004, 68.983]}
          scale={0.398}
        />
        <mesh
          geometry={(nodes.grass_varient_3_grass6_0 as Mesh).geometry}
          material={materials.grass6}
          position={[-57.491, 1.311, 90.376]}
          scale={0.398}
        />
        <mesh
          geometry={(nodes.grass_varient_4_grass6_0 as Mesh).geometry}
          material={materials.grass6}
          position={[55.469, 1.311, 90.376]}
          scale={0.398}
        />
        <mesh
          geometry={(nodes.grass_variant_5_grass1_0 as Mesh).geometry}
          material={materials.grass1}
          position={[67.024, 1.409, -21.692]}
          rotation={[0, -0.026, 0]}
          scale={0.398}
        />
        <mesh
          geometry={(nodes.grass_variant_6_grass1_0 as Mesh).geometry}
          material={materials.grass1}
          position={[69.903, 1.409, 22.617]}
          rotation={[0, -0.976, 0]}
          scale={0.398}
        />
        <mesh
          geometry={(nodes.grass_varien_5_grass4_0 as Mesh).geometry}
          material={materials.grass4}
          position={[70.251, -2.004, 48.256]}
          scale={0.398}
        />
        <mesh
          geometry={(nodes.grass_variant_7_grass1_0 as Mesh).geometry}
          material={materials.grass1}
          position={[-83.803, 1.409, -53.18]}
          rotation={[0, -0.279, 0]}
          scale={0.398}
        />
        <mesh
          geometry={(nodes.grass_varient_5_grass6_0 as Mesh).geometry}
          material={materials.grass6}
          position={[-44.191, 1.311, -73.469]}
          rotation={[0, -0.652, 0]}
          scale={0.398}
        />
        <mesh
          geometry={(nodes.grass_varient_6_grass6_0 as Mesh).geometry}
          material={materials.grass6}
          position={[-23.078, 1.311, -53.568]}
          scale={0.398}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/house/scene.gltf');
