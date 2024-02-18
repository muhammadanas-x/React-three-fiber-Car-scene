'use client'

import Donut from '@/components/Donut'
import DonutGround from '@/components/DonutGround'
import DonutText from '@/components/DonutText'
import MyHtml from '@/components/MyHtml'
import { data } from '@/components/meteor-shader-data'
import { NodeToyMaterial, NodeToyTick } from '@nodetoy/react-nodetoy'
import { Environment, OrbitControls, Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useControls } from 'leva'
import * as THREE from 'three'








export default function Home() {

  const materialProps = useControls({
     nodeUniform0: { value: "http://localhost:3000/download1.jpg"}, // Level of transmission

  })

  
  const materialProps1 = useControls({
     nodeUniform0: { value: "http://localhost:3000/download.jpg"}, // Level of transmission
    //  nodeUniform1: { value: "http://localhost:3000/effect2.jpg"}, // Level of transmission

  })
  

  return (
      
    <>
            

      <Canvas shadows>
        <color args={[0 , 0 ,0]} attach='background'/>
      <OrbitControls/>
      <NodeToyTick/>
      <directionalLight/>
      <ambientLight/>

      {/* <Donut/>
      <DonutGround/>
      <DonutText/> */}
      <mesh scale={2}>
        
        <sphereGeometry args={[1,64,64]}/>
        <NodeToyMaterial data={data}/>

        
      </mesh>


      
      <EffectComposer>
        <Bloom intensity={1}/>
      </EffectComposer>

      </Canvas>

</>
  )
}

