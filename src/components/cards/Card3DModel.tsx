import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from '@react-three/drei';
import { MeshStandardMaterial, Mesh } from 'three';
import { MathUtils } from 'three';

// Styles
import '../../styles/App.scss';

function Scene() {
  const { scene, camera } = useThree();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load('./assembly.fbx', (fbx) => {
      fbx.traverse((child) => {
        if ((child as Mesh).isMesh) {
          // Assuming the loaded model doesn't have a texture you want to keep,
          // you can apply a new metal-like material to it.
          const metalMaterial = new MeshStandardMaterial({
            color: 0x555555, // Adjust the color to your liking
            metalness: 0.5, // Values between 0.0 and 1.0 (non-metal to fully metallic)
            roughness: 0.5, // Values between 0.0 and 1.0 (smooth to rough)
          });

          // Apply the material to each mesh within the model
          (child as Mesh).material = metalMaterial;
        }
      });

      // Adjust the model's scale, position, or rotation
      fbx.scale.set(0.075, 0.075, 0.075);
      fbx.position.y -= 0.5; // Move the model down a bit
      
      // Convert degrees to radians for Three.js
      const rotateX = MathUtils.degToRad(25); // 25 degrees forward
      const rotateY = MathUtils.degToRad(55); // 25 degrees left (negative because Three.js uses a right-hand coordinate system)

      // Apply the rotation to the model
      fbx.rotation.x += rotateX;
      fbx.rotation.y += rotateY;

      // Add the FBX model to the scene
      scene.add(fbx);

      // Adjust the camera's position to better frame the loaded model
      camera.position.set(0, 0, 5);
    });
  }, [scene, camera]);

  return null; // No need to return an actual element since we're adding directly to the scene
}

export default function Card3DModel() {
  return (
    <Canvas style={{ height: '500px' }}>
      <Scene />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
}
