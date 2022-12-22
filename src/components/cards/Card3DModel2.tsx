import * as React from 'react';
import { useEffect } from 'react';

import {
  Canvas, useThree, useLoader,
} from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import '../../styles/App.scss';

function Scene() {
  const obj = useLoader(OBJLoader, '/octahedron2.obj');
  return <primitive object={obj} />;
}

function CameraController() {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 0;
      controls.maxDistance = 30;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl],
  );
  return null;
}

export default function Card3DModel2() {
  return (
    <Canvas style={{ height: '500px' }}>
      <CameraController />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Scene />
    </Canvas>
  );
}
