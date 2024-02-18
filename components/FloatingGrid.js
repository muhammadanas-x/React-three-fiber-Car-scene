import { useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { RepeatWrapping, TextureLoader } from 'three'

const FloatingGrid = () => {
    const diffuse = useLoader(TextureLoader,'carShow/grid-texture.png');


    useEffect(() => {
        diffuse.wrapS = RepeatWrapping;
        diffuse.wrapT = RepeatWrapping;
        diffuse.anisotropy = 4;
        diffuse.repeat.set(30,30);
        diffuse.offset.set(0,0);


    },[diffuse])





  return (
    <>
        <mesh rotation={[-Math.PI * 2]} position={[0,0.425,0]}>
            <planeGeometry args={[35,35]}/>
            <meshBasicMaterial
            alphaMap={diffuse}
            transparent={true}
            color={[1,1,1]}
            map={diffuse}
            
            />


        </mesh>
    </>
  )
}

export default FloatingGrid