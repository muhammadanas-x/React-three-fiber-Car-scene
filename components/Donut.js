import { useEffect, useRef } from 'react';
import { ContactShadows, CubeCamera, PresentationControls, Sparkles, useGLTF } from '@react-three/drei';
import { PerspectiveCamera, Float, Environment, Lightformer, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MeshReflectorMaterial } from '@react-three/drei';



const Donut = () => {
  
  const donut = useGLTF('donut/scene.gltf').scene;
  const group = useRef();
  const donutObject = useRef();


  useFrame((state, delta) => {
    
  //  (group.current.position.z += delta * 10) > 20 && (group.current.position.z = -60)
    
  

  
  });

  return (
    <>
      <PerspectiveCamera makeDefault fov={75} position={[-2, 0, 3]} />

      <Float floatIntensity={2} rotationIntensity={1}>
              <primitive castShadows recieveShadows object={donut} />
            </Float>

            <Float floatIntensity={2} rotationIntensity={1}>
              <primitive  castShadows recieveShadows rotation={[Math.PI / 2,  0, (Math.PI  / 3)]} position= {[0,0,0]} ref={donutObject} object={donut} />
            </Float>

      
        
       <Environment frames={Infinity} resolution={256} background>
         <mesh scale={3}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color={'pink'} side={THREE.BackSide} />
        </mesh> 

      

        
      </Environment>  
    </>
  );
};

export default Donut;