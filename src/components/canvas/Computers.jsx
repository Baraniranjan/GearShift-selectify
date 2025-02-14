import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // <mesh>
    //   <hemisphereLight intensity={0.15} groundColor='black' />
    //   <spotLight
    //     position={[-20, 50, 10]}
    //     angle={0.12}
    //     penumbra={1}
    //     intensity={1}
    //     castShadow
    //     shadow-mapSize={1024}
    //   />
    //   <pointLight intensity={1} />
    //   <primitive
    //     object={computer.scene}
    //     scale={isMobile ? 0.7 : 0.75}
    //     position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
    //     rotation={[-0.01, -0.2, -0.1]}
    //   />
    // </mesh>
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <ambientLight intensity={2.5} /><directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={50}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 8.8}
        position={isMobile ? [0, -3, -2.2] : [0, -0.5, -0.5]}
        rotation={[-0.01, -0.01, -0.01]}
      />
    </mesh>
  );
};

// import { useTexture } from '@react-three/drei';
// import * as THREE from 'three';

// const Computers = ({ isMobile }) => {
//   const { scene, materials } = useGLTF('./desktop_pc/scene.gltf');
//   //const texture = useTexture('./desktop_pc/textures/material_diffuse.png'); // If you want to apply a custom texture

//   const [diffuse, glossiness, normal, roughness] = useTexture([
//     './desktop_pc/textures/material_diffuse.png', // Diffuse map
//     './desktop_pc/textures/material_2_specularGlossiness.png', // Glossiness map (sometimes roughness map)
//     './desktop_pc/textures/material_diffuse.png', // Normal map
//     './desktop_pc/textures/material_specularGlossiness.png' // Roughness map (if separate from glossiness)
//   ]);

//   useEffect(() => {
//     // Iterate over all materials in the model
//     Object.values(materials).forEach((material) => {
//       if (material) {
//         // Apply diffuse texture (color texture)
//         material.map = diffuse;
        
//         // Apply glossiness map (if applicable, might be the same as roughness map)
//         material.roughnessMap = glossiness;

//         // Apply normal map
//         if (normal) {
//           material.normalMap = normal;
//         }

//         // Apply roughness map if separate from glossiness
//         material.roughness = 1.0;
//         if (roughness) {
//           material.roughnessMap = roughness;
//         }

//         // Set texture encoding (optional, for proper display)
//         material.map.encoding = THREE.sRGBEncoding;
//         material.needsUpdate = true; // Ensure the material is updated
//       }
//     });
//   }, [diffuse, glossiness, normal, roughness, materials]);

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.9}
//         penumbra={1}
//         intensity={25}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={scene}
//         scale={isMobile ? 0.7 : 7}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };



const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 400px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / -2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
