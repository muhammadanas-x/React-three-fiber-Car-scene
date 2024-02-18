
import * as THREE from 'three'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Canvas, applyProps, useFrame, useLoader } from '@react-three/fiber'
import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF, OrbitControls, Html, Text, View, CubeCamera, Text3D, TransformControls, PivotControls, PerspectiveCamera, ScrollControls } from '@react-three/drei'
import { LayerMaterial, Color, Depth } from 'lamina'
import Donut from '@/components/Donut'
import { NodeToyMaterial, NodeToyTick } from '@nodetoy/react-nodetoy'
import { data } from '@/components/meteor-shader-data'
import Practice from '@/components/Practice'
import { MeshReflectorMaterial } from '@react-three/drei'
import { useControls } from 'leva'
import MyGround from '@/components/MyGround'
import MyCar from '@/components/MyCar'
import MyRings from '@/components/MyRings'
import { Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing'
import {BlendFunction} from 'postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'
import MyHtml from './MyHtml'
const FirstProject = () => {
  return (
    <>
    <ScrollControls pages={0} enabled={false}>
        <MyHtml/> 

        </ScrollControls>
        <PerspectiveCamera fov={45} near={ 0.1 } far={1000} makeDefault castShadow position={[6,1.3,0]} rotation={[ 0, Math.PI  / 2 , 0]}/>
        <color args={[0,0,0]} attach={"background"}/>
        <directionalLight/>

     
        

        
    <CubeCamera resolution={256}  frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
              
              <MyCar/> 
          </>
        )}

    </CubeCamera>
        <MyRings/>
        <MyGround/>
      

    
    </>
  )
}

export default FirstProject