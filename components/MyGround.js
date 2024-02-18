import React, { useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { RepeatWrapping, TextureLoader } from 'three'
import { MeshReflectorMaterial } from '@react-three/drei'

const MyGround = () => {


    const [roughness , normal , ao , diffuse , displacement] = useLoader(TextureLoader, [
        'remakeCar/normal.jpg',
        'remakeCar/roughness.jpg',
        'remakeCar/ao.jpg',
        'remakeCar/diffuse.jpg',
        'remakeCar/displacement.jpg'
    ])


    useFrame((state, delta) => {
        let t = -state.clock.getElapsedTime() * 0.05;
         roughness.offset.set(t % 1, 0);
         normal.offset.set(t % 1 , 0);

        
       });


    useEffect(() => {

        [normal , roughness , ao , diffuse , displacement].forEach((t) => {

            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
        })
    },[normal , roughness , ao , diffuse , displacement]);

  return (
    <>
    <mesh rotation={[-Math.PI / 2 , 0 , 0]}>
        <planeGeometry args={[60,5]}/>
        
        <MeshReflectorMaterial
            normalMap={normal}
            aoMap={ao}
            displacementMap={displacement}
            roughnessMap={roughness}
            displacementScale={10}
            roughness={0.2}
            color={[0.1,0.1,0.1]}
        />
    </mesh>
    
    </>
  )
}

export default MyGround