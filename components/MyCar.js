import { useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'
import { Mesh } from 'three';

const MyCar = () => {

    const car = useGLTF('porshe/scene.gltf');
    useEffect(() => {
        
        car.scene.traverse((object) => {
            if(object instanceof Mesh)
            {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
                
            }
        })
        
        

    },[])
  return (
    <>
    <primitive rotation={[0 , -Math.PI / 2 , 0]} object={car.scene} position={[1,0.6,0]}/>
    
    
    </>


    )
}

export default MyCar