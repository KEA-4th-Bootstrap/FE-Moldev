import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { TextureLoader } from 'three';
import useModelRef from './useModelRef';
import useRouteNavigate from '../common/useRouteNavigate';
import useShadowRef from './useShadowRef';

const useIsland = () => {
  const { moldevId } = useParams();
  const [writeHover, setWriteHover] = useState(false);
  const [prizeHover, setPrizeHover] = useState(false);
  const [projectHover, setProjectHover] = useState(false);
  const [activityHover, setActivityHover] = useState(false);
  const [troubleHover, setTroubleHover] = useState(false);

  useEffect(() => {
    document.body.style.cursor = activityHover ? 'pointer' : 'auto';
  }, [activityHover]);

  useEffect(() => {
    console.log('params', moldevId);
  }, [moldevId]);

  const lightIntensity = 6.0;

  const positions = [
    // points of cube, 8 points, length of each side is 10, center is (0, 0, 0)
    [5, 5, 5],
    [5, 5, -5],
    [5, -5, 5],
    [5, -5, -5],
    [-5, 5, 5],
    [-5, 5, -5],
    [-5, -5, 5],
    [-5, -5, -5],
  ];

  const colors = [
    '#FF2450',
    '#008060',
    '#6A0DAD',
    '#FFD700',
    '#007FFF',
    '#FF9500',
    '#00A78B',
    '#FF5078',
  ];

  const colorMap = useLoader(TextureLoader, '/models/beachball/textures/ball_texture.jpg');
  const textMap = useLoader(TextureLoader, '/text/gradient.jpeg');

  const [ballRef] = useModelRef({ x: -10, y: 2, z: 8 }, { x: Math.PI * 2, y: Math.PI, z: 0 });
  const [prizeTextRef] = useModelRef({ x: -1, y: 5, z: 13 }, { x: 0, y: 0, z: 0 });
  const [troubleTextRef] = useModelRef({ x: -10, y: 8, z: 2 }, { x: 0, y: 0, z: 0 });
  const [projectTextRef] = useModelRef({ x: 9, y: 4.5, z: 6 }, { x: 0, y: 0, z: 0 });
  const [activityTextRef] = useModelRef({ x: -12, y: 6.5, z: 8 }, { x: 0, y: 0, z: 0 });
  const [shadowLightRef] = useShadowRef();
  const [shadowLightRef2] = useShadowRef();

  const { onClickIcon: onClickProject } = useRouteNavigate(`/island/${moldevId}/project`);
  const { onClickIcon: onClickPrize } = useRouteNavigate(`/island/${moldevId}/awards`);
  const { onClickIcon: onClickTrouble } = useRouteNavigate(`/island/${moldevId}/trouble`);
  const { onClickIcon: onClickActivity } = useRouteNavigate(`/island/${moldevId}/activity`);
  const { onClickIcon: onClickWrite } = useRouteNavigate(`/island/${moldevId}/write`);

  return {
    moldevId,
    lightIntensity,
    positions,
    colors,
    colorMap,
    textMap,
    writeHover,
    setWriteHover,
    projectHover,
    setProjectHover,
    prizeHover,
    setPrizeHover,
    activityHover,
    setActivityHover,
    troubleHover,
    setTroubleHover,
    ballRef,
    prizeTextRef,
    troubleTextRef,
    projectTextRef,
    activityTextRef,
    shadowLightRef,
    shadowLightRef2,
    onClickProject,
    onClickPrize,
    onClickTrouble,
    onClickActivity,
    onClickWrite,
  };
};

export default useIsland;
