import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React from 'react'
import Ground from './Ground'
import Car from './Car'
import Rings from './Rings'
import { Boxes } from './Box'
import {Bloom , ChromaticAberration , EffectComposer} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing';
import FloatingGrid from './FloatingGrid'


const CarShow = () => {
  return (
    <>
    <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45} />

    <PerspectiveCamera makeDefault fov={50} position={[3,2,5]}/>

    <color args={[0,0,0]} attach={"background"}/>
    
    <CubeCamera resolution={256} frames={Infinity}>
    {(texture) => (
      <>
        <Environment map={texture}/>
          <Car/> 
      </>
    )}

    </CubeCamera>

    <Boxes/>
    <Rings/>

    <FloatingGrid/>

    <directionalLight
        position={[0, 5, 0]}
        intensity={10}  
        color={[0.05, 0.05, 0.05]}  
        castShadow
      />

    <spotLight 
        intensity={9.5}
        position={[5,3,0]}
        color={[1,0.25,0.7]}
        penumbra={0.5}
        castShadow
        shadow-bias ={-0.0001}
        angle={0.6}
    
    />

    <spotLight
    intensity={10}
    angle={0.6}
    position={[-5,3,0]}
    penumbra={0}
    castShadow
    color={[0.14,0.5,1]}
    
    />
    <Ground/>
      <EffectComposer>
        <Bloom 
        blendFunction={BlendFunction.ADD}
        intensity={1.3}
        width={300}
        height={300}
        kernelSize={5}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.025}
        />

        <ChromaticAberration
        blendFunction={BlendFunction.ADD}
        offset={[0.0005,0.0012]}
        />


      </EffectComposer>

    </>
  )
}

export default CarShow