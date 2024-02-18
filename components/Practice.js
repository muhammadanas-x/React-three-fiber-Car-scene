import { Environment, Float, Lightformer, OrbitControls, Resize, Sky, Stars, Stats, useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { BufferAttribute, Color, CylinderGeometry, Mesh, MeshBasicMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Bloom , BrightnessContrast, ChromaticAberration , DepthOfField, EffectComposer, GodRays, HueSaturation } from '@react-three/postprocessing';
import {BlendFunction} from 'postprocessing';
import * as THREE from 'three'
const Practice = () => {
  const gltf = useLoader(GLTFLoader, 'practice/scene.gltf');

  console.log(gltf);

  function Model({ url }) {
    const group = useRef();
    const {scene , nodes , materials} = useGLTF(url);
  
    // Function to remove materials
    const removeMaterials = (object) => {
      if (object.material) {
        object.material = undefined; // Clear the material
      }
      if (object.children) {
        object.children.forEach(removeMaterials(materials)); // Traverse children
      }
    };
    
  
    // Once the model is loaded, remove materials
    if (nodes && nodes.scene) {
      removeMaterials(nodes.scene);
    }
  
    return <primitive ref={group} object={scene} />;
  }

 
  return (
    <>
    
      <directionalLight/>
      <OrbitControls target={[0, 1, 0]} autoRotate />
      <Model url={"practice/scene.gltf"} />
    


    {/* <EffectComposer stencilBuffer= {false}>
    <DepthOfField focusDistance={0.02} focalLength={0.02} bokehScale={5} />
    <HueSaturation hue={0} saturation={-0.15}/>
    <BrightnessContrast brightness={0.1} contrast={0.35}/>
    <ChromaticAberration radialModulation = { true} offset={[0.00175,0.00175 ]}/>
   
    </EffectComposer> */}
    </>
  );
};

export default Practice;