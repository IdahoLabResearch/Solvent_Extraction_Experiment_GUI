{/* Copyright 2024, Battelle Energy Alliance, LLC */}

import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from '@react-three/drei';
import { MeshStandardMaterial, Mesh, DirectionalLight, PCFSoftShadowMap } from 'three';
import { MathUtils } from 'three';
import * as THREE from 'three';

// Styles
import '../../styles/App.scss';

function Scene() {
  const { scene, camera, gl } = useThree();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load('./assembly.fbx', (fbx) => {
      fbx.traverse((child) => {
        if ((child as Mesh).isMesh) {
          const metalMaterial = new MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.8,
            roughness: 0.4,
            // If you have a texture to apply, uncomment the following line:
            // map: textureLoader.load('path/to/your/texture.jpg'),
          });

          (child as Mesh).material = metalMaterial;
          child.castShadow = true; // Enable shadows for the object
        }
      });

      fbx.scale.set(0.075, 0.075, 0.075);
      fbx.position.y -= 0.5;
      const rotateX = MathUtils.degToRad(25);
      const rotateY = MathUtils.degToRad(55);
      fbx.rotation.set(rotateX, rotateY, 0);

      scene.add(fbx);

      camera.position.set(0, 0, 5);
    });

    // Enable shadows in the renderer
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = PCFSoftShadowMap; // Optional: for softer shadows

  }, [scene, camera, gl]);

  return null;
}

export default function Card3DModel() {
  return (
    <Canvas style={{ height: '500px' }}>
      <Scene />
      <OrbitControls />
      <ambientLight intensity={1} />
      <pointLight position={[2, 2, 2]} intensity={0.8} castShadow />
      <directionalLight
        position={[0, 5, 5]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024} // Optional: Adjust shadow resolution
        shadow-mapSize-height={1024}
      />
    </Canvas>
  );
}
