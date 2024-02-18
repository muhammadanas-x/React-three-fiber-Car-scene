
import { CubeCamera, Environment, EnvironmentCube, Float, MeshReflectorMaterial, OrbitControls, PerspectiveCamera, Sparkles, Text, Text3D, TransformControls } from '@react-three/drei';
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

const DonutGround = () => {

  
  return (
    <>
   
        <PerspectiveCamera fov={45} />



          <Float floatingRange={0.6}>
          
            <Text3D position={[-6,1,0]}  font={'Seaweed Script_Regular.json'} rotation={[0,Math.PI / 6 , 0]} size={3} scale={0.2}>
              Let's Make Some
            
            <meshBasicMaterial color={"white"} />
            </Text3D>


            <Text3D  position={[-6,0,0]}  font={'Seaweed Script_Regular.json'} rotation={[0,Math.PI / 6 , 0]} size={3} scale={0.2}>
            
              Donuts !!!
            
            </Text3D>


           
          </Float>

          
         
          

        
        
        <Sparkles size={2} count={100} speed={2} color={"white"} scale={10} position={[0,0,0]} />
        {/* <mesh scale={1}  rotation={[-Math.PI / 2, 0 ,0 ]}>
            <planeGeometry args={[20,20]}  />
            <MeshReflectorMaterial depthScale={0} aoMapIntensity={0} blur={[1000,400]} color={"pink"} side={THREE.DoubleSide} />
        </mesh> */}
        

        <EffectComposer>
          <Bloom/>
        </EffectComposer>

        

    
    </>
  )
}

export default DonutGround